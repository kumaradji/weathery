// WeatherData.jsx

import React, { Component } from 'react';

class WeatherData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      error: null,
    };
  }

  fetchData = async (city) => {
    try {
      // (Your API Key)
      const apiKey = 'ffd35bef4b2502a86a950620325c3764';
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

      console.log('Fetching data from:', apiUrl);

      const response = await fetch(apiUrl);

      if (!response.ok) {
        console.log('Error: Failed to fetch weather data. Response:', response);
        throw new Error(`Failed to fetch weather data for ${city}`);
      }

      const data = await response.json();
      console.log('Received data:', data);

      if (!data.list || data.list.length === 0) {
        console.log('Error: No weather data in the response. Response:', data);
        throw new Error('No weather data in the response');
      }

      this.setState({ weatherData: data, error: null });
    } catch (error) {
      console.error('Error fetching weather data:', error);
      this.setState({ weatherData: null, error: `Error fetching weather data: ${error.message}` });
    }
  };


  componentDidMount() {
    const defaultCity = 'London'; // Your default city
    this.fetchData(defaultCity);
  }

  componentDidUpdate(prevProps) {
    console.log('WeatherData componentDidUpdate - prevProps:', prevProps);
    console.log('WeatherData componentDidUpdate - nextProps:', this.props);

    if (prevProps.city !== this.props.city) {
      this.fetchData(this.props.city);
    }
  }

  render() {
    const { weatherData, error } = this.state;

    // Render loading state if data is still being fetched
    if (!weatherData) {
      return <div>Loading...</div>;
    }

    // Render the WeatherDisplay component when data is available
    return this.props.render({ weatherData });
  }
}

export default WeatherData;
