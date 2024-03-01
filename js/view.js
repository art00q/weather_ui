import { createImageUrl } from "./api.js";

const UI_ELEMENTS = {
  TABS: {
    NOW: {
      NAME: document.querySelector('.now__name'),
      TEMPERATURE: document.querySelector('.now__temperature'),
      ICON: document.querySelector('.now__image > img'),
    },
  },
  TAB_BUTTONS: document.querySelectorAll('.tabs__item'),
  TAB_DISPLAY: document.querySelectorAll('[data-link]'),
  SEARCH: document.querySelector('.weather__search'),
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
};

export {
  UI_ELEMENTS,
  renderNowTab,
  renderTabs,
}