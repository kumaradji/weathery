// GeoLocationInfo.jsx
import React from 'react';

const GeoLocationInfo = ({ loaded, coords, onWeatherLoaded }) => {

  const handleWeatherLoaded = (weatherData) => {
    // Вызываем колбэк для передачи данных о погоде в родительский компонент
    onWeatherLoaded(weatherData);
  };

  return (
    <div>
      <h2>Информация о геолокации</h2>
      <p>Загружено: {loaded ? 'Да' : 'Нет'}</p>
      {loaded && (
        <div>
          <p>Широта: {coords.lat}</p>
          <p>Долгота: {coords.lng}</p>
        </div>
      )}
    </div>
  );
};

export default GeoLocationInfo;
