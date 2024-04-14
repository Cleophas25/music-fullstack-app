import React from 'react'
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaHome, FaMicrophone, FaMicrophoneAlt, FaMusic, } from "react-icons/fa";

const links = [
  { name: "Discover", to: "/dashboard", icon: FaHome },
  { name: "Trending Artists", to: "/dashboard/trending", icon: FaMusic },
  { name: "More Artists", to: "/dashboard/top-charts", icon: FaMicrophone },
];

const Sidebar = () => {
const { pathname } = useLocation()

  return (
    <>
      <div className='sm:flex hidden flex-col w-[280px] py-4 px-4 bg-[#191624] h-full'>
        <Link to='/' className=' flex gap-2 text-2xl text-cyan-500 font-bold'>
          Vybz
          <span className='flex items-center text-yellow-500'>
            Music <FaMicrophoneAlt />
          </span>
        </Link>
        <div className='mt-10'>
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={`${
                pathname === item.to ? "text-cyan-400" : 'text-gray-400'
              } flex flex-row justify-start items-center my-8 text-sm font-medium hover:text-cyan-400`}
            >
              <item.icon className='w-4 h-4 mr-2' />
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className='flex flex-col mt-10'>
          <h2 className='my-2 ml-2 text- font-medium text-white hover:text-cyan-400'>
            My Favorites
          </h2>
          <a href='#artists' className='mt-2 ml-2 text-sm font-medium text-gray-400 hover:text-cyan-400'>
            Artists
          </a>
          <a href='#albums' className='mt-2 ml-2 text-sm font-medium text-gray-400 hover:text-cyan-400'>
            Albums
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
