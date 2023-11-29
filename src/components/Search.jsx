// Search.jsx

import React, { useState } from 'react';

const Search = ({ onSearch, suggestedCities, onSelectCity, showPlaceholder }) => {
  const [city, setCity] = useState('');

  const handleSuggestionClick = (suggestedCity) => {
    if (onSelectCity) {
      onSelectCity(suggestedCity);
    }
    if (onSearch) {
      onSearch(suggestedCity);
    }
    setCity('');
  };

  return (
    <div>
      {showPlaceholder && <p>Введите город или выберете из списка: </p>}
      {suggestedCities.map((suggestedCity, index) => (
        <span key={suggestedCity} onClick={() => handleSuggestionClick(suggestedCity)}>
          {suggestedCity}
          {index < suggestedCities.length - 1 && ' '}
        </span>
      ))}
    </div>
  );
};

export default Search;
