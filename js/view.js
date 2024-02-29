import { createImageUrl } from "./api.js";

const UI_ELEMENTS = {
  TABS: {
    NOW: {
      NAME: document.querySelector('.now__name'),
      TEMPERATURE: document.querySelector('.now__temperature'),
      ICON: document.querySelector('.now__image > img'),
    },
  },
  SEARCH: document.querySelector('.weather__search'),
};

function renderNowTab(cityName, temp, icon) {
  UI_ELEMENTS.TABS.NOW.NAME.textContent = cityName;
  UI_ELEMENTS.TABS.NOW.TEMPERATURE.textContent = temp;
  UI_ELEMENTS.TABS.NOW.ICON.src = createImageUrl(icon);
}

export {
  UI_ELEMENTS,
  renderNowTab,
}