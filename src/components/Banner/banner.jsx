import React from "react";
import "./banner.css";
const Banner = () => {
  return (
    <div className="container">
      <div className="elements_container">
        <div className="t-shirt"> <h1>Your T-Shirt</h1></div>
        <div className="banner"><img src="banner.jpg" alt="" /></div>
      </div>
    </div>
  );
};

export default Banner;
