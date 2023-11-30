// HomePage.jsx

import React, { useState } from 'react';
import { useWeatherApi } from './weatherApiHook';
import WeatherDisplay from './WeatherDisplay';
import Search from './Search';
import "../styles/Main.css";

function HomePage() {
  const [city, setCity] = useState('');
  const { data, error } = useWeatherApi(city);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Введите город"
      />

      <Search
        onSearch={handleSearch}
        suggestedCities={['Москва', 'Oslo', 'London', 'Tokyo', 'Томск']}
        onSelectCity={setCity}
        showPlaceholder={true}
      />

      {error && <div>Error fetching weather data: {error.message}</div>}

      <WeatherDisplay weatherData={data} city={city} />
    </>
  );
}

export default HomePage;
