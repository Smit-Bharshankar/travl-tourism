import { useState } from 'react'

// import './App.css'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
function App() {

  return (
   <>
    <Navbar />
    <Outlet/>
    <Footer />
   </>
  )
}

export default App
