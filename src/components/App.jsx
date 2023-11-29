// App.jsx

import React, { useState, useEffect } from 'react';
import WeatherData from './WeatherData';
import WeatherDisplay from './WeatherDisplay';
import HomePage from './HomePage';
import "../styles/Header.css";
import Header from "./Header";

function App() {
  const [city, setCity] = useState('');
  const [currentLocationWeather, setCurrentLocationWeather] = useState(null);

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  useEffect(() => {
    if (!city) {
      const fetchCurrentLocationWeather = async () => {
        try {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;

              const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ffd35bef4b2502a86a950620325c3764`;

              const response = await fetch(url);
              const data = await response.json();
              setCurrentLocationWeather(data);
              console.log('Successfully obtained current location.');
            },
            (error) => {
              console.error('Error getting current location:', error);
              setCurrentLocationWeather(null);
            }
          );
        } catch (error) {
          console.error('Error fetching current location weather:', error);
          setCurrentLocationWeather(null);
        }
      };

      fetchCurrentLocationWeather();
    }
  }, [city]);

  return (
    <>
      <Header />

      <main className="container">
        <WeatherData
          city={city}
          render={(data) => <WeatherDisplay weatherData={data || currentLocationWeather} city={city} />}
        />

        <HomePage onSearch={handleSearch} />
      </main>
    </>
  );
}

export default App;
