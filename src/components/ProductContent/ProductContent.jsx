import "./ProductContent.css";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { Star } from "lucide-react";

import React, { useState } from "react";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

const ProductContent = () => {
  const [mainImage, setMainImage] = useState("card3.jpg");

  const handleThumbnailChange = (image) => {
    setMainImage(image);
  };
  const star = 4;
  const starsQuantity = parseInt(star, 10);
  const stars = Array.from({ length: starsQuantity }).map((_, i) => (
    <Star key={i} size={20} color="#FFD700" />
  ));

  return (
    <div>
      <div className="prod_container  mx-[10px] my-auto flex justify-center mt-7 px-14 ">
        <div className="prod_images flex">
          <div className="prod_thumbnail_carousel flex flex-col mr-10">
            <img
              className="prod_thumbnail hover:scale-125 transition duration-300 hover:ease-in  w-[120px] h-[80px] object-cover mx-[5px] my-[10px] cursor-pointer"
              src="card1.jpg"
              alt=""
              onMouseEnter={() => handleThumbnailChange("card1.jpg")}
              onClick={() => handleThumbnailChange("card1.jpg")}
            />
            <img
              className="prod_thumbnail hover:scale-125 transition duration-300 hover:ease-in  w-[120px] h-[80px] object-cover mx-[5px] my-[10px] cursor-pointer"
              src="card2.jpg"
              alt=""
              onMouseEnter={() => handleThumbnailChange("card2.jpg")}
              onClick={() => handleThumbnailChange("card2.jpg")}
            />
            <img
              className="prod_thumbnail hover:scale-125 transition duration-300 hover:ease-in w-[120px] h-[80px] object-cover mx-[5px] my-[10px] cursor-pointer"
              src="card3.jpg"
              alt=""
              onMouseEnter={() => handleThumbnailChange("card3.jpg")}
              onClick={() => handleThumbnailChange("card3.jpg")}
            />
            <img
              className="prod_thumbnail hover:scale-125 transition duration-300 hover:ease-in w-[120px] h-[80px] object-cover mx-[5px] my-[10px] cursor-pointer"
              src="card4.jpg"
              alt=""
              onMouseEnter={() => handleThumbnailChange("card4.jpg")}
              onClick={() => handleThumbnailChange("card4.jpg")}
            />
          </div>
          <div className="prod_image ml-5 ">
            <div className="prod_carousel flex justify-center overflow-x-auto snap-x-mandatory">
              <img
                className="w-[300px] h-[400px] object-cover block mb-20"
                src={mainImage}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="prod_info w-[40%] pl-28 flex flex-col justify-start">
          <h1 className="font-semibold text-2xl -mb-3">Product Name</h1>

          <div className="flex justify-start mt-4">
            <div className="flex justify-center items-center reviews">
              {stars}
            </div>
            <div className="flex ml-2">(15)</div>
          </div>

          <p className="text-red-500 mt-2 mb-4 text-lg">$192.00</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            ipsam odio saepe aliquid eum amet. Cumque aliquam ipsum quo amet
            consectetur adipisicing elit. Minima ipsam odio saepe aliquid eum
            amet. Cumque aliquam ipsum quo
          </p>
          <hr className="flex w-full mb-8 my-3 bg-red-400 h-[2px] rounded-lg" />

          <div className="flex  items-center mb-3">
            <span className="text-base font-semibold ">Colors:</span>
            <div className="bg-black w-[14px] h-[14px] rounded-lg mx-2"></div>
            <div className="bg-red-400 w-[14px] h-[14px] rounded-lg mx-2"></div>
          </div>
          <div className=" flex items-center mb-5">
            <span className="text-base font-semibold">Size:</span>
            <div className="size_container mx-2 my-3 w-10 h-10 flex justify-center items-center rounded-md border-2 cursor-pointer">
              XS
            </div>
            <div className="size mx-2 my-3 w-10 h-10 flex justify-center items-center rounded-md border-2 cursor-pointer">
              S
            </div>
            <div className="size mx-2 my-3 w-10 h-10 flex justify-center items-center rounded-md border-2 cursor-pointer ">
              M
            </div>
            <div className="size mx-2 my-3 w-10 h-10 flex justify-center items-center rounded-md border-2 cursor-pointer">
              L
            </div>
            <div className="size mx-2 my-3 w-10 h-10 flex justify-center items-center rounded-md border-2  cursor-pointer ">
              XL
            </div>
          </div>
          <div className=" heighlight flex items-center justify-start">
            <div className="add_sub flex">
              <span className="bg-red-500 text-white my-3 w-10 h-10 flex justify-center items-center  border-[1px] border-[#808080] rounded-l-md">
                <FaPlus />
              </span>
              <span className="digit my-3 w-20 h-10 flex justify-center items-center  border-[1px] border-[#808080]">
                3
              </span>
              <span className="bg-red-500 text-white my-3 w-10 h-10 flex justify-center items-center  border-[1px] border-[#808080] rounded-r-md">
                <FiMinus />
              </span>
            </div>
            <div
              className="flex h-10 w-16 mx-5
            "
            >
              <div className="buy bg-red-500 text-white font-semibold outline-none px-12 flex items-center rounded-md text-lg ">
                Buy
              </div>
            </div>
            <div className="cart border-[1px] border-[#808080] rounded-md p-1 ml-16 cursor-pointer">
              <FiShoppingCart size={25} />
            </div>
            <div className="wishlist border-[1px] border-[#808080] rounded-md p-1 ml-3 cursor-pointer">
              <IoMdHeartEmpty size={25} />
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default ProductContent;
