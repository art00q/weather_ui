import { API, createDetailsUrl } from "./api.js";
import { 
  UI_ELEMENTS, renderDetailsTab, renderNowTab, renderTabs 
} from "./view.js";
import { convertUnixTime, getCelcFromFaringate } from "./helpers.js";
import { DETAILS_ERROR_PARAMETERS } from "./handlers.js";

// UI_ELEMENTS.TABS.forEach((elem) => {
//   elem.addEventListener('submit', (event) => {
//     event.preventDefault();

//     console.log(event.target.textContent)
//   })
// })

UI_ELEMENTS.SEARCH.addEventListener('submit', (event) => {
  event.preventDefault();

  const cityName = event.target.firstElementChild.value;
  const cityDataUrl = createDetailsUrl(cityName);

  getCityData(cityDataUrl)
    .then(data => {
      console.log(data);
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

  event.target.firstElementChild.value = '';
});

UI_ELEMENTS.TAB_BUTTONS.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    const selectedTab = event.target.id;

    renderTabs(selectedTab);
  });
});

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