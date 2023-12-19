import React, {useState, useEffect} from 'react';
import {
  getIconUrl,
  getTemperatureC,
  getPressure,
  getWindSpeed
} from '../utils/weatherUtils';

const GeoLocationInfo = ({loaded, coords}) => {
  const [weatherData, setWeatherData] = useState(null);
  const iconUrl = getIconUrl(weatherData);
  const tempC = getTemperatureC(weatherData);
  const pressureMmHg = getPressure(weatherData);
  const windSpeed = getWindSpeed(weatherData);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = 'ffd35bef4b2502a86a950620325c3764';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (loaded && coords) {
      fetchWeatherData();
    }
  }, [loaded, coords]);

  if (!weatherData || weatherData.cod !== 200) {
    return null;
  }

  return (
    <div className="weather-display">
      <h2>Погода в вашем местоположении</h2>
      <img className="weather-icon" src={iconUrl}/>
      <div className="weather-info">
        <div className="temperature-info">
          <p>Температура: {tempC} °C</p>
        </div>

        <div className="pressure-info">
          <p>Давление: {pressureMmHg} мм рт. ст.</p>
        </div>

        <div className="wind-info">
          <p>Скорость ветра: {windSpeed} м/с</p>
        </div>
      </div>
    </div>

  );
};

export default GeoLocationInfo;