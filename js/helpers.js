function getCelcFromFaringate(temp) {
  return `${Math.round(temp - 273.15)}°`
};

export {
  getCelcFromFaringate,
}