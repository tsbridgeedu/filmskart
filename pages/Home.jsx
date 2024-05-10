import React from "react";
import Banner from "../src/components/Banner/banner.jsx";
import { CategoriesSlider } from "../src/components/Categories/CategoriesSlider.jsx";
import Hero from "../src/components/HomeContent/Hero.jsx";


const Home = () => {
  return (
    <div className="flex flex-col">
      
      <Banner />
      <Hero />
      <CategoriesSlider />

     
    </div>
  );
};

export default Home;
