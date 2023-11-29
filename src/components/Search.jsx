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
      <input type="text" value={city} onChange={handleInputChange} placeholder="Enter city" />
      <button onClick={handleSearch}>Search</button>

      <div>
        <p>Suggested cities: </p>
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
