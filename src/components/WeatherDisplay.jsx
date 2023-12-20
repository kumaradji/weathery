// WeatherDisplay.jsx

import React, { useEffect } from 'react';
import "../styles/WeatherDisplay.css";
import {
  getIconUrl,
  getTemperatureC,
  getPressure,
  getWindSpeed
} from '../utils/weatherUtils';

const WeatherDisplay = ({ weatherData, city, geoData }) => {
  useEffect(() => {
  }, [weatherData, geoData]);

  if (!weatherData || weatherData.cod !== '200' || !weatherData.list || weatherData.list.length === 0) {
    return null;
  }

  const currentWeather = weatherData.list[0];
  const iconUrl = getIconUrl(currentWeather);
  const temperatureCelsius = getTemperatureC(currentWeather);
  const pressureMmHg = getPressure(currentWeather);
  const windSpeed = getWindSpeed(currentWeather);

  return (
    <div className="weather-display">
      <h2>Текущая погода в городе {city}</h2>
      <img className="weather-icon" src={iconUrl} alt="Weather Icon" />

      <div className="weather-info">
        <div className="temperature-info">
          <p>Температура: {temperatureCelsius} °C</p>
        </div>

        <div className="pressure-info">
          <p>Давление: {pressureMmHg} мм рт. ст.</p>
        </div>

        <div className="wind-info">
          <p>Скорость ветра: {windSpeed} м/с</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
