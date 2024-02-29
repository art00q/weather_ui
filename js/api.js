const API = {
  SERVER_URL: 'http://api.openweathermap.org/data/2.5/weather',
  API_KEY: '38809edaf50d2af3b78dd8016e4f9ef4',
};

function createDetailsUrl(cityName) {
  return `${API.SERVER_URL}?q=${cityName}&appid=${API.API_KEY}`
};

function createImageUrl(size) {
  return `https://openweathermap.org/img/wn/${size}@2x.png`
};

export {
  API,
  createDetailsUrl,
  createImageUrl,
}