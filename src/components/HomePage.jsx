// HomePage.jsx

import React from 'react';
import { useWeatherApi } from './weatherApiHook';
import WeatherDisplay from './WeatherDisplay';

function Search() {
  const [city, setCity] = React.useState('');
  const { data, error } = useWeatherApi(city);

  return (
    <div>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />

      {error && <div>Error fetching weather data: {error.message}</div>}

      <WeatherDisplay weatherData={data} city={city} />
    </div>
  );
}

export default Search;

