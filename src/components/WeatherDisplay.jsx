// WeatherDisplay.jsx

import React, { useState, useEffect } from 'react';
import GeoWeatherLoader from './GeoWeatherLoader';
import "../styles/WeatherDisplay.css";

const WeatherDisplay = ({ weatherData, city }) => {
  if (!weatherData || weatherData.cod !== '200' || !weatherData.list || weatherData.list.length === 0) {
    return null;
  }

  const currentWeather = weatherData.list[0];
  const iconCode = currentWeather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const temperatureKelvin = currentWeather.main.temp;
  const pressure = currentWeather.main.pressure;
  const windSpeed = currentWeather.wind.speed;

  const temperatureCelsius = temperatureKelvin - 273.15;

  const pressureMmHg = (pressure * 0.750061561303).toFixed(2);

  const displayCity = city || 'этом месте';

  return (
    <div className="weather-display">
      <h2>Текущая погода в городе {displayCity}</h2>
      <img className="weather-icon" src={iconUrl} alt="Weather Icon" />

      <div className="weather-info">
        <div className="temperature-info">
          <p>Температура: {temperatureCelsius.toFixed(1)} °C</p>
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
