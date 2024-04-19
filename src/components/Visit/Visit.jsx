import React from 'react'

function Visit() {
  return (
    <div className='grid grid-cols-2 grid-row-3 ml-16 gap-6 my-8 '>
        <div className='relative p-4 '>
          <h1 className='absolute z-10 top-10 translate-x-[40%] text-white font-bold text-4xl '>INDIA</h1>
          <img src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  className='p-3 border-4 boder-black hover:scale-105 ease-in-out duration-300'/>
        </div>

        <div className='relative p-4'>
          <h1 className='absolute z-10 top-10 translate-x-[60%]  text-white font-bold text-3xl'>JAPAN</h1>
          <img src="https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className=' p-3 border-4 boder-black hover:scale-105 ease-in-out duration-300' />
        </div>

        <div className='relative p-4'>
          <h1 className='absolute z-10 top-10 translate-x-[60%] text-white font-bold text-3xl'>SYDNEY</h1>
          <img src="https://images.pexels.com/photos/5707610/pexels-photo-5707610.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  className=' p-3 border-4 boder-black hover:scale-105 ease-in-out duration-300'/>
        </div>

        <div className='relative p-4'>
          <h1 className='absolute z-10 top-10 translate-x-[60%] text-white font-bold text-3xl'>PARIS</h1>
          <img src="https://images.pexels.com/photos/19236025/pexels-photo-19236025/free-photo-of-eiffel-tower-and-seine-at-night.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  className=' p-3 border-4 boder-black hover:scale-105 ease-in-out duration-300'/>
        </div>

        <div className='relative p-4'>
          <h1 className='absolute z-10 top-10 translate-x-[60%] text-white font-bold text-3xl'>CHINA</h1>
          <img src="https://images.pexels.com/photos/18709771/pexels-photo-18709771/free-photo-of-great-wall-of-china.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  className=' p-3 border-4 boder-black hover:scale-105 ease-in-out duration-300'/>
        </div>

        <div className='relative p-4'>
          <h1 className='absolute z-10 top-10 translate-x-[60%] text-white font-bold text-3xl'>DUBAI</h1>
          <img src="https://images.pexels.com/photos/442579/pexels-photo-442579.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  className=' p-3 border-4 boder-black hover:scale-105 ease-in-out duration-300'/>
        </div>
        

    </div>
  )
}

export default Visit
