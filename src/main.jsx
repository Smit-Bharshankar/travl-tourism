import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import Visit from './components/Visit/Visit.jsx'
import Home from './components/Home/Home.jsx'
import Plans from './components/Plans/Plans.jsx'
import About from './components/About-us/About.jsx'

const router = createBrowserRouter (
   createRoutesFromElements (
    <Route path="/" element={<App/>}> 
    <Route path=""  element={<Home/>} />
    <Route path="visit" element={<Visit/>} />
    <Route path="plans"  element={<Plans />} />
    <Route path="about-us"  element={<About/>} />
    </Route>
   )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
