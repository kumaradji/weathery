// Search.jsx

import React, { useState } from 'react';

const Search = ({ onSearch, suggestedCities }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    onSearch(city);
  };

  const handleSuggestionClick = (suggestedCity) => {
    setCity(suggestedCity);
    onSearch(suggestedCity);
  };

  return (
    <div>
      <input type="text" value={city} onChange={handleInputChange} placeholder="Введите город" />
      <button onClick={handleSearch}>Найти</button>

      <div>
        <p>Введите город или выберете из списка: </p>
        {suggestedCities.map((suggestedCity) => (
          <span key={suggestedCity} onClick={() => handleSuggestionClick(suggestedCity)}>
            {suggestedCity}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Search;
