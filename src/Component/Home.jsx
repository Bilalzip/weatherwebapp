import React from 'react'
import Weatherhero from './Weatherhero'
import Geolocation from './Geolocation'

const Home = () => {
  return (
    <div className='flex md:flex-row flex-col justify-center items-center h-screen md:p-0 p-4'>
           
            <div className='bg-[url(https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover w-96 h-1/2 rounded-md'>
              <Geolocation/>
            </div>
            <div className='bg-[url(https://images.pexels.com/photos/258173/pexels-photo-258173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover h-1/2 w-96 md:ml-4 ml-2 md:mt-0 mt-4 rounded-md'>
              <Weatherhero/>
            </div>
    </div>
  )
}
export default Home
