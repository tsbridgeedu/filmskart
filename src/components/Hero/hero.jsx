import React from "react";
import "./hero.css";
import { productCards } from "../../../constants/constant";

import { Star } from "lucide-react";
const Hero = () => {
  return (
    <div className="card-container">
      <div>
        <div className="bg-red-500 w-3 h-10 rounded-md"> </div>
        <div className="text-red-500 font-bold text-xl ml-4">Our Products</div>
      </div>
      {productCards.map((card) => {
        const starsQuantity = parseInt(card.star, 10); // Parse star quantity from card data
        const stars = Array.from({ length: starsQuantity }).map((_, i) => (
          <Star key={i} size={24} color="#FFD700" /> // Render Star icons based on quantity
        ));
        return (
          <div className="card">
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
  );
};

export default Hero;
