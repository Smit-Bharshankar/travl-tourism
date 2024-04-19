import React, { useState , useEffect } from 'react'
import spacebg from '../../assets/spacebg.jpg'

function Visit() {
  const [countryName, setCountryName] = useState('');
  const [countriesInfo, setCountriesInfo] = useState({});
  const [popup , setpopup] = useState(false)

  
  const indiaInfo = {
    "City": "Agra",
    "Currency": "Indian rupee (Rs.)",
    "Population": "2,422,342,935",
    "Time Zone": "UTC+05:30",
    "Area": " 32,87,263 km²",
    "Official Language": ["Hindi", "English"],
    "Calling Code": "+91"
  };

  // Define the information specific to Japan
const japanInfo = {
  "City": "Tokyo",
  "Currency": "Japanese yen",
  "Population": "37,115,000",
  "Time Zone": "UTC/GMT +9 hours",
  "Area": "2,194.07 km²",
  "Official Language": "Japanese language itself, known as Nihongo / 日本語",
  "Calling Code": "+81"
};

// Define the information specific to France
const franceInfo = {
  "City": "Paris",
  "Currency": "Euros (EUR)",
  "Population": "11,276,701",
  "Time Zone": "UTC/GMT +2 hours",
  "Area": "18,941 km²",
  "Official Language": "French",
  "Calling Code": "+33"
};

// Define the information specific to Australia
const australiaInfo = {
  "City": "Sydney",
  "Currency": "Australian dollar (AUD$)",
  "Population": "5,185,000",
  "Time Zone": "UTC/GMT +10 hours",
  "Area": "12,367.7 km²",
  "Official Language": "De Facto, Australian English",
  "Calling Code": "+61"
};


// Define the information specific to China
const chinaInfo = {
  "City": "Beijing",
  "Currency": "Chinese Yuan",
  "Population": "22,189,082",
  "Time Zone": "CST. UTC+8h",
  "Area": "2,100 km²",
  "Official Language": "Chinese",
  "Calling Code": "+86"
};

// Define the information specific to the United Arab Emirates
const uaeInfo = {
  "City": "Dubai",
  "Currency": "AED – Emirati Dirham",
  "Population": "3,051,000",
  "Time Zone": "UTC/GMT +4 hours",
  "Area": "1,610 km²",
  "Official Language": "Modern Standard Arabic",
  "Calling Code": "+971"
};

// Update the countryInfo object with information for Japan, China, and the United Arab Emirates
const countryInfo = {
  "INDIA": indiaInfo,
  "JAPAN": japanInfo,
  "AUSTRALIA": australiaInfo,
  "FRANCE": franceInfo,
  "CHINA": chinaInfo,
  "UAE": uaeInfo
};

  
const handleImageClick = (country, info) => {
  // Update state with the country name and info
  setCountryName(country);
  setCountriesInfo(info);
  // Toggle the visibility of the popup
  setpopup(true)
};

useEffect (() => {
  let handler = () => {
    setpopup(false);
  };

  document.addEventListener('mousedown' , handler);
  return () => {
    document.removeEventListener('mousedown', handler);
  };
}, []);
  

  return (
    <>
    <div
    className='bg-cover bg-center overflow-y-auto bg-repeat  bg-opacity-20' 
    //style={{ backgroundImage: `url(${spacebg})` }}
    >
    
    <div className='grid grid-cols-2 grid-row-3 ml-16 gap-6 my-8 '>
        <div className='relative p-4 '>
          <h1 className='absolute z-10 top-10 translate-x-[40%] text-white font-bold text-4xl '>INDIA</h1>
          <img src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" onClick={() => handleImageClick('INDIA' , indiaInfo)} className='p-3 border-4 border-gray-600 hover:scale-105 ease-in-out duration-300'/>
        </div>

        <div className='relative p-4'>
          <h1 className='absolute z-10 top-10 translate-x-[60%]  text-white font-bold text-3xl'>JAPAN</h1>
          <img src="https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" onClick={() => handleImageClick('JAPAN' , japanInfo)} className=' p-3 border-4 border-gray-600 hover:scale-105 ease-in-out duration-300' />
        </div>

        <div className='relative p-4'>
          <h1 className='absolute z-10 top-10 translate-x-[30%] text-white font-bold text-3xl'>AUSTRALIA</h1>
          <img src="https://images.pexels.com/photos/5707610/pexels-photo-5707610.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" onClick={() => handleImageClick('AUSTRALIA' , australiaInfo)} className=' p-3 border-4 border-gray-600 hover:scale-105 ease-in-out duration-300'/>
        </div>

        <div className='relative p-4'>
          <h1 className='absolute z-10 top-10 translate-x-[60%] text-white font-bold text-3xl'>FRANCE</h1>
          <img src="https://images.pexels.com/photos/19236025/pexels-photo-19236025/free-photo-of-eiffel-tower-and-seine-at-night.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" onClick={() => handleImageClick('FRANCE' ,franceInfo)} className=' p-3 border-4 border-gray-600 hover:scale-105 ease-in-out duration-300'/>
        </div>

        <div className='relative p-4'>
          <h1 className='absolute z-10 top-10 translate-x-[60%] text-white font-bold text-3xl'>CHINA</h1>
          <img src="https://images.pexels.com/photos/18709771/pexels-photo-18709771/free-photo-of-great-wall-of-china.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" onClick={() => handleImageClick('CHINA' , chinaInfo)} className=' p-3 border-4 border-gray-600 hover:scale-105 ease-in-out duration-300'/>
        </div>

        <div className='relative p-4'>
          <h1 className='absolute z-10 top-10 translate-x-[60%] text-white font-bold text-3xl'>UAE</h1>
          <img src="https://images.pexels.com/photos/442579/pexels-photo-442579.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" onClick={() => handleImageClick('UAE' , uaeInfo)} className=' p-3 border-4 border-gray-600 hover:scale-105 ease-in-out duration-300'/>
        </div>
        

    </div>
    </div>

  
{
  popup && (

<div id="popup" className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white w-[30vw] h-[50vh] p-8">
        <h2 id="countryName" className="text-3xl font-bold mb-4">{countryName}</h2>
        {/* Display specific country information */}
        <ul>
          {Object.entries(countriesInfo).map(([key, value]) => (
            <li className='p-1 text-xl' key={key}>
              <strong>{key}: </strong>
              {Array.isArray(value) ? value.join(', ') : value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}



  

</>
  )
}

export default Visit
