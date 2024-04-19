import React from 'react'

function Activities() {
  return (
    <>
    <div className='max-w-[1140px] m-auto w-full px-4 py-16 '>

      <div>
      <h1 className='text-4xl text-center text-gray-700 p-4 font-serif font-bold'>DUBAI</h1>
    <div className='grid grid-cols-2 gap-6 mx-4 justify-items-stretch'>
      <div className='col-span-3 '><img src="https://images.pexels.com/photos/8319455/pexels-photo-8319455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dubai" className=''/></div>
      <div><img src="https://images.pexels.com/photos/3870496/pexels-photo-3870496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dubai1" /></div>
      {/* <div><img src="https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?auto=compress&cs=tinysrgb&w=400" alt="dubai2" /></div> */}
      <div><img src="https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dubai3" /></div>
      {/* <div><img src="https://images.pexels.com/photos/3243025/pexels-photo-3243025.jpeg?auto=compress&cs=tinysrgb&w=400" alt="dubai4" /></div> */}
    </div>
    <br />
    <br />
      </div> 


      <div >
      <h1 className='text-4xl text-center text-gray-700 p-4 font-serif font-bold'>LONDON</h1>
    <div className='grid grid-cols-2 grid-rows-2 gap-6 mr-4 py-2 justify-items-stretch'> 
       <div className='col-span-2'><img src="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="london" className=''/> </div>
       <div className='row-span-1 col-span-1 flex flex-shrink'><img src="https://images.pexels.com/photos/4052791/pexels-photo-4052791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="london1" /></div>
       <div className='row-span-1 col-span-1 flex flex-shrink'><img src="https://images.pexels.com/photos/800532/pexels-photo-800532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="london2" /></div>
       {/* <div className='row-span-3 justify-center col-span-1'><img src="https://images.pexels.com/photos/7245343/pexels-photo-7245343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="london4" /></div> */}
       <div></div>
    </div>
      </div>


      <div>
      <h1 className='text-4xl text-center text-gray-700 p-4 font-serif font-bold'>PARIS</h1>
    <div className='grid grid-cols-2 grid-rows-2 gap-6 mr-4 py-2 justify-items-stretch '>
      <div className='row-span-2'><img src="https://images.pexels.com/photos/342113/pexels-photo-342113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="paris" className=''/> </div>
      <div className='flex flex-grow'><img src="https://images.pexels.com/photos/4854659/pexels-photo-4854659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="london1" /></div>
      <div className='flex flex-'><img src="https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="london2" /></div>
      <div></div>
      <div></div>
    </div>
      </div> 


    </div> 
    </>
  )
}

export default Activities
