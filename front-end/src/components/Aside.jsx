import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Aside = () => {
  return (
    <aside className='w-full lg:w-1/3 flex flex-col items-center px-3 sticky md:max-h-screen'>
      <div className='w-full bg-white shadow flex flex-col mb-4 p-6'>
        <p className='text-xl font-semibold pb-5'>About Artist</p>
        <p className='pb-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In
          hac habitasse platea dictumst.
        </p>
        <Link
          to='#'
          className='w-full bg-gray-800 text-white font-bold text-sm uppercase rounded hover:bg-gray-700 flex items-center justify-center px-2 py-3 mt-4'
        >
          Follow Artist
        </Link>
      </div>
      <div className='w-full bg-white shadow flex flex-col my-4 p-6'>
        <p className='text-xl font-semibold pb-5'>Instagram</p>
        <div className='grid grid-cols-3 gap-3'>
          <div className=''></div>
          <div className=''></div>
          <div className=''></div>
          <div className=''></div>
          <div className=''></div>
          <div className=''></div>
        </div>
        <a
          href='#'
          className='w-full bg-gray-800 text-white font-bold text-sm uppercase rounded hover:bg-gray-700 flex items-center justify-center px-2 py-3 mt-6'
        >
          <FaInstagram className='ml-2' /> Follow @TapsShinya
        </a>
      </div>
    </aside>
  );
}

export default Aside
