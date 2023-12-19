import React, { useEffect } from 'react';
import "../styles/WeatherDisplay.css";

const WeatherDisplay = ({ weatherData, city, geoData }) => {
  useEffect(() => {
    console.log('WeatherData in WeatherDisplay:', JSON.stringify(weatherData, null, 2));
    console.log('GeoData in WeatherDisplay:', JSON.stringify(geoData, null, 2));
  }, [weatherData, geoData]);

  if (!weatherData || weatherData.cod !== '200' || !weatherData.list || weatherData.list.length === 0) {
    return null;
  }

  const currentWeather = weatherData.list[0];
  const iconCode = currentWeather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const temperatureKelvin = currentWeather.main.temp;
  const pressure = currentWeather.main.pressure;
  const windSpeed = currentWeather.wind.speed;
  const temperatureCelsius = (temperatureKelvin - 273.15).toFixed(1);
  const pressureMmHg = (pressure * 0.750061561303).toFixed(2);

  // Используйте значение по умолчанию, если не удалось получить город
  const displayCity = city || (geoData && geoData.cityName) || 'этом месте';

  return (
    <div className="weather-display">
      <h2>Текущая погода в городе {displayCity}</h2>
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
