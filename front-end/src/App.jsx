import { useState } from 'react'
import Landing from './pages/Landing.jsx'
import Nopage from './pages/404.jsx'
import Layout from './components/Layout.jsx';
import { Discover, Search, TopCharts } from "./pages";
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register.jsx';
import ArtistPage from './pages/ArtistPage.jsx';
import Trending from './pages/Trending.jsx';
import SignIn from './pages/SignIn.jsx'
import GoogleCallback from './pages/GoogleCallback.jsx';
import AlbumInfoPage from './pages/AlbumInfoPage.jsx';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/auth" element={<SignIn />}/>
        <Route path="/auth/google" element={<GoogleCallback />}/>
        <Route path='/dashboard' element={<Layout />}>
          <Route index element={<Trending/>} />
          <Route path='/dashboard/trending' element={< Discover/>} />
          <Route path='/dashboard/top-charts' element={<TopCharts />} />
          <Route path='/dashboard/artist-page/:artist' element={<ArtistPage />} />
          <Route path='/dashboard/album-page/:album' element={<AlbumInfoPage />} />
          <Route path='/dashboard/search/:searchTerm' element={<Search />} />
          <Route path='*' element={<Nopage />} /> 
        </Route>
      </Routes>
    </>
  );
}

export default App
