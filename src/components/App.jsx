// App.jsx

import React, { useState, useEffect } from 'react';
import WeatherData from './WeatherData';
import WeatherDisplay from './WeatherDisplay';
import HomePage from './HomePage';
import "../styles/Header.css";
import Header from "./Header";
import useGeoLocation from './useGeoLocation';
import process from 'process';

// const apiKey = 'ffd35bef4b2502a86a950620325c3764';

function App() {
  const [city, setCity] = useState('');
  const [currentLocationWeather, setCurrentLocationWeather] = useState(null);

  const location = useGeoLocation();

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  // useEffect(() => {
  //   if (!city && location.loaded && !location.error) {
  //     const fetchCurrentLocationWeather = async () => {
  //       try {
  //         const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.lat}&lon=${location.coords.lng}&appid=${apiKey}`;
  //         console.log('Request URL:', url); // Добавлено для отладки
  //         const response = await fetch(url);
  //         const data = await response.json();
  //         setCurrentLocationWeather(data);
  //         console.log('Successfully obtained current location weather:', data); // Добавлено для отладки
  //       } catch (error) {
  //         console.error('Error fetching current location weather:', error);
  //         setCurrentLocationWeather(null);
  //       }
  //     };
  //
  //
  //     fetchCurrentLocationWeather();
  //   }
  // }, [city, location]);

  return (
    <>
      <Header />

      <main className="container">

        <WeatherDisplay />

        <HomePage onSearch={handleSearch} />
      </main>
    </>
  );
}

export default App;
