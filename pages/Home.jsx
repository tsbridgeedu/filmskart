import React from "react";
import Banner from "../src/components/Banner/banner.jsx";
import { CategoriesSlider } from "../src/components/Categories/CategoriesSlider.jsx";


const Home = () => {
  return (
    <div className="flex flex-col">
      
      <Banner />
      <CategoriesSlider />
     
    </div>
  );
};

export default Home;
