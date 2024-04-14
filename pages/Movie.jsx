import React from 'react'
import Navbar from '../src/components/Navbar/navbar'
import MovieBanner from '../src/components/MovieBanner/movieBanner'
import Footer from '../src/components/Footer/footer'

const Movie = () => {
  return (
    <div>
        <Navbar/>
        <MovieBanner/>
        <Footer/>
    </div>
  )
}

export default Movie