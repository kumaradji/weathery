// api.js

const fetchData = async (city) => {
  try {
    const apiKey = 'ffd35bef4b2502a86a950620325c3764';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch weather data for ${city}`);
    }

    const data = await response.json();

    if (!data.list || data.list.length === 0) {
      throw new Error('No weather data in the response');
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export { fetchData };
