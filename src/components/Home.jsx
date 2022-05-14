import React from 'react'
// import Navbar1 from './components/TopNavbar/Navbar'
import Hero from './Hero/Hero'
import Temp from './TemplateShowCase/Temp'
import Carousal from './Carousal/Carousal'
// import { Routes, Route } from "react-router-dom";
import Contact from './ContactUsPage/Contact'
// import About from './components/AboutUs/About';
function Home() {
  return (
    <>
<Hero/>
    <Temp/>
    <div className='carousalDiv ' >
    <Carousal/>
    </div>
    </>
  )
}

export default Home