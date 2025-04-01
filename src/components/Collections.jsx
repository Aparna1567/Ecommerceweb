import React from 'react';
import img from "../images/collection.webp";

const Collections = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:flex-row items-center bg-slate-400 lg:px-32 px-5'>
        <div className='flex justify-center w-full lg:w-2/4 pt-6'>
            <img src={img} alt="img" />
        </div>
        <div className='w-full lg:w-2/4 space-y-4 pt-5 text-center lg:text-start'>
            <h1 className="text-4xl font-semibold text-ExtraDarkColor">Best Summer Collection</h1>
            <h3 className=" text-lg font-bold text-DarkColor">Sale Get Upto 60% off</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor veritatis corrupti aperiam. Obcaecati, ipsum rem?</p>
            <button className=" bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800 mb-2">
          Shop Now
        </button>
        </div>

    </div>
  )
}

export default Collections