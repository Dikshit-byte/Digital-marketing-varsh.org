import React from 'react'

const SmallBanner = ({first,second,third,image1,image2,image3}) => {
  return (
    <>
        <div className="wrapper w-[100vw] md:space-y-0  space-y-5 space-x-2 min-h-[30vh] flex-col md:flex-row md:p-[5rem] p-4 flex justify-evenly items-center">

          <div className=" flex flex-col w-[100%] space-y-2 p-6 py-8 items-center justify-between shadow-xl md:max-w-[27%] border-2 "> 
          <img className='w-[80px]' src={image1} alt="" />
          <h2 className="font-semibold">{first}  </h2>
          {/* <h2 className='font-semibold'></h2> */}
          </div>

          <div className=" flex flex-col w-[100%] space-y-2 p-6 py-8 items-center justify-between shadow-xl md:max-w-[27%] border-2"> 
          <img className='w-[80px]' src={image2} alt="" />
          <h2 className="font-semibold">{second} </h2>
          
          </div>

          <div className=" flex flex-col w-[100%] space-y-2 p-6 py-8 items-center justify-between shadow-xl md:max-w-[27%] border-2"> 
          <img className='w-[80px]' src={image3} alt="" />
          <h2 className="font-semibold">{third} </h2>
          
          </div>
         </div>
    </>
  )
}

export default SmallBanner