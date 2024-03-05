import { 
  createDetailsUrl, 
  createImageUrl 
} from "./api.js";
import { 
  convertUnixTime, 
  getCelcFromFaringate, 
  getDateFromUnixTime 
} from "./helpers.js";
import { 
  handleRequestedData 
} from "./script.js";
import { 
  favoritesList,
  currentCityData,
} from "./storage.js";

const DETAIL_PARAMETERS = [
  'Temperature', 
  'Feels like',
  'Weather',
  'Sunrise',
  'Sunset',
];

const UI_ELEMENTS = {
  TABS: {
    NOW: {
      NAME: document.querySelector('.now__name'),
      TEMPERATURE: document.querySelector('.now__temperature'),
      ICON: document.querySelector('.now__image > img'),
    },
    DETAILS: {
      NAME: document.querySelector('.details__header'),
      PARAMS_LIST: document.querySelector('.details__list'),
    },
    FORECAST: {
      NAME: document.querySelector('.forecast__header'),
      FORECAST_LIST: document.querySelector('.forecast__list'),
    },
  },
  TAB_BUTTONS: document.querySelectorAll('.tabs__item'),
  TAB_DISPLAY: document.querySelectorAll('[data-link]'),
  SEARCH: document.querySelector('.weather__search'),
  SAVE_BUTTON: document.querySelector('.now__checkbox'),
  FAVORITES_LIST: document.querySelector('.list'),
};

function renderTabs(selectedTab) {
  UI_ELEMENTS.TAB_DISPLAY.forEach((elem) => {
    elem.classList.add('hidden');

    if (selectedTab === elem.dataset.link) {
      elem.classList.remove('hidden');
    }
  });
}

function renderNowTab(cityName, temp, icon) {
  UI_ELEMENTS.TABS.NOW.NAME.textContent = cityName;
  UI_ELEMENTS.TABS.NOW.TEMPERATURE.textContent = temp;
  UI_ELEMENTS.TABS.NOW.ICON.src = createImageUrl(icon);

  renderSaveButton();
};

function renderDetailsTab(cityName, params) {
  UI_ELEMENTS.TABS.DETAILS.NAME.textContent = cityName,

  UI_ELEMENTS.TABS.DETAILS.PARAMS_LIST.innerHTML = '';

  DETAIL_PARAMETERS.forEach((param, i) => {
    const weatherDetail = document.createElement('div');

    weatherDetail.classList = 'details__item text';
    weatherDetail.textContent = `${param}: ${params[i]}`;

    UI_ELEMENTS.TABS.DETAILS.PARAMS_LIST.append(weatherDetail);
  });
};

function renderFavoritesList() {
  UI_ELEMENTS.FAVORITES_LIST.innerHTML = '';

  favoritesList.forEach((cityName) => {
    const cityDataUrl = createDetailsUrl(cityName);

    const listItem = document.createElement('div');

    listItem.classList = 'list__item';
    listItem.textContent = cityName;
    listItem.addEventListener('click', () => {
      handleRequestedData(cityDataUrl);
    });

    UI_ELEMENTS.FAVORITES_LIST.append(listItem);
  });
};

function renderForecast() {
  UI_ELEMENTS.TABS.FORECAST.NAME.textContent = currentCityData.name;
  UI_ELEMENTS.TABS.FORECAST.FORECAST_LIST.innerHTML = '';

  currentCityData?.list?.forEach((forecastData) => {
    const forecastCard = document.createElement('div');

    forecastCard.classList ='card';
  
    const date = document.createElement('div');
    const day = document.createElement('p');
    const time = document.createElement('p');
  
    day.classList = 'card__date text';
    day.textContent = getDateFromUnixTime(forecastData.dt);
    time.classList = 'card__time text';
    time.textContent = convertUnixTime(forecastData.dt);
    date.classList = 'card__details';
  
    date.append(day, time);
  
    const weather = document.createElement('div');
    const information = document.createElement('div');
    const temp = document.createElement('p');
    const feels = document.createElement('p');
    const weatherIcon = document.createElement('div');
    const weatherName = document.createElement('p');
    const weatherImage = document.createElement('img');
  
    weather.classList = 'card__details';
    information.classList = 'card__information';
    temp.classList = 'card__data text';
    temp.textContent = `Temperature: ${getCelcFromFaringate(forecastData.main.temp)}`;
    feels.classList = 'card__data text';
    feels.textContent = `Feels like: ${getCelcFromFaringate(forecastData.main.feels_like)}`;
    weatherIcon.classList = 'card__icon';
    weatherName.classList = 'card__text text';
    weatherName.textContent = `${forecastData.weather[0].main}`;
    weatherImage.classList = 'card__image';
    weatherImage.alt = ' ';
    weatherImage.src = `https://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`;
    
    weatherIcon.append(weatherName, weatherImage);
    information.append(temp, feels);
    weather.append(information, weatherIcon);
  
    forecastCard.append(date, weather);

    UI_ELEMENTS.TABS.FORECAST.FORECAST_LIST.append(forecastCard);
  });
};

function renderSaveButton() {
  const isCityInStorage = favoritesList.includes(currentCityData.name);

  UI_ELEMENTS.SAVE_BUTTON.checked = isCityInStorage;
};

function init() {
  const cityDataUrl = createDetailsUrl(currentCityData?.name);

  handleRequestedData(cityDataUrl);
  renderFavoritesList();
  renderForecast();
};

export {
  UI_ELEMENTS,
  renderNowTab,
  renderTabs,
  renderDetailsTab,
  renderFavoritesList,
  renderSaveButton,
  renderForecast,
  init,
}