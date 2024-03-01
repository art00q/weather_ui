async function getCityForecast(url) {
  const json = await fetchRequest(url);

  return json.list
};

async function getCityData(url) {
  try {
    const json = await fetchRequest(url);
    const isRequestCorrect = json.cod === 200;

    if (!isRequestCorrect) {
      throw new Error(json.message);
    }

    const { name, main, weather, sys, coord } = json;

    return {
      name,
      main,
      weather,
      sys,
      coord,
    }
  } catch(error) {
    throw new Error(error.message);
  }
}

async function fetchRequest(url) {
  const response = await fetch(url);
  const json = await response.json();

  return json
};

export {
  getCityData,
  getCityForecast,
  fetchRequest,
}