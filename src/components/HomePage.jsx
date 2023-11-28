// HomePage.jsx

import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';
import { fetchData } from '../api';

const HomePage = () => {
  const [city, setCity] = useState('London');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchDataForCity = async () => {
      try {
        const data = await fetchData(city);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setWeatherData(null);
      }
    };

    fetchDataForCity();
  }, [city]);

  return (

    <div>
      <button onClick={() => setCity('New York')}>Change City to New York</button>
      <WeatherDisplay weatherData={weatherData} city={city} />
    </div>
  );
};

export default HomePage;
