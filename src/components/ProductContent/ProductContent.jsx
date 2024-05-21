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
    <div className="flex flex-col gap-8">

      <div className="flex flex-col justify-center items-start gap-1 px-14 py-20 w-full h-14 bg-[#ffdede]" >
        <h1 className="text-2xl font-semibold font-inter">Product Details</h1>
        <div className="flex gap-3">
          <span>Home</span>/
          <span className="text-red-500">{window.location.pathname.slice(1)}</span>
        </div>
      </div>

      <div className="prod_container mx-[60px] my-[50px] flex justify-center items-center gap-8 px-8 py-8 shadow-4xl shadow-gray-400">
        <div className="prod_images flex justify-center items-center gap-8">
          <div className="prod_thumbnail_carousel flex flex-col">
            <img
              className="prod_thumbnail hover:scale-125 transition duration-300 hover:ease-in w-[120px] h-[80px] object-cover mx-[5px] my-[10px] cursor-pointer"
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
          <div className="prod_image">
            <div className="prod_carousel flex justify-center overflow-x-auto snap-x-mandatory">
              <img
                className="w-[300px] h-[400px] object-cover block"
                src={mainImage}
                alt=""
              />
            </div>
          </div>
        </div>


        <div className="prod_info w-[50%] flex flex-col justify-center gap-2">

          <div className="flex flex-col">
            <h1 className="font-semibold text-2xl">Product Name</h1>
            <div className="flex justify-start items-center reviews">
              {stars}
              <div className="ml-2">(15)</div>
            </div>
            <p className="text-red-500 text-lg">$192.00</p>
          </div>
          <hr className="flex w-full my-2 bg-red-400 h-[2px] rounded-lg" />
          <div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              ipsam odio saepe aliquid eum amet. Cumque aliquam ipsum quo amet
              consectetur adipisicing elit. Minima ipsam odio saepe aliquid eum
              amet. Cumque aliquam ipsum quo
            </p>
          </div>
          <hr className="flex w-full my-2 bg-red-400 h-[2px] rounded-lg" />

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold ">Colors:</span>
              <div className="bg-black w-[14px] h-[14px] rounded-lg"></div>
              <div className="bg-red-400 w-[14px] h-[14px] rounded-lg"></div>
            </div>
            <div className=" flex items-center gap-3">
              <span className="text-base font-semibold">Size:</span>
              <div className="size size_container w-10 h-10 flex justify-center items-center rounded-md border-2 cursor-pointer">
                XS
              </div>
              <div className="size w-10 h-10 flex justify-center items-center rounded-md border-2 cursor-pointer">
                S
              </div>
              <div className="size w-10 h-10 flex justify-center items-center rounded-md border-2 cursor-pointer ">
                M
              </div>
              <div className="size w-10 h-10 flex justify-center items-center rounded-md border-2 cursor-pointer">
                L
              </div>
              <div className="size w-10 h-10 flex justify-center items-center rounded-md border-2  cursor-pointer ">
                XL
              </div>
            </div>
            <div className="highlight flex items-center justify-start gap-3">
              <div className="add_sub flex">
                <span className="bg-red-500 hover:bg-[#f45e5e] text-white px-2 py-[13px] flex justify-center items-center cursor-pointer border-[1px] border-[#808080] rounded-l-md">
                  <FaPlus />
                </span>
                <span className="digit px-6 py-2 flex justify-center items-center  border-[1px] border-[#808080]">
                  3
                </span>
                <span className="bg-red-500 hover:bg-[#f45e5e] text-white px-2 py-[13px] flex justify-center items-center cursor-pointer border-[1px] border-[#808080] rounded-r-md">
                  <FiMinus />
                </span>
              </div>
              <div className="flex gap-3">
                <div className="buy bg-red-500 text-white font-semibold outline-none px-12 py-2 flex items-center rounded-md text-lg cursor-pointer">
                  <button>Buy</button>
                </div>
                <div className="cart border-[1px] border-[#808080] rounded-md flex justify-center items-center p-2 cursor-pointer">
                  <FiShoppingCart size={25} />
                </div>
                <div className="wishlist border-[1px] border-[#808080] rounded-md flex justify-center items-center p-2 cursor-pointer">
                  <IoMdHeartEmpty size={25} />
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#ffdede] px-20 py-14 gap-8 mb-5">
        <div className="flex gap-16 text-red-500 underline underline-offset-4 decoration-red">
          <a href=""><h2 className="font-semibold">Description</h2></a>
          <a href=""><h2 className="font-semibold">Additional info</h2></a>
          <a href=""><h2 className="font-semibold">Reviews</h2></a>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-red-500">Product Details</h3>
          <ul className="m-0 p-0 text-[#fe7a7a] marker:text-red-500 flex flex-col list-disc gap-1 pl-4">
            <li>Material - 100% Cotton</li>
            <li>Pattern - Solid, Fit Type - Regular Fit, Half Sleeve T-Shirts</li>
            <li>Neck Type - Round Neck</li>
            <li>Great for layering or wearing alone, this T-shirt features a crewneck, short sleeves, and a Label-free neck for everyday comfort</li>
            <li>Softner wash for better hand feel</li>
          </ul>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default ProductContent;
