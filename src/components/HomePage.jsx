import React, { useState, useEffect } from 'react';
import { useWeatherApi } from './weatherApiHook';
import WeatherDisplay from './WeatherDisplay';
import Search from './Search';
import "../styles/Main.css";
import GeoLocationInfo from './GeoLocationInfo';
import useGeoLocation from './useGeoLocation';

function HomePage() {
  const [city, setCity] = useState('');
  const { data, error } = useWeatherApi(city);
  const { loaded: geoLoaded, coords: geoCoords } = useGeoLocation();
  const [loadingGeo, setLoadingGeo] = useState(false);

  useEffect(() => {
    setLoadingGeo(!geoLoaded);
  }, [geoLoaded]);

  // Добавим состояния для управления данными и загрузкой
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleWeatherLoaded = (weatherData) => {
    setWeatherData(weatherData);
    setLoading(false); // Устанавливаем loading в false после загрузки данных о погоде
  };

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

      <WeatherDisplay
        weatherData={weatherData}
        city={city}
        geoData={{ cityName: city }}
      />

      {data ? (
        <WeatherDisplay weatherData={data} city={city} geoData={geoCoords} />
      ) : (
        <p>No weather data available</p>
      )}

      <GeoLocationInfo loaded={geoLoaded} coords={geoCoords} />
    </>
  );
}

export default HomePage;
