// Header.jsx

import React, { useState, useEffect } from 'react';
import "../styles/Header.css";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Обновлять время каждую секунду
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Очистить интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []); // Пустой массив зависимостей означает, что эффект запустится только после монтирования компонента

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="header">
      <div className="header-title">
        <h1>Прогноз погоды</h1>
      </div>
      <div className="header-time">
        <h1>{formattedTime}</h1>
      </div>
    </div>
  );
};

export default Header;
