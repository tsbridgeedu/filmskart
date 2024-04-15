import React from 'react'
import Navbar from '../src/components/Navbar/navbar'
import MovieBanner from '../src/components/MovieBanner/movieBanner'
import Footer from '../src/components/Footer/footer'
import MovieDesc from '../src/components/MovieDesc/MovieDesc'

const Movie = () => {
  return (
    <div>
        <Navbar/>
        <MovieBanner/>
        <MovieDesc />
        <Footer/>
    </div>
  )
}

export default Movie