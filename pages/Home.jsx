import React from "react";
import Banner from "../src/components/Banner/banner.jsx";
import { CategoriesSlider } from "../src/components/Categories/CategoriesSlider.jsx";
import Hero from "../src/components/HomeContent/Hero.jsx";
import UpcomingMovies from "../src/components/HomeContent/UpcomingMovies.jsx";
import ExploreProducts from "../src/components/HomeContent/ExploreProducts.jsx";



const Home = () => {
  return (
    <div className="flex flex-col">
      
      <Banner />
      <UpcomingMovies />
      <Hero />
      <CategoriesSlider />
      <ExploreProducts/>

     
    </div>
  );
};

export default Home;
