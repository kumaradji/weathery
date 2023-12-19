// GeoLocationInfo.jsx
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

const GeoLocationInfo = ({ loaded, coords }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        const apiKey = 'ffd35bef4b2502a86a950620325c3764';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    // Проверяем, что есть координаты и компонент загружен
    if (loaded && coords) {
      fetchWeatherData();
    }
  }, [loaded, coords]);

  return (
    <div>
      <h2>Информация о геолокации</h2>
      <p>Загружено: {loaded ? 'Да' : 'Нет'}</p>
      {loaded && (
        <div>
          <p>Широта: {coords.lat}</p>
          <p>Долгота: {coords.lng}</p>

          {weatherData && (
            <WeatherDisplay weatherData={weatherData} city={weatherData.name} geoData={{ cityName: weatherData.name }} />
          )}
        </div>
      )}
    </div>
  );
};

export default GeoLocationInfo;
