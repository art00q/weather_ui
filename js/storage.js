const storage = {
  saveFavoriteCities: function(list) {
    localStorage.setItem('favorites', list);
  },
  getFavoriteCities: function() {
    return localStorage.getItem('favorites')
  },
  saveLastCityData: function(data) {
    localStorage.setItem('cityData', data);
  },
  getLastCityData: function() {
    return localStorage.getItem('cityData')
  },
};

const currentCityData = JSON.parse(storage.getLastCityData()) || {};
const favoritesList = [...(storage.getFavoriteCities()).split(',')] || [];

export {
  favoritesList,
  storage,
  currentCityData,
}