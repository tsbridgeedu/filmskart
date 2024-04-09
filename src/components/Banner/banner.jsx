import React from "react";
import "./banner.css";
import { Zoom } from "@mui/material";
import {Slide} from '@mui/material'
// import { IonIcon } from '@ionic/react';
// import { logoIonic } from 'ionicons/icons';

const Banner = () => {
  return (
    <div  className="container">
<div className="inner-container">
  <div className="banner-container">
  <div id='slider'>
      <figure>
        <img src='\public\imgcorosal1.jpg'></img>
        <img src='\public\imgcorosal2.jpg'></img>
        <img src='\public\imgcorosal3.jpg'></img>
        <img src='\public\imgcorosal4.jpg'></img>
        
        
      </figure>
      </div>
    
    
    
    
    
    
    </div>
  <div className="t-shirt_container">
    <img src="/t-shirt1.png" alt="t-shirt" />
    <h1>Your T-Shirt</h1>
  </div>
</div>
    </div>
  );
};

export default Banner;
