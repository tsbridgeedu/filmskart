import React, { useState, useEffect } from "react";
import "../../index.css";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import { PiBaseballCapBold } from "react-icons/pi";

import axios from "axios";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        background: "#f5f5f5",
        borderRadius: "100%",
        width: "46px",
        height: "46px",
        top: "50%",
      }}
    >
      <IoIosArrowBack
        className="bg-red-500 rounded-full hover:cursor-pointer hover:scale-110 duration-300 ease-out"
        style={{ position: "absolute", left: "20%", top: "20%" }}
        size={28}
        color="white"
      />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#f5f5f5",
        borderRadius: "100%",
        width: "46px",
        height: "46px",
        top: "50%",
      }}
      onClick={onClick}
    >
      <IoIosArrowForward
        style={{ position: "absolute", left: "20%", top: "20%" }}
        className="bg-red-500 rounded-full text-white hover:cursor-pointer hover:scale-110 duration-300 ease-out"
        size={28}
      />
    </div>
  );
}

// Mapping category names to icons
const categoryIcons = {
  "Women": <FcBusinesswoman />,
  "Men": <FcBusinessman />,
  "Caps": <PiBaseballCapBold />, 
};

export const CategoriesSlider = () => {
  const VITE_INVENTORY_URL = import.meta.env.VITE_INVENTORY_URL;
  const VITE_STORE_ID = import.meta.env.VITE_STORE_ID;
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getCategories = async () => {
      try {
        const response = await axios.get(`${VITE_INVENTORY_URL}${VITE_STORE_ID}/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getCategories();
  }, [VITE_INVENTORY_URL, VITE_STORE_ID]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-full p-10 md:px-20 sm:my-8 flex flex-col">
      <div className="flex flex-col h-full w-full justify-between items-between gap-2 border-y-2 sm:border-b-2 sm:py-20 py-10">
        <div className="flex justify-start items-center">
          <div className="bg-red-500 w-2 h-10 rounded-md"></div>
          <div className="text-red-500 font-semibold lg:text-xl ml-3 tracking-wider">
            Categories
          </div>
        </div>
        <div className="product-breaker flex pb-5 pt-3 ml-1 mt-2 mb-5">
          <div className="md:text-4xl text-2xl font-semibold font-inter">
            Browse by category
          </div>
        </div>
        <div>
          <Slider {...settings} className="w-full cat-slider">
                {categories.map((item) => (
                  <div
                    key={item.id}
                    className="w-[150px] hover:scale-110 border-[1px] h-[150px] border-solid rounded border-[#0000004D] hover:bg-red-500 hover:text-white hover:cursor-pointer duration-300 ease-out"
                  >
                    <div className="flex h-full justify-center items-center flex-col p-2 gap-4">
                      <div className="text-5xl">
                        {categoryIcons[item.name] }
                      </div>
                      <div className="text-lg">{item.name}</div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      );
    };
