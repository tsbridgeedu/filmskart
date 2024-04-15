import React from 'react'
import Navbar from '../src/components/Navbar/navbar'
import MovieBanner from '../src/components/MovieBanner/movieBanner'
import Footer from '../src/components/Footer/footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Movie = () => {
  return (
    <div className='flex flex-col '>
        <Navbar/>
        <MovieBanner/>
        <Footer/>
    </div>
  )
}

export default Movie