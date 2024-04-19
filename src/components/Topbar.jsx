import React from 'react'
import logo from '../assets/logo.png'
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';

function Topbar() {
  return (
    <div className=' bg-slate-300 flex justify-between items-center px-4 py-2'>
      
      <div className='flex items-center '>
        <img src={logo} alt="logo"   className='h-14 mr-3'/>
        <h1 className='text-center  text-2xl font-bold text-gray-900 '>TRAVL</h1>
      </div>

      <div className='flex '>
        <div className='items-center px-4 '>
        
        </div>
        <Link to='/visit'>
        <div className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer'>Get Started</div>
        </Link>
      </div>

    </div>
  )
}

export default Topbar
