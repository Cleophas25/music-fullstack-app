import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaBriefcase,
  FaHome,
  FaMicrophoneAlt,
  FaMusic,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Sidebar from './Sidebar'
const Layout = () => {
  const [isMobileNavlinksOpen, setIsMobileNavlinksOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("dashboard");
  return (
    <div className='bg-gray-100 flex h-screen'>
      <Sidebar />

      <div className='relative w-full flex flex-col h-screen overflow-y-hidden '>
        <header className='w-full items-center justify-center bg-white py-2 px-6 hidden sm:flex shadow-md border'>
          <Link
            to='/'
            className='text-lg text-white md:text-2xl font-bold self-center'
          >
            Vybz Music
          </Link>
          <div className='relative flex justify-end ml-auto'>
            <FaUserCircle
              className='text-gray-500 relative z-10 w-12 h-12 rounded-full overflow-hidden border-2 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none'
              onClick={() => setIsOpen(!isOpen)}
            />
            <div
              className={`${
                isOpen ? "absolute" : "hidden"
              } w-32 bg-white rounded-lg shadow-lg py-2 mt-16 z-50`}
            >
              <a
                href='#'
                className='block px-4 py-2 account-link hover:bg-gray-100'
              >
                Sign In
              </a>
              <a
                href='#'
                className='block px-4 py-2 account-link hover:bg-gray-100'
              >
                Sign Out
              </a>
            </div>
          </div>
        </header>

        {/* Mobile Header & Nav  */}
        <header className='w-full bg-[#191624] py-5 px-6 sm:hidden'>
          <div className='flex items-center justify-between'>
            <Link
              to='/'
              className='flex items-center gap-2 text-white text-xl font-semibold'
              onClick={() => setIsMobileNavlinksOpen(false)}
            >
              Vybz
              <span className='flex items-center text-yellow-500'>
                Music <FaMicrophoneAlt />
              </span>
            </Link>

            <button className='text-white text-3xl focus:outline-none cursor-pointer'>
              <FaBars
                className='z-50 text-white'
                onClick={() => setIsMobileNavlinksOpen(!isMobileNavlinksOpen)}
              />
            </button>
          </div>
          <nav
            className={`${
              isMobileNavlinksOpen
                ? "translate-x-0 ease-out"
                : "translate-x-full ease-in"
            } fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-gray-700 border-l-2 z-40 mb-2`}
          >
            <FaTimes
              className='text-white text-2xl focus:outline-none cursor-pointer'
              onClick={() => setIsMobileNavlinksOpen(!isMobileNavlinksOpen)}
            />
            <Link
              to='/dashboard'
              className='flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item'
              onClick={() => setIsMobileNavlinksOpen(false)}
            >
              <FaHome className='mr-3' />
              Discover
            </Link>

            <Link
              to='/dashboard/top-charts'
              className='flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item'
              onClick={() => setIsMobileNavlinksOpen(false)}
            >
              <FaBriefcase className='mr-3' />
              Artists
            </Link>
            <Link
              to='/dashboard/trending'
              className='flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item'
              onClick={() => setIsMobileNavlinksOpen(false)}
            >
              <FaMusic className='mr-3' />
              Albums
            </Link>

            <div className='mt-10'>
              <h2 className='my-4 ml-4 text- font-medium text-white hover:text-cyan-400'>
                My Favorites
              </h2>
              <a href='#Artists' className='my-4 ml-4 text-sm font-medium text-gray-400 hover:text-cyan-400'>
                Artists
              </a>
              <a href='#Albums' className='my-4 ml-4 text-sm font-medium text-gray-400 hover:text-cyan-400'>
                Albums
              </a>
            </div>
          </nav>
        </header>

        <div className='w-full h-screen overflow-x-hidden border-t flex flex-col'>
          <main className='w-full flex-grow p-6'>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
