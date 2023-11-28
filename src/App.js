// App.js

import React, { useState } from 'react';
import Search from './components/Search';
import WeatherData from './components/WeatherData';
import WeatherDisplay from './components/WeatherDisplay';

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
      </header>
    </div>
  );
}

export default App;
