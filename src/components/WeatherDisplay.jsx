// WeatherDisplay.jsx

import React from 'react';

const WeatherDisplay = ({ weatherData, city }) => {
  if (!weatherData || weatherData.cod !== '200' || !weatherData.list || weatherData.list.length === 0) {
    return null;
  }

  const currentWeather = weatherData.list[0];
  const iconCode = currentWeather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const temperatureKelvin = currentWeather.main.temp;

  const temperatureCelsius = temperatureKelvin - 273.15;

  const windSpeed = currentWeather.wind.speed;

  const pressureHpa = currentWeather.main.pressure;
  const pressureMmHg = (pressureHpa * 0.75006).toFixed(2);

  const displayCity = city || 'этом месте';

  return (
    <>
      <h2>Текущая погода в городе {displayCity}</h2>
      <img src={iconUrl} alt="Weather Icon" />
      <p>Температура: {temperatureCelsius.toFixed(1)} °C </p>
      <p>Давление: {pressureMmHg} мм рт. ст.</p>
      <p>Скорость ветра: {windSpeed} м/с</p>
    </>
  );
};

export default WeatherDisplay;
