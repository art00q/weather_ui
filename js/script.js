import { API, 
  createDetailsUrl, 
  createForecastUrl
} from "./api.js";
import { 
  UI_ELEMENTS, 
  init, 
  renderDetailsTab, 
  renderFavoritesList, 
  renderForecast, 
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
import {
  getCityData,
  getCityForecast,
} from './network.js';

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
});

async function handleRequestedData(cityDataUrl) {
  try {
    const cityData = await getCityData(cityDataUrl);
    Object.assign(currentCityData, cityData);
        
      
    storage.saveLastCityData(JSON.stringify(currentCityData));
    const { 
      name: cityName, 
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
      },
      coord: {
        lat,
        lon,
      },
    } = cityData;
  
    const celciusTemp = getCelcFromFaringate(temp);
    const celciusFeels = getCelcFromFaringate(feels_like);
    const detailParams = [
      celciusTemp,
      celciusFeels,
      main,
      convertUnixTime(sunrise),
      convertUnixTime(sunset),
    ];

    const cityForecast = await getCityForecast(createForecastUrl(currentCityData.coord.lat, currentCityData.coord.lon));
    
    currentCityData.list = cityForecast;
  
    renderNowTab(cityName, celciusTemp, icon);
    renderDetailsTab(cityName, detailParams);
    renderForecast();
  } catch(error) {
    console.log(error);
    renderNowTab('No City', '0°', '03d');
    renderDetailsTab('No City', DETAILS_ERROR_PARAMETERS);
  }
};

export {
  handleRequestedData,
}