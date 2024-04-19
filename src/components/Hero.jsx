import React from 'react'
import beach from '../assets/beach.jpg'

function Hero() {
  return (
    <div className='w-full h-[100vh]'>
      <img src={beach} alt="beach" 
        className='w-full h-full object-cover' />
     <div className='max-w-[1140px] m-auto '>
        <div className='absolute top-[80%] max-w-[600px] h-full flex-col text-white p-4'>
            <h1 className='font-bold text-4xl '>PLAN WITH TRAVL</h1>
            <h2 className='font-bold text-3xl italic py-3'>Visit Exiciting and Exotic places</h2>
            <p className='mr-4'>Embark on unforgettable journeys with our travel plans, where adventure meets comfort. Explore diverse destinations, discover hidden gems, and plan your dream getaway with expert insights and personalized recommendations.</p>
        </div>
     </div>
    </div>
  )
}

export default Hero
