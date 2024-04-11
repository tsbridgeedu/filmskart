import React from 'react'
import './hero.css'
const Hero = () => {
  return (
    <div className="card-container">
        <div className="card">
        <img src="image1.jpg" />
            <div className="card-content">
                <h3>Card 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sapiente, dolore! Possimus id voluptatibus eius earum eos</p>
                <a href="" className="btn">Read More</a>
            </div>
        </div>
        <div className="card">
        <img src="image2.jpg" />
            <div className="card-content">
                <h3>Card 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sapiente, dolore! Possimus id voluptatibus eius earum eos</p>
                <a href="" className="btn">Read More</a>
            </div>
        </div>
        <div className="card">
            <img src="image3.jpg" />
            <div className="card-content">
                <h3>Card 3</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sapiente, dolore! Possimus id voluptatibus eius earum eos</p>
                <a href="" className="btn">Read More</a>
            </div>
        </div>
    </div>
  )
}

export default Hero
