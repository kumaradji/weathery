import React, { useState, useEffect } from 'react';
import GeoWeatherLoader from './GeoWeatherLoader';
import WeatherDisplay from './WeatherDisplay';

const CurrentLocationWeather = ({ location }) => {
  const [geoWeatherData, setGeoWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleGeoWeather = (weatherData) => {
    if (weatherData) {
      setGeoWeatherData(weatherData);
    } else {
      console.log('Error loading Geo Weather Data');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (location) {
      console.log('Location:', location); // Добавим вывод в консоль
      setLoading(true);
      GeoWeatherLoader({
        location,
        onWeatherLoaded: handleGeoWeather
      });
    }
  }, [location]);

  return (
    <div>
      <h1>Погода здесь такая</h1>
      {loading && <p>Loading...</p>}
      {geoWeatherData && !loading && (
        <WeatherDisplay weatherData={geoWeatherData} />
      )}
      {!loading && !geoWeatherData && (
        <p>Error loading weather data</p>
      )}
    </div>
  );
};

export default CurrentLocationWeather;
