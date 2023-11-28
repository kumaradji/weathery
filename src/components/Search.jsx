// Search.jsx

import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div>
      <input type="text" value={city} onChange={handleInputChange} placeholder="Enter city" />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
