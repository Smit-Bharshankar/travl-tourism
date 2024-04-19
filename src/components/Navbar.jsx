import React from 'react'
import logo from '../assets/logo.png'
import {Link , NavLink} from 'react-router-dom'
import {FaFacebookF , FaTwitter , FaInstagram} from 'react-icons/fa'

function Navbar() {


  const openExternalLink = (url) => {
    window.open(url, '_blank');
  };

  return (
   <div className='w-full min-h-[60px] flex justify-between items-center  z-10  text-xl text-white bg-indigo-600 opacity-100'>

<div className='flex items-center '>
        <img src={logo} alt="logo"   className='h-14 mr-3'/>
        <h1 className='text-center  text-2xl font-bold text-gray-900 '>TRAVL</h1>
      </div>

    <ul className='px-4 flex'>
      <li className='mx-3'>
        <NavLink 
        to='/'
        className={({isActive}) => {
          ` ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-black `
        }}>
          Home
        </NavLink>
      </li>
      <li className='mx-3'>
        <NavLink 
        to='/visit'
        className={({isActive}) => {
          ` ${isActive ? 'text-orange-700' : 'text-gray-700'} hover:bg-black `
        }}>
          Visit
        </NavLink>
        </li>
          <li className='mx-3'>
        <NavLink 
        to='/plans'
        className={({isActive}) => {
          ` ${isActive ? 'text-orange-700' : 'text-gray-700'} hover:bg-black `
        }}>
          Plans
        </NavLink>
        </li>
        <li className='mx-3'>
        <NavLink 
        to='/about-us'
        className={({isActive}) => {
          ` ${isActive ? 'text-orange-700' : 'text-gray-700'} hover:bg-black `
        }}>
          About-us
        </NavLink>
        </li>
    </ul>
    <div className='flex justify-between cursor-pointer'>
     <a  onClick={() => openExternalLink('https://www.facebook.com/DwayneJohnson/')} role='button'><FaFacebookF className='mx-4'/></a>  
     <a  onClick={() => openExternalLink('https://twitter.com/TheRock?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor')}  role='button'> <FaTwitter className='mx-4'/> </a>
     <a  onClick={() => openExternalLink('https://www.instagram.com/therock/?hl=en')}  role='button'><FaInstagram className='mx-4'/></a>
    </div>
   </div>
  )
}

export default Navbar
