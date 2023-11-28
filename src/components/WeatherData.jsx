// WeatherData.jsx

import React, { Component } from 'react';
import { fetchData } from '../api';
import Loader from "./Loader";

class WeatherData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      error: null,
    };
  }

  componentDidMount() {
    const defaultCity = 'London';
    this.fetchData(defaultCity);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.city !== this.props.city) {
      this.fetchData(this.props.city);
    }
  }

  fetchData = async (city) => {
    try {
      const data = await fetchData(city);
      this.setState({ weatherData: data, error: null });
    } catch (error) {
      this.setState({ weatherData: null, error: error.message });
    }
  };

  render() {
    const { weatherData, error } = this.state;

    if (!weatherData) {
      return <Loader />
    }

    return this.props.render({ weatherData });
  }
}

export default WeatherData;
