import React from 'react'
import { BsChevronRight } from "react-icons/bs";

const Hero = ({ title }) => {
  return (
    <div
      className='w-full h-56 bg-cover bg-no-repeat bg-center'
      style={{
        backgroundImage: `url(/src/assets/girl.jpg)`,
      }}
    >
      <div className='flex justify-center items-center h-full backdrop-brightness-50'>
        <h1 className='text-2xl sm:text-4xl text-gray-200 capitalize text-center font-primary'>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
