import React, { useEffect, useState } from 'react';
import { fetchdata } from '../utils/FetchApi';
import Geolocation from './Geolocation';
import { AiOutlineSearch } from 'react-icons/ai';

const Weatherhero = () => {
  const [real, setReal] = useState('');
  const [weatherData, setWeatherData] = useState(null); // Store the weather data

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await fetchdata(real);
        setWeatherData(data); // Store the fetched data in the state
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    // Ensure that 'real' is not empty before making the API request
    if (real.trim() !== '') {
      fetchWeatherData();
    }
  }, [real]);
  return (
    <>
        <form onSubmit={(e) => e.preventDefault()} className='m-8'>
          <input
            className='bg-white border-md border-white rounded-md text-black text-2xl transform lowercase'
            value={real}
            onChange={(e) => setReal(e.target.value)}
          />
         <button className='ml-1 text-white h-8 ' onClick={() => setReal(real)}><AiOutlineSearch className='h-8 w-8 relative top-2 hover:text-red'/></button> 
        </form>
        <div>
        {weatherData ? (
            <div className='ml-8 text-white font-mono text-xl hover:text-black'>
              <h2>Weather in {real}</h2>
              <p>Temperature: {Math.ceil(weatherData.main.temp - 273.15)}°C</p>
              <p>Weather: {weatherData.weather[0].description}</p>
              {/* Add more data as needed */}
            </div>
          ): ''}
        </div>
</>
  );
};

export default Weatherhero;
