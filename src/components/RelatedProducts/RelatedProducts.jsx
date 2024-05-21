import React, { useState, useEffect } from "react";
import "../Hero/hero.css";
import { Puff, ThreeDots } from "react-loader-spinner";
import Slider from "react-slick";
import axios from "axios";
import { motion } from "framer-motion";
import '../../index.css'

import { relatedProducts } from "../../../constants/constant";

import { Star } from "lucide-react";
const RelatedProducts = () => {

  const BASE_URL = import.meta.env.VITE_NODE_URL;


  const [flashProducts, setFlashProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setFlippedCardIndex(index);
  };

  const handleMouseLeave = () => {
    setFlippedCardIndex(null);
  };

  useEffect(() => {

    setIsLoading(true);
    async function getBannerData() {
      await new Promise((resolve) => setTimeout(resolve, 2800));
      await axios.get(`${BASE_URL}/product-data`).then((item) => {
        console.log(item.data);
        setFlashProducts(item.data);
        setIsLoading(false);
      });
    }
    getBannerData();
  }, []);

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
    <div className="flex flex-col w-full px-8 md:px-20 mb-20">
      <div className="w-full h-full flex flex-row items-center gap-2">
        <div className="w-2 rounded-md h-10 bg-red-500"></div>
        <span className="text-lg text-red-500 font-semibold flex flex-row justify-center items-center">
          Related Products
        </span>
      </div>

      <div className="my-10 container flex flex-row w-full h-full border-y-2 ">
        {isLoading ? (
          <div className="w-full flex flex-col h-64 justify-center items-center">
            <Puff
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
            <span className="text-sm mt-2 flex flex-row items-center gap-1 justify-center">
              Spawning flash Products{" "}
              <ThreeDots
                height="15"
                width="15"
                color="#ee2222"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </span>
          </div>
        ) : (
          <Slider
            {...settings}
            className="w-full rp-slider shadow-3xl "
          >
            {relatedProducts.map((item, index) => {
              const isFlipped = index === flippedCardIndex;
              const starsQuantity = parseInt(item.star, 10);
              const stars = Array.from({ length: starsQuantity }).map((_, i) => (
                <Star key={i} size={20} color="#FFD700" />
              ));
              return (
                <div
                  key={item.id}
                  className="flex flex-col h-80 border rounded-sm cursor-pointer hover:scale-105 duration-200 ease-out hover:drop-shadow-xl hover:shadow-3xl upcmvs__crd__cntr"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.div
                    className="w-full h-full frt_prdct_flsh relative upcmvs__crd"
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, animationDirection: "normal" }}
                  >
                    <div className="w-full h-full flex justify-center bg-transparent backdrop-blur-md rounded-md absolute upcmvs__frt">
                      <img
                        src={item.img}
                        alt="product-image"
                        className=" w-full h-full object-contain"
                      />
                    </div>
                    <div className="w-full h-full flex justify-center item-center bg-[#ffffff] absolute upcmvs__bck">
                      <div className="card-content flex flex-col w-full h-full justify-start items-start gap-2">
                        <h3 className="font-medium text-2xl">{item.desc}</h3>
                        <hr className="w-full mb-2" />
                        <div className=" w-full price flex justify-start items-center gap-2">
                          <p className="text-red-500">₹{item.discprice}</p>
                          <p className="mr-4 text-[#b6b7b7]">
                            ₹<s>{item.orgprice}</s>
                          </p>
                        </div>
                        <div className="flex justify-start">
                          <div className="flex justify-center items-center reviews">
                            {stars}
                          </div>
                          <div className="flex ml-2">({item.review})</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </Slider>

        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
