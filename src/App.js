import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SmallBanner from './components/SmallBanner'
import Packages from './components/Packages'
import Carousal from './components/Carousal/Carousal'
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <SmallBanner/>
    <Packages/>
    <Carousal/>
    </>
  )
}

export default App