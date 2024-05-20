import React from "react";
import "../Hero/hero.css";
import { productCards } from "../../../constants/constant";

import { Star } from "lucide-react";
const BestProducts = () => {
  return (
    <div className="mb-24 mt-24 w-full">
      <div className="flex justify-evenly items-center w-full lg:px-10 relative px-4">
        <div className="start flex justify-center items-center">
          <div className="bg-red-500 w-2 h-10 rounded-md"> </div>
          <div className="text-red-500 font-semibold lg:text-2xl ml-3 tracking-wider">
            This Month
          </div>
        </div>

        <div className="flex">
          <p className="text-black lg:text-6xl font-bold tracking-wide m-head">
            Best Selling
          </p>
        </div>

        <div className="start flex justify-center items-center">
          <div className="text-red-500 font-semibold lg:text-2xl mr-3 tracking-wider">
            Celebrity Store
          </div>
          <div className="bg-red-500 w-2 h-10 rounded-md"> </div>
        </div>
      </div>

      <div className="product-breaker flex ml-36 mr-36 mt-5">
        <hr className="flex w-full  mt-1 bg-red-200 h-[2px] rounded-lg" />
      </div>
      <div className="card-container ">
        {productCards.map((card) => {
          const starsQuantity = parseInt(card.star, 10);
          const stars = Array.from({ length: starsQuantity }).map((_, i) => (
            <Star key={i} size={24} color="#FFD700" />
          ));
          return (
            <div
              className="card transform hover:scale-110 duration-300 transition cursor-pointer"
              key={card.review}
            >
              <img src={card.img} />
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
                    {stars}
                  </div>
                  <div className="flex ml-2">({card.review})</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex  items-center justify-center">
        <div className="bg-red-500 pt-4 pb-4 pr-10 pl-10 text-white rounded-lg cursor-pointer font-bold text-lg transform hover:scale-110 duration-300 ">
          <button>Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
