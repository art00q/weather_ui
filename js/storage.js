const storage = {
  saveFavoriteCities: function(list) {
    localStorage.setItem('favorites', list);
  },
  getFavoriteCities: function() {
    return JSON.parse(localStorage.getItem('favorites'))
  },
  saveLastCityData: function(data) {
    localStorage.setItem('cityData', data);
  },
  getLastCityData: function() {
    return JSON.parse(localStorage.getItem('cityData'))
  },
};

const currentCityData = storage.getLastCityData() ? JSON.parse(storage.getLastCityData()) : {};
const favoritesList = storage.getFavoriteCities() ? [...(storage.getFavoriteCities())?.split(',')] : [];

export {
  favoritesList,
  storage,
  currentCityData,
}