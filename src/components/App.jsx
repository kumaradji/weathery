// App.jsx

import React, {useState} from 'react';
import HomePage from './HomePage';
import "../styles/Header.css";
import Header from "./Header";

function App() {
  const [city, setCity] = useState('');

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  return (
    <>
      <Header/>
      <main className="container">
        <HomePage onSearch={handleSearch}/>
      </main>
    </>
  );
}

export default App;
