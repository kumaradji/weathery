// HomePage.jsx

import React, { useState, useEffect } from 'react';
import { useWeatherApi } from '../hooks/weatherApiHook';
import WeatherDisplay from './WeatherDisplay';
import Search from './Search';
import "../styles/Main.css";
import GeoLocationInfo from './GeoLocationInfo';
import useGeoLocation from '../hooks/useGeoLocation';

function HomePage() {
  const [city, setCity] = useState('');
  const { data, error } = useWeatherApi(city);
  const { loaded: geoLoaded, coords: geoCoords } = useGeoLocation();

  useEffect(() => {
    // Вы можете добавить логику обработки данных с использованием data и geoCoords,
    // например, обновление состояния, сохранение в локальном хранилище и т.д.
  }, [data, geoCoords]);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div className="weather-container">
      <div className="weather-display">
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

        <WeatherDisplay
          weatherData={data}
          city={city}
        />
      </div>

      <div className="geolocation-info">
        <GeoLocationInfo loaded={geoLoaded} coords={geoCoords} />
      </div>
    </div>
  );
}

export default HomePage;
