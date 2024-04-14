import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import axios from "axios";
import Card from "../components/AlbumCard";
import { FaSearch } from "react-icons/fa";
import TopChartCard from "../components/TopChartCard";
import ReactPaginate from "react-paginate";

const TopCharts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isChanged, setIsChanged] = useState(false);
  const [searchTerm, setSearchTerm] = useState("tailor");
  const [pageCount, setPageCount] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  const getArtists = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios(
        `http://127.0.0.1:8000/api/search-artists?query=${searchTerm}&page=${currentPage}`
      );
      setIsLoading(false);
      setData(data.results.artistmatches.artist);
      setPageCount(data.artistmatches["@attr"].totalPages);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      console.log(error);
    }
  };
  useEffect(() => {
    getArtists();
    setIsChanged(true);
  }, [searchTerm, currentPage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getArtists();
  };

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;
    setCurrentPage(currentPage);
  };
  return (
    <div ref={divRef} className='flex flex-col'>
      <Hero title={`Top Tracks from Best Artists`} />
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-3xl text-gray-600 text-left mt-4 mb-10'>
          Top Tracks
        </h2>
        <form onSubmit={handleSubmit} className='flex'>
          <input
            className='w-full border rounded-l-md pl-2 pr-4 py-2 border-gray-500 focus:border-blue-500 focus:outline-none focus:shadow-outline bg-none'
            type='text'
            name='searchTerm'
            placeholder='Search by artist'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type='submit'
            className='flex bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r-md items-center justify-center'
          >
            <FaSearch />
          </button>
        </form>
      </div>

      <div className='flex justify-center'>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={0}
          onPageChange={handlePageClick}
          containerClassName={"flex space-x-2 justify-content-center flex-wrap"}
          pageClassName={
            "relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
          }
          pageLinkClassName={"page-link"}
          previousClassName={
            "relative inline-flex items-center px-4 py-2 text-sm bg-black border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
          }
          previousLinkClassName={"page-link"}
          nextClassName={
            "relative inline-flex items-center px-4 py-2 text-sm bg-black border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
          }
          nextLinkClassName={"page-link"}
          breakClassName={
            "relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
          }
          breakLinkClassName={"page-link"}
          activeClassName={
            "relative inline-flex items-center px-4 py-2 text-sm text-white font-medium border border-yellow-500 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
          }
        />
      </div>

      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {data.map((artist, i) => {
          return <TopChartCard key={i} album={artist} i={i} />;
        })}
      </div>
    </div>
  );
};

export default TopCharts;
