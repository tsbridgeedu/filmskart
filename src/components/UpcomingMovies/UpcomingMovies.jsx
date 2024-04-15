import React, { useState, useEffect } from "react";
import { upcomingMovies } from "../../../constants/constant";

import { Star } from "lucide-react";

import "../Hero/hero.css";

const UpcomingMovies = () => {
  const [countdown, setCountdown] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  useEffect(() => {
    const initialCountdownTime = 3600;
    setCountdown(initialCountdownTime);

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === upcomingMovies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? upcomingMovies.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mb-24 mt-24 w-full">
      <div className="flex justify-evenly items-center w-full">
        <div className="start flex justify-center items-center">
          <div className="bg-red-500 w-2 h-10 rounded-md"> </div>
          <div className="text-red-500 font-semibold text-2xl ml-3 tracking-wider">
            Hot Deals
          </div>
        </div>

        <div className="flex">
          <p className="text-black text-6xl font-bold tracking-wide m-head">
            Upcoming Movies
          </p>
        </div>

        <div className="start flex justify-center items-center ">
          <div className="text-red-500 font-semibold text-2xl mr-3 tracking-wider ">
            {formatTime(countdown)}
          </div>
          <div className="bg-red-500 w-[10px] h-10 rounded-md"> </div>
        </div>
      </div>

      <div className="product-breaker flex ml-36 mr-36 mt-5">
        <hr className="flex w-full  mt-1 bg-red-200 h-[2px] rounded-lg" />
      </div>
      <div className="card-slider">
        <div
          className="card-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
        
          {upcomingMovies.map((card) => 
          {
            
            return (
              <div className="card transform hover:scale-110 duration-300 transition cursor-pointer">
                <img src={card.img} className="w-full h-full object-cover"/>
                <div className="card-content">
                  <h3 className="font-medium text-2xl">{card.desc}</h3>
                  <hr className="w-full mb-3" />
                  <div className="price flex justify-between items-center">
                    <p className="text-red-500">₹{card.discprice}</p>
                    <p className="mr-4 text-[#b6b7b7]">
                      ₹<s>{card.orgprice}</s>
                    </p>
                  </div>
                  <div className="flex justify-start mt-4">
                    <div className="flex justify-center items-center reviews">
                    {[...Array(parseInt(card.star, 10))].map((_, i) => (
                      <Star key={i} size={24} color="#FFD700" />
                    ))}
                    </div>
                    <div className="flex ml-2">({card.review})</div>
                  </div>
                </div>
              </div>
            );
          })
          
          
          
          }
        </div>
      </div>

      <div className="flex  items-center justify-center">
        <div className="bg-red-500 pt-4 pb-4 pr-10 pl-10 text-white rounded-lg cursor-pointer font-bold text-lg transform hover:scale-110 duration-300 ">
          <button>Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMovies;
