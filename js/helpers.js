function getCelcFromFaringate(temp) {
  return `${Math.round(temp - 273.15)}°`
};

function convertUnixTime(ms) {
  const currentDate = new Date(ms * 1000);

  return `${currentDate.getHours()}:${currentDate.getMinutes()}`
};

export {
  getCelcFromFaringate,
  convertUnixTime,
}