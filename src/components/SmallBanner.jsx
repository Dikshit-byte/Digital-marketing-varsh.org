import React from 'react'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
const SmallBanner = () => {
  return (
    <>
        <div className="wrapper w-[100vw] md:space-y-0  space-y-5 space-x-2 min-h-[30vh] flex-col md:flex-row md:p-[5rem] p-4 flex justify-evenly items-center">

          <div className=" flex flex-col w-[100%] space-y-2 p-6 py-8 items-center justify-between shadow-xl md:max-w-[27%] border-2 "> 
          <img className='w-[80px]' src={img1} alt="" />
          <h2 className="font-semibold">social media  </h2>
          {/* <h2 className='font-semibold'></h2> */}
          </div>

          <div className=" flex flex-col w-[100%] space-y-2 p-6 py-8 items-center justify-between shadow-xl md:max-w-[27%] border-2"> 
          <img className='w-[80px]' src={img2} alt="" />
          <h2 className="font-semibold">marketing </h2>
          
          </div>

          <div className=" flex flex-col w-[100%] space-y-2 p-6 py-8 items-center justify-between shadow-xl md:max-w-[27%] border-2"> 
          <img className='w-[80px]' src={img3} alt="" />
          <h2 className="font-semibold">social media </h2>
          
          </div>
         

          
         
         
         </div>
    </>
  )
}

export default SmallBanner