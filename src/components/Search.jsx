import React, { useState, useRef, useEffect } from 'react';
import "../styles/Search.css";

const Search = ({ onSearch, suggestedCities, onSelectCity, showPlaceholder }) => {
  const [searchedCity, setSearchedCity] = useState('');
  const containerRef = useRef(null);

  const handleSuggestionClick = (suggestedCity) => {
    // Вызываем onSelectCity, чтобы обработать выбор города
    if (onSelectCity) {
      onSelectCity(suggestedCity);
    }

    // Вызываем onSearch, чтобы обработать поиск (если необходимо)
    if (onSearch) {
      onSearch(suggestedCity);
    }

    // Очищаем поле ввода после выбора города
    setSearchedCity('');
  };

  const handleEmptyAreaClick = (e) => {
    // Перезагружаем страницу, если пользователь кликнул вне области поиска
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
