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
    <div className="flex flex-col w-full px-4 md:px-20 mb-20">
      <div className="w-full h-full flex flex-row items-center gap-2">
        <div className="w-2 rounded-md h-10 bg-red-500"></div>
        <span className="text-lg text-red-500 font-semibold flex flex-row justify-center items-center">
          Related Products
        </span>
        {/* <span className="flex justify-center items-center">
          <img src="/shopping-bag-gif1.gif" className="w-[45px] " />
        </span> */}
      </div>
      {/* <div className="flex flex-row mt-1 px-2 gap-5 md:gap-20 items-center">
        <div className="md:text-4xl text-xl flex flex-row mt-3 font-inter font-semibold ">
          Explore All Products
        </div>
      </div> */}

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
            className="w-full cat-slider flex flex-row shadow-3xl "
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
                  className="flex flex-col w-[320px] h-80 border rounded-sm cursor-pointer hover:scale-105 duration-300 ease-out hover:drop-shadow-xl hover:shadow-3xl upcmvs__crd__cntr"
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
                      <div className="card-content flex flex-col w-full h-full justify-center items-center">
                        <h3 className="font-medium text-2xl">{item.desc}</h3>
                        <hr className="w-full mb-3" />
                        <div className="price flex justify-between items-center">
                          <p className="text-red-500">₹{item.discprice}</p>
                          <p className="mr-4 text-[#b6b7b7]">
                            ₹<s>{item.orgprice}</s>
                          </p>
                        </div>
                        <div className="flex justify-start mt-4">
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

  // return (
  //   <div className="mb-24 mt-20 w-full">
  //     <div className="flex ml-10 items-center">
  //       <div className="start flex justify-center items-center ">
  //         <div className="bg-red-500 w-4 h-12 rounded-md"> </div>
  //         <div className="text-red-500 font-semibold text-2xl ml-2 tracking-wider">
  //           Related Products
  //         </div>
  //       </div>
  //     </div>

  //     <div className="card-container ">
  //       {relatedProducts.map((card) => {
  //         const starsQuantity = parseInt(card.star, 10);
  //         const stars = Array.from({ length: starsQuantity }).map((_, i) => (
  //           <Star key={i} size={20} color="#FFD700" />
  //         ));
  //         return (
  //           <div className="card transform hover:scale-110 duration-300 transition cursor-pointer">
  //             <img className="h-1/2" src={card.img} />
  //             <div className="card-content">
  //               <h3 className="font-medium text-2xl">{card.desc}</h3>
  //               <hr className="w-full mb-3" />
  //               <div className="price flex justify-between items-center">
  //                 <p className="text-red-500">₹{card.discprice}</p>
  //                 <p className="mr-4 text-[#b6b7b7]">
  //                   ₹<s>{card.orgprice}</s>
  //                 </p>
  //               </div>
  //               <div className="flex justify-start mt-4">
  //                 <div className="flex justify-center items-center reviews">
  //                   {stars}
  //                 </div>
  //                 <div className="flex ml-2">({card.review})</div>
  //               </div>
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
};

export default RelatedProducts;
