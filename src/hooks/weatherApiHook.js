// weatherApiHook.js

import { useState, useEffect } from 'react';
import { fetchData } from '../utils/api';

export function useWeatherApi(city) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForCity = async () => {
      try {
        const weatherData = await fetchData(city);
        setData(weatherData);
        setError(null);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setData(null);
        setError(error);
      }
    };

    if (city) {
      fetchDataForCity();
    }
  }, [city]);

  return { data, error };
}
