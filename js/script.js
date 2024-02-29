import { API, createDetailsUrl } from "./api.js";
import { 
  UI_ELEMENTS, renderNowTab 
} from "./view.js";
import { getCelcFromFaringate } from "./helpers.js";

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
      }, 
        weather: [
          {
            icon
          }
        ] } = data;

      const celciusTemp = getCelcFromFaringate(temp);

      renderNowTab(cityName, celciusTemp, icon);
    });

  event.target.firstElementChild.value = '';
});

async function getCityData(url) {
  const request = await fetch(url);
  const json = await request.json();

  const { name, main, weather } = json;

  return {
    name,
    main,
    weather,
  }
}