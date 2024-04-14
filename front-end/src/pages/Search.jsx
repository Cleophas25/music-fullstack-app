import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

const Search = () => {
  const { searchTerm } = useParams();

  if (songs.length === 0) {
    return (
      <h1 className='font-bold text-3xl text-white text-left mt-4 mb-10 capitalize'>
        no results for {searchTerm}...
      </h1>
    );
  }

  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Showing results for <span className='font-black'>{searchTerm}</span>
      </h2>

      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {songs.map((song, i) => (
          <Card
            key={song.image}
            song={song}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
