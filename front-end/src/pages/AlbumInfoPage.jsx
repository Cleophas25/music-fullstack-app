import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import {
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import Aside from "../components/Aside.jsx";
import Hero from "../components/Hero.jsx";
import { useParams } from "react-router-dom";

const AlbumInfoPage = () => {
const { album } = useParams()
console.log(album)

 const [data, setData] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState("");
 const [isChanged, setIsChanged] = useState(false);
 const getArtists = async () => {
   setIsLoading(true);
   try {
     const { data } = await axios(
       `http://127.0.0.1:8000/api/album-info?${album}`
     );
     setIsLoading(false);
     setData(data.album);
   } catch (error) {
     setIsLoading(false);
     setError(error.message);
     console.log(error);
   }
 };
 useEffect(() => {
   getArtists();
   setIsChanged(true);
  }, []);
  
  if (!data) {
   return <div>Loading...</div>;
  }
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div>
    <Hero title={data?.name} />
      <div className='container mx-auto flex flex-col lg:flex-row py-6'>
        <section className='w-full lg:w-2/3 flex flex-col p-3 min-h-screen bg-white'>
          <div className="flex gap-4 items-center">
            <div className="w-20 rounded-full h-20 border border-black">
              <img className="bg-contain overflow-hidden rounded-full" src={``} alt={data.name} />
            </div>
            <h1 className='text-3xl font-bold'>{data.artist}</h1>
            </div>
            {/* {data.map((track, i)=>{
              return (
                <div className="flex flex-col items-center">
                  name
                </div>
              )
            })} */}
        </section>
        <Aside />
      </div>
    </div>
  );
};

export default AlbumInfoPage;
