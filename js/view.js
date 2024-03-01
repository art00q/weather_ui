import { createDetailsUrl, createImageUrl } from "./api.js";
import { currentCityData, handleRequestedData } from "./script.js";
import { favoritesList } from "./storage.js";

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
    }
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

function renderSaveButton() {
  const isCityInStorage = favoritesList.includes(currentCityData.name);

  UI_ELEMENTS.SAVE_BUTTON.checked = isCityInStorage;
}

export {
  UI_ELEMENTS,
  renderNowTab,
  renderTabs,
  renderDetailsTab,
  renderFavoritesList,
  renderSaveButton,
}