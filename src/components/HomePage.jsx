import React, { useState } from 'react';
import { useWeatherApi } from './weatherApiHook';
import WeatherDisplay from './WeatherDisplay';
import Search from './Search';
import "../styles/Main.css";
import GeoWeatherLoader from "./GeoWeatherLoader";
import CurrentLocationWeather from "./CurrentLocationWeather";

function HomePage() {
  const [city, setCity] = useState('');
  const { data, error } = useWeatherApi(city);
  const [loading, setLoading] = useState(false); // Добавьте эту строку

  console.log('City in HomePage:', city);
  console.log('Data in HomePage:', data);
  console.log('Error in HomePage:', error);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Введите город или выберете из списка"
      />

      <Search
        onSearch={handleSearch}
        suggestedCities={['Москва', 'Сочи', 'Bern', 'Oslo', 'London', 'Tokyo', 'Томск']}
        onSelectCity={setCity}
        showPlaceholder={true}
      />

      {loading && <p>Loading...</p>} {/* Убедитесь, что эта строка используется правильно и не вызывает ошибку */}

      {error && <div>Error fetching weather data: {error.message}</div>}

      <WeatherDisplay weatherData={data} city={city} />

      <CurrentLocationWeather />
    </>
  );
}

export default HomePage;
