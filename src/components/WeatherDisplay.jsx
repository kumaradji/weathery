// WeatherDisplay.jsx

import React from 'react';
import { WiDaySunny, WiRain } from 'react-icons/wi';

const WeatherDisplay = ({ weatherData, city }) => {
  if (!weatherData || weatherData.cod !== '200' || !weatherData.list || weatherData.list.length === 0) {
    return null;
  }

  const currentWeather = weatherData.list[0];
  const icon = currentWeather.weather[0].main === 'Clear' ? <WiDaySunny /> : <WiRain />;
  const temperatureKelvin = currentWeather.main.temp;

  const temperatureCelsius = temperatureKelvin - 273.15;
  const temperatureFahrenheit = (temperatureKelvin - 273.15) * 9/5 + 32;

  const displayCity = city || 'Геолокация';

  return (
    <>
      <h2>Текущая погода в городе {displayCity}</h2>
      {icon}
      <p>Температура: {temperatureCelsius.toFixed(2)} °C / {temperatureFahrenheit.toFixed(2)} °F</p>
    </>
  );
};

export default WeatherDisplay;
