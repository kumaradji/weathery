// App.jsx

import React, { useState } from 'react';
import Search from './Search';
import WeatherData from './WeatherData';
import WeatherDisplay from './WeatherDisplay';
import HomePage from './HomePage'; // Импортируйте компонент HomePage

function App() {
  const [city, setCity] = useState('');

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Search onSearch={handleSearch} />
        <WeatherData city={city} render={(data) => <WeatherDisplay weatherData={data} />} />
        <HomePage />
      </header>
    </div>
  );
}

export default App;
