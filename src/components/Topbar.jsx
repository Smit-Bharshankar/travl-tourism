import React from 'react'
import logo from '../assets/logo.png'
import { IoMdTime } from "react-icons/io";


function Topbar() {
  return (
    <div className=' bg-slate-200 flex justify-between items-center px-4 py-2'>
      
      <div className='flex items-center'>
        <img src={logo} alt="logo"   className='h-14 mr-3'/>
        <h1 className='text-center font-bold text-gray-700 '>TRAVL</h1>
      </div>

      <div className='flex '>
        <div className='items-center px-4 '>
        <IoMdTime size={20} className='ml-6'/>
        <p className='text-base '>9AM-8PM</p>
        </div>
        <div className='p-3  items-center bg-gradient-to-r from-red-600 to-red-400 rounded-xl text-purple-200'>Get Started</div>
      </div>

    </div>
  )
}

export default Topbar
