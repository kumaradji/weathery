// weatherUtils.js

export const getIconUrl = (weatherData) => {
  if (!weatherData) {
    return;
  }
  const iconCode = weatherData.weather[0].icon;
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

export const getTemperatureC = (weatherData) => {
  if(!weatherData) {
    return;
  }
  const tempK = weatherData.main.temp;
  return (tempK - 273.15).toFixed(1);
}

export const getPressure = (weatherData) => {
  if (!weatherData) {
    return;
  }
  const pressure = weatherData.main.pressure;
  return (pressure * 0.750061561303).toFixed(2);
}

export const getWindSpeed = (weatherData) => {
  if (!weatherData) {
    return;
  }
  return weatherData.wind.speed;
}