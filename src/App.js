import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SmallBanner from './components/SmallBanner'
import Packages from './components/Packages'
import Carousal from './components/Carousal/Carousal'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import image7 from "./images/image7.png";
import image8 from "./images/image8.png";
import image9 from "./images/image9.png";
import Text from './components/Text'
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <SmallBanner first={"Social media management"} second={"Email marketing"} third={"Social media marketing"} image1={img1} image2={img2} image3={img3}/>
    <Packages/>
    <Text/>
    <SmallBanner first={"Social media management"} second={"Email marketing"} third={"Social media marketing"} image1={image4} image2={image5} image3={image6}/>
    <SmallBanner first={"Social media management"} second={"Email marketing"} third={"Social media marketing"} image1={image7} image2={image8} image3={image9} />
    <Carousal/>
    </>
  )
}
export default App