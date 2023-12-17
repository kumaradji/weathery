// GeoWeatherLoader.jsx

import { useEffect } from 'react';

const apiKey = 'ffd35bef4b2502a86a950620325c3764';

const GeoWeatherLoader = ({ location, onWeatherLoaded }) => {
  useEffect(() => {
    const fetchWeatherByLocation = async () => {
      if (!location.loaded || location.error) {
        return;
      }

      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.lat}&lon=${location.coords.lng}&appid=${apiKey}`;

        const response = await fetch(url);

        const weatherData = await response.json();

        onWeatherLoaded(weatherData);

      } catch (error) {
        console.error(error);
        onWeatherLoaded(null);
      }
    };

    fetchWeatherByLocation();
  }, [location, onWeatherLoaded]);

  return null;
};

export default GeoWeatherLoader;
