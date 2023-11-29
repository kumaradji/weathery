// App.jsx

import React, { useState, useEffect } from 'react';
import WeatherData from './WeatherData';
import WeatherDisplay from './WeatherDisplay';
import HomePage from './HomePage';

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
    <div className="App">
      <header className="App-header">
        <h1>Погода в городе</h1>
        <WeatherData
          city={city}
          render={(data) => <WeatherDisplay weatherData={data || currentLocationWeather} city={city} />}
        />
        <HomePage onSearch={handleSearch} />
      </header>
    </div>
  );
}

export default App;
