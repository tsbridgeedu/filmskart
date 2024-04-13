import React from 'react';
import {NavLink} from 'react-router-dom';
import './banner.css';



const Banner = () => {
  return (
        <div className='slider'>
          <figure>
        
    <div className="hero-banner-container  h-full ">
      <div>
        <p className="beats-solo">Celebrity Store</p>
        <h3>We design</h3>
        <h1>Customize Your Tshirt</h1>
        <img src="tshirt.png" alt="headphones" className="hero-banner-image" />

        <div>
          <NavLink to="/">
            <button type="button">Explore Now</button>
          </NavLink>
         
        </div>
      </div>

     
    </div>
    
     


    
    <div className="hero-banner-container  h-full ">
      <div>
        <p className="beats-solo">Celebrity Store</p>
        <h3>Personalise Design</h3>
        <h1>Style Inspired by Cinema</h1>
        <img src="tshirt3.png" alt="headphones" className="hero-banner-image" />

        <div>
          <NavLink to="/">
            <button type="button">Explore Now</button>
          </NavLink>
         
        </div>
      </div>

     
  
    </div>


    <div className="hero-banner-container  h-full ">
      <div>
        <p className="beats-solo-2">Celebrity Store</p>
        <h3>Personalise Design</h3>
        <h1>Wear the Magic of Movies</h1>
        <img src="tshirt2.png" alt="headphones" className="hero-banner-image" />

        <div>
          <NavLink to="/">
            <button type="button">Explore Now</button>
          </NavLink>
         
        </div>
      </div>

     
  
    </div>

    <div className="hero-banner-container  h-full ">
      <div>
        <p className="beats-solo text-red-500 font-semibold tracking-wide mb-4">Celebrity Store</p>
        <h3>Personalise Design</h3>
        <h1>Where Film Meets Fashion</h1>
        <img src="tshirt4.png" alt="headphones" className="hero-banner-image" />

        <div>
          <NavLink to="/">
            <button type="button">Explore Now</button>
          </NavLink>
         
        </div>
      </div>

     
  
    </div>













    </figure>
   </div>
    
  )
}

export default Banner