// GeoWeatherLoader.jsx
import { useEffect } from 'react';

const apiKey = 'ffd35bef4b2502a86a950620325c3764';

const GeoWeatherLoader = (props) => {
  const { location, onWeatherLoaded } = props;

  useEffect(() => {
    const fetchWeatherByLocation = async () => {
      try {
        if (!location || !location.coords) {
          throw new Error('Invalid location data');
        }

        const { coords } = location; // Добавлено: деструктурируем объект location
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch weather data. Status: ${response.status}`);
        }

        const weatherData = await response.json();

        onWeatherLoaded(weatherData);
      } catch (error) {
        console.error(error.message);
        onWeatherLoaded(null);
      }
    };

    if (location && location.coords && location.loaded) {
      fetchWeatherByLocation();
    }
  }, [location, onWeatherLoaded]);

  return null;
};

export default GeoWeatherLoader;
