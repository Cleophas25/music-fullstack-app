import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import {
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import Aside from "../components/Aside.jsx";
import Hero from "../components/Hero.jsx";

const ArtistPage = () => {
  
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);

  return (
    <div>
      <Hero title='Artist Page' />
      <div className='container mx-auto flex flex-col lg:flex-row py-6'>
        <section className='w-full lg:w-2/3 flex flex-col items-center px-3 min-h-screen bg-slate-300'>
      
        
        </section>
        <Aside />
      </div>
    </div>
  );
};

export default ArtistPage;
