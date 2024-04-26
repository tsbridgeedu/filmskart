import React from "react";
import Banner from "../src/components/Banner/banner.jsx";
import Hero from "../src/components/Hero/hero.jsx";
import BestProducts from '../src/components/BestProducts/BestProducts.jsx'
import Navbar from "../src/components/Navbar/navbar.jsx";
import Footer from "../src/components/Footer/footer.jsx";
import UpcomingMovies from "../src/components/UpcomingMovies/UpcomingMovies.jsx";

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <hr className="h-[5px]"></hr>
      <Banner />
      <UpcomingMovies />
      <BestProducts />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
