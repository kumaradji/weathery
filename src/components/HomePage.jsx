// HomePage.jsx

import React from 'react';
import { useWeatherApi } from './weatherApiHook';
import WeatherDisplay from './WeatherDisplay';
import Search from './Search';
import "../styles/Main.css";

function HomePage() {
  const [city, setCity] = React.useState('');
  const { data, error } = useWeatherApi(city);

  return (
    <>
      <Search onSearch={setCity} suggestedCities={['Oslo ', 'London ', 'Tokyo ', 'Москва']} />

      {error && <div>Error fetching weather data: {error.message}</div>}

      <WeatherDisplay weatherData={data} city={city} />


    </>
  );
}

export default HomePage;
