// HomePage.jsx

import React from 'react';
import { useWeatherApi } from './weatherApiHook';
import WeatherDisplay from './WeatherDisplay';
import Search from './Search'; // Импортируем компонент Search

function HomePage() {
  const [city, setCity] = React.useState('');
  const { data, error } = useWeatherApi(city);

  return (
    <div>
      {/* Передаем onSearch в компонент Search */}
      <Search onSearch={setCity} suggestedCities={['New York', 'London', 'Tokyo']} />

      {error && <div>Error fetching weather data: {error.message}</div>}

      <WeatherDisplay weatherData={data} city={city} />
    </div>
  );
}

export default HomePage;
