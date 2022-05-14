import React from 'react'

function Text() {
  return (
    <>
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100&display=swap');
    .paragraph{
      display : flex;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 181.69%;
      justify-content: center;
      align-items : center;
      letter-spacing: 0.005em;
      color: #5B6062;
    }
    .text{
    display : flex;
    left: 433px;
top: 2813px;
    flex-direction : column;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 124.19%;
    text-align: center;
    letter-spacing: 0.035em;
    font-family: 'Noto Sans', sans-serif;
    justify-content : center;
    align-items: center;
    color: #000000;
    }
    `}</style>
    <div className="paragraph">
    <p>Why choose us</p>
    </div>
      <p className='text'><span>Whether you're starting up or</span>  <span>expanding your business, we can</span> <span>help you move forward</span> </p>
    </>
  )
}

export default Text