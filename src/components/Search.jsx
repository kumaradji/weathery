// Search.jsx

import React, { useState, useRef, useEffect } from 'react';

const Search = ({ onSearch, suggestedCities, onSelectCity, showPlaceholder }) => {
  const [city, setCity] = useState('');
  const containerRef = useRef(null);

  const handleSuggestionClick = (suggestedCity) => {
    if (onSelectCity) {
      onSelectCity(suggestedCity);
    }
    if (onSearch) {
      onSearch(suggestedCity);
    }
    setCity('');
  };

  const handleEmptyAreaClick = (e) => {
    if (!containerRef.current.contains(e.target)) {
      // Клик произошел вне контейнера, выполнить перезагрузку страницы
      window.location.reload();
    }
  };

  useEffect(() => {
    // Добавить обработчик клика при монтировании компонента
    document.addEventListener('click', handleEmptyAreaClick);

    // Удалить обработчик при размонтировании компонента
    return () => {
      document.removeEventListener('click', handleEmptyAreaClick);
    };
  }, []); // Пустой массив зависимостей, чтобы обработчик добавлялся/удалялся только один раз

  return (
    <div ref={containerRef}>
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

