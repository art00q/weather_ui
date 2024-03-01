function getCelcFromFaringate(temp) {
  return `${Math.round(temp - 273.15)}°`
};

function convertUnixTime(s) {
  const currentDate = new Date(s * 1000);

  return `${currentDate.getHours()}:${currentDate.getMinutes()}`
};

export {
  getCelcFromFaringate,
  convertUnixTime,
}