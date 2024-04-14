import React from "react";
import { Link } from "react-router-dom";

const Card = ({ artist, i }) => {
  return (
    <div className='w-full flex flex-col mt-5 gap-2 max-w-sm mx-auto overflow-hidden'>
      <div className='w-full h-36 border border-black rounded-md p-1'>
        <Link to={`/dashboard/artist-page/${artist?.name}`}>
          <img
            src={`${artist.image[3]["#text"]}`}
            alt='hie'
            className='object-cover w-full h-full transform hover:scale-110 transition .duraton-700  ease-in-out'
          />
        </Link>
      </div>
      <Link to={`/dashboard/artist-page/${artist?.name}`}>
        <h2 className='font-semibold capitalize'>{artist?.name}</h2>
      </Link>
      <div className='flex items-center justify-between'>
        <p className='capitalize font-semibold text-gray-500'>playcount:</p>
        <span className='text-green-500'>{artist?.playcount}</span>
      </div>
    </div>
  );
};

export default Card;
