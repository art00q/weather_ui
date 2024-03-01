import { API, 
  createDetailsUrl 
} from "./api.js";
import { 
  UI_ELEMENTS, 
  init, 
  renderDetailsTab, 
  renderFavoritesList, 
  renderNowTab, 
  renderTabs 
} from "./view.js";
import { 
  convertUnixTime, 
  getCelcFromFaringate 
} from "./helpers.js";
import { DETAILS_ERROR_PARAMETERS } from "./handlers.js";
import { 
  favoritesList, 
  storage,
  currentCityData,
} from "./storage.js";

init();

UI_ELEMENTS.SEARCH.addEventListener('submit', (event) => {
  event.preventDefault();

  const cityName = event.target.firstElementChild.value;
  const cityDataUrl = createDetailsUrl(cityName);

  handleRequestedData(cityDataUrl);

  event.target.firstElementChild.value = '';
});

UI_ELEMENTS.TAB_BUTTONS.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    const selectedTab = event.target.id;

    renderTabs(selectedTab);
  });
});

UI_ELEMENTS.SAVE_BUTTON.addEventListener('click', (event) => {
  const isSaved = event.target.checked;
  const isCityNotInStorage = !favoritesList.includes(currentCityData.name);

  if (isSaved && isCityNotInStorage) {
    favoritesList.push(currentCityData.name);
  } else {
    const index = favoritesList.indexOf(currentCityData.name);

    if (index !== -1) {
      favoritesList.splice(index, 1);
    };
  };

  storage.saveFavoriteCities(favoritesList);

  renderFavoritesList();

  console.log(favoritesList)
});

function handleRequestedData(cityDataUrl) {
  getCityData(cityDataUrl)
    .then(data => {
      Object.assign(currentCityData, data);
      
      storage.saveLastCityData(JSON.stringify(currentCityData));
      console.log(currentCityData);
      const { name: cityName, 
        main: {
        temp,
        feels_like,
      }, 
        weather: [
          {
            main,
            icon,
          }
        ],
        sys: {
          sunrise,
          sunset,
        } } = data;

      const celciusTemp = getCelcFromFaringate(temp);
      const celciusFeels = getCelcFromFaringate(feels_like);

      const detailParams = [
        celciusTemp,
        celciusFeels,
        main,
        convertUnixTime(sunrise),
        convertUnixTime(sunset),
      ];

      renderNowTab(cityName, celciusTemp, icon);
      renderDetailsTab(cityName, detailParams);
    })
    .catch((error) => {
      console.log(error);
      renderNowTab(error.message, '0°', '03d');
      renderDetailsTab(error.message, DETAILS_ERROR_PARAMETERS);
    });
};

async function getCityData(url) {
  try {
    const request = await fetch(url);
    const json = await request.json();
    const isRequestCorrect = json.cod === 200;

    if (!isRequestCorrect) {
      throw new Error(json.message);
    }

    const { name, main, weather, sys } = json;

    return {
      name,
      main,
      weather,
      sys,
    }
  } catch(error) {
    throw new Error(error.message);
  }
}

export {
  handleRequestedData,
}