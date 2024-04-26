import React from "react";
import "../Hero/hero.css";
import { relatedProducts } from "../../../constants/constant";

import { Star } from "lucide-react";
const RelatedProducts = () => {
  return (
    <div className="mb-24 mt-20 w-full">
      <div className="flex ml-10 items-center">
        <div className="start flex justify-center items-center ">
          <div className="bg-red-500 w-4 h-12 rounded-md"> </div>
          <div className="text-red-500 font-semibold text-2xl ml-2 tracking-wider">
            Related Products
          </div>
        </div>
      </div>

      <div className="card-container ">
        {relatedProducts.map((card) => {
          const starsQuantity = parseInt(card.star, 10);
          const stars = Array.from({ length: starsQuantity }).map((_, i) => (
            <Star key={i} size={20} color="#FFD700" />
          ));
          return (
            <div className="card transform hover:scale-110 duration-300 transition cursor-pointer">
              <img className="h-1/2" src={card.img} />
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
    </div>
  );
};

export default RelatedProducts;
