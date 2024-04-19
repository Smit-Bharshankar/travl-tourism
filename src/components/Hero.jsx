import React from 'react'
import beach from '../assets/beach.jpg'
import { Link } from 'react-router-dom';


function Hero() {
  return (
    <div className='w-full h-[100vh]'>
      <img src={beach} alt="beach" 
        className='w-full h-full object-cover' />
     <div className='max-w-[1140px] m-auto '>
      <div>
        <div className='absolute top-[70%] max-w-[600px] h-auto flex flex-col text-white p-4'>
            <h1 className='font-bold text-5xl '>PLAN WITH TRAVL</h1>
            <h2 className='font-bold text-4xl italic py-3'>Visit Exiciting and Exotic places</h2>
            <p className='mr-4 text-xl '>Embark on unforgettable journeys with our travel plans, where adventure meets comfort. Explore diverse destinations, discover hidden gems, and plan your dream getaway with expert insights and personalized recommendations.</p>
        </div>
            <Link to='/visit'>
        <div className= ' absolute top-[75%] translate-x-[35vw]  bg-lime-500 hover:bg-transparent  text-white font-bold text-xl py-4 px-7 rounded-full cursor-pointer'>Get Started</div>
        </Link>

      </div>
        
     </div>
    </div>
  )
}

export default Hero
