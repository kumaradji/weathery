import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';
import useGeoLocation from './useGeoLocation';

function CurrentLocationWeather() {
  const geoLocation = useGeoLocation(); // Получаем координаты из кастомного хука
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchGeoWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        if (!geoLocation.loaded || geoLocation.error) {
          throw new Error("Unable to fetch weather data without location");
        }

        const { lat, lng } = geoLocation.coords;
        const apiKey = 'ffd35bef4b2502a86a950620325c3764'; // Замените на свой ключ

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const weather = await response.json();
        setWeatherData(weather);
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };

    fetchGeoWeather();
  }, [geoLocation]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Произошла ошибка: {error.message}</p>;
  }

  return (
    <WeatherDisplay weather={weatherData} />
  );
}

export default CurrentLocationWeather;
