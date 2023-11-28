// WeatherDisplay.jsx

import React from 'react';
import { WiDaySunny, WiRain } from 'react-icons/wi';

const WeatherDisplay = ({ weatherData, city }) => {
  console.log('Weather Data:', weatherData);

  if (!weatherData || weatherData.cod !== '200' || !weatherData.list || weatherData.list.length === 0) {
    return <div>Error: Unable to display weather data for {city}.</div>;
  }

  const currentWeather = weatherData.list[0];
  const icon = currentWeather.weather[0].main === 'Clear' ? <WiDaySunny /> : <WiRain />;
  const temperatureKelvin = currentWeather.main.temp;

  // Convert temperature to Celsius
  const temperatureCelsius = temperatureKelvin - 273.15;

  // Convert temperature to Fahrenheit
  const temperatureFahrenheit = (temperatureKelvin - 273.15) * 9/5 + 32;

  return (
    <div>
      <h2>Current Weather in {city}</h2>
      {icon}
      <p>Temperature: {temperatureCelsius.toFixed(2)} °C / {temperatureFahrenheit.toFixed(2)} °F</p>
    </div>
  );
};

export default WeatherDisplay;
