import React, { useEffect, useState } from 'react';
import { fetchcurrent } from '../utils/FetchApi';

const Geolocation = () => {
  const [current, setcurrent] = useState(null);
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
      );
    } 
  }, []); 

  useEffect(() => {
    const fetchrealtime = async () => {
      if (location.latitude !== null && location.longitude !== null) {
        const realdata = await fetchcurrent(location.latitude, location.longitude);
        setcurrent(realdata);
        console.log(realdata);
      }
    }
    fetchrealtime();
  }, [location.latitude, location.longitude]);

  return (
    <>
    <div className='m-8'> 
       <div className=''>
       <div className='text-white hover:text-blue-600 font-mono text-4xl font-bold '>How's the Air</div> 
      { current ? ( <ul className='text-white font-bold mt-4 mb-4 '>
        <li>Deg: {current.wind.deg}</li>
        <li>Gust: {current.wind.gust}</li>
        <li>Speed: {current.wind.speed}</li>
       </ul> ) : (<p>LOading</p>) }
       </div>

      <div className='text-white font-mono font-bold text-4xl '>
      {current ? (
        <div className='pt-4'>
        <h1 className=''>
          {Math.ceil(current.main.temp - 273.15)}°C
        </h1> 
        <p className='pt-4'>{current.weather[0].description}</p>  
        <h1 className='mt-4'>{current.name},{current.sys.country}</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </div>
    </>
  );
};

export default Geolocation;
