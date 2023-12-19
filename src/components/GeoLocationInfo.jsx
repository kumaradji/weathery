import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

const GeoLocationInfo = ({ loaded, coords }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = 'ffd35bef4b2502a86a950620325c3764';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (loaded && coords) {
      fetchWeatherData();
    }
  }, [loaded, coords]);

  return (
    <div>
      <h2>Geo Location Info</h2>

      {loaded && coords && weatherData && (
        <div>
          <p>Широта: {coords.lat}</p>
          <p>Долгота: {coords.lng}</p>

          <p>Температура: {weatherData.main.temp} °C</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
          <p>Погода: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default GeoLocationInfo;