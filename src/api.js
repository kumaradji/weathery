// api.js

const fetchData = async (city) => {
  try {
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

    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export { fetchData };
