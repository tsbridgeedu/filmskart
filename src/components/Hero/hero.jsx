import React from 'react'
import './hero.css'
const Hero = () => {
  return (
    <section>
      <div className='heading'>
          <h1>Upcoming Movies</h1>
      </div>
    <div className='container'>
         
           <div className='container-1'>
            <img src='card1.jpg'></img>
           </div>
           <div className='container-2'>
           <img src='card2.jpg'></img>
           </div>
           <div className='container-3'>
           <img src='card3.jpg'></img>
           </div>
           <div className='container-4'>
           <img src='card4.jpg'></img>
           </div>
        </div>

  </section>
  )
}

export default Hero
