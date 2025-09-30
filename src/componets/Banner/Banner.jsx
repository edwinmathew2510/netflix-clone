import React from 'react'
import "./Banner.css";

function Banner() {
  return (
    <div className='banner'>
        <div className=' content'>
            <h1 className='title'>Movie Name</h1>
            <div className='Banner-btns'>
                <button>Play</button>
                <button>My list</button>
            </div>
            <h1 className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, cum?</h1>
        </div>
        <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner
