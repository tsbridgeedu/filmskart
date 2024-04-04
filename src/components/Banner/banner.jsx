import React from "react";
import "./banner.css";
import { Zoom } from "@mui/material";
import {Slide} from '@mui/material'
const Banner = () => {
  return (
    <div  className="container">
<div className="inner-container">
  <div className="banner-container"><img src='banner.jpg' alt="banner" /></div>
  <div className="t-shirt_container">
    <img src="/t-shirt1.png" alt="t-shirt" />
    <h1>Your T-Shirt</h1>
  </div>
</div>
    </div>
  );
};

export default Banner;
