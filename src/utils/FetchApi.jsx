const API_KEY = '89fb8a322d4e54c406430bb4e9201fbb';

export const FetchApidata = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
  return response.json(); // Return the parsed JSON response
};

export const fetchdata = async (city) => {
  try {
    const response = await FetchApidata(city);
    return response; // Return the fetched data
  } catch (error) {
    throw new Error(`Error fetching weather data: ${error.message}`);
  }
};

export const realtime = async (lat, lon) => {
  const real_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const response = await fetch(real_url);
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
  return response.json(); // Parse the JSON response and return it
};

export const fetchcurrent = async (lat,lon) => {
  try {
    const response = await realtime(lat,lon);
    return response; // Return the parsed JSON response
  } catch (error) {
    throw new Error(`Error fetching current weather data: ${error.message}`);
  }
};
