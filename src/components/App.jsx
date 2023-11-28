// App.jsx

import React, { useState } from 'react';
import Search from './Search';
import WeatherData from './WeatherData';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  const [city, setCity] = useState('');

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <Search onSearch={handleSearch} />
      <WeatherData city={city} render={(data) => <WeatherDisplay weatherData={data} />} />
    </div>
  );
};

export default App;
