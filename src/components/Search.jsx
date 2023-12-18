import React, { useState, useRef, useEffect } from 'react';
import "../styles/Search.css";

const Search = ({ onSearch, suggestedCities, onSelectCity, showPlaceholder }) => {
  const [searchedCity, setSearchedCity] = useState('');
  const containerRef = useRef(null);

  const handleSuggestionClick = (suggestedCity) => {
    if (onSelectCity) {
      onSelectCity(suggestedCity);
    }
    if (onSearch) {
      onSearch(suggestedCity);
    }
    setSearchedCity('');
  };

  const handleEmptyAreaClick = (e) => {
    if (!containerRef.current.contains(e.target) && e.target.tagName !== "INPUT") {
      window.location.reload();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleEmptyAreaClick);

    return () => {
      document.removeEventListener('click', handleEmptyAreaClick);
    };
  }, []);

  return (
    <>
      <div className="search-container">
        <div ref={containerRef} className="d-flex gap-2">
          {showPlaceholder && (
            <div className="custom-button-group">
              {suggestedCities.map((suggestedCity) => (
                <button
                  key={suggestedCity}
                  type="button"
                  className="custom-button"
                  onClick={() => handleSuggestionClick(suggestedCity)}
                >
                  {suggestedCity}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
