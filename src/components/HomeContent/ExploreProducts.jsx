import React, { useState, useEffect } from "react";
import { Puff, ThreeDots } from "react-loader-spinner";
import Slider from "react-slick";
import axios from "axios";
import { motion } from "framer-motion";
import "../../index.css";
import { Link, NavLink } from "react-router-dom";

const ExploreProducts = () => {
  const VITE_INVENTORY_URL = import.meta.env.VITE_INVENTORY_URL;
  const VITE_STORE_ID = import.meta.env.VITE_STORE_ID;

  const [exploreProducts, setExploreProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
      await axios
        .get(`${VITE_INVENTORY_URL}${VITE_STORE_ID}/products`)
        .then((item) => {
          setExploreProducts(item.data);
          setIsLoading(false);
        });
    }
    getBannerData();
    // getProduct();
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
    rtl: true,
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
    <div className="flex flex-col w-full px-2 md:px-20 mb-20">
      <div className="w-full h-full flex flex-row items-center gap-2">
        <div className="w-2 rounded-md h-10 bg-red-500"></div>
        <span className="text-lg text-red-500 font-semibold flex flex-row justify-center items-center">
          Products
        </span>
        <span className="flex justify-center items-center">
          <img src="/shopping-bag-gif1.gif" className="w-[45px] " />
        </span>
      </div>
      <div className="flex flex-row mt-1 px-2 gap-5 md:gap-20 items-center">
        <div className="md:text-4xl text-xl flex flex-row mt-3 font-inter font-semibold ">
          Explore All Products
        </div>
      </div>

      <div className="my-10 container flex flex-row w-full h-full border-y-2 max-[480px]:border-none relative">
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
          <>
          <Slider
            {...settings}
            className="w-full explore-prod-slider flex flex-row shadow-3xl"
          >
            {exploreProducts.map((item, index) => {
              const isFlipped = index === flippedCardIndex;
              return (
                <div
                  key={item.id}
                  className="flex flex-col w-[320px] h-80 border rounded-sm cursor-pointer hover:scale-110 duration-300 ease-out hover:drop-shadow-xl hover:shadow-3xl upcmvs__crd__cntr"
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
                      <div className="w-full h-full flex justify-center bg-[#f5f5f5] relative">
                        {item.images.slice(0, 1).map((item) => {
                          return (
                            <img
                              key={item.id}
                              src={item.url}
                              alt="product-image"
                              className=" w-full h-full object-cover"
                            />
                          );
                        })}
                      </div>
                    </div>
                    <div className="w-full h-full items-center justify-center px-2 flex flex-col bg-white absolute upcmvs__bck">
                      <h1 className="px-4 font-bold py-2 font-inter text-base">
                        {item.name}
                      </h1>
                      <span className="flex px-4 pb-4 leading-snug tracking-tight font-inter text-sm font-medium">
                        {item.description}
                      </span>

                      <span className="flex-row flex pb-4 gap-2 w-full px-5 item-center justify-start text-sm font-inter font-semibold">
                        Color:{" "}
                        <span
                          className={`w-5 h-5 rounded-full bg-${item.color.value} border-2 shadow-md`}
                        ></span>
                      </span>
                      <button className="bg-red-500 text-white text-sm mt-2 self py-2 px-2 rounded-md">
                        <Link to={`/product/${item.id}`}> Buy now</Link>
                      </button>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </Slider>
          <section className="explore-cards-container flex max-[1024px]:items-center max-[1024px]:justify-center items-center w-full gap-7 flex-wrap mt-3">
            {exploreProducts ? (
              exploreProducts.slice(0,8).map((item,index) => {
                const isFlipped = index === flippedCardIndex;
                return (
                  <div
                    key={item.id}
                    className="flex justify-center items-center min-w-[130px] w-40 h-64 bg-none rounded-xl cursor-pointer shadow-lg shadow-gray-400 hover:scale-110 duration-300 ease-out hover:drop-shadow-xl hover:shadow-4xl upcmvs__crd__cntr"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <motion.div
                      className="w-full h-full frt_prdct_flsh relative upcmvs__crd"
                      initial={false}
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.6, animationDirection: "normal" }}
                    >
                      <div className="w-full h-full flex justify-center bg-transparent backdrop-blur-md rounded-xl upcmvs__frt">
                        <div className="w-full h-full flex justify-center bg-[#f5f5f5] relative rounded-xl">
                          {item.images.slice(0, 1).map((item) => {
                            return (
                              <img
                                key={item.id}
                                src={item.url}
                                alt="product-image"
                                className="w-full h-full object-cover rounded-xl"
                              />
                            );
                          })}
                        </div>
                      </div>
                      <div className="w-full h-full items-center justify-center gap-3 px-8 py-5 flex flex-col rounded-xl bg-white upcmvs__bck">
                        <h1 className="font-bold font-inter text-sm">
                          {item.name}
                        </h1>
                        <div className="flex leading-snug tracking-tight font-inter text-sm max-[480px]:text-xs font-medium">
                          {item.description}
                        </div>
                        <div className="flex w-full item-center justify-start text-sm max-[480px]:text-xs font-inter font-semibold">
                          Color:&nbsp;
                          <span
                            className={`w-5 h-5 rounded-full bg-${item.color.value} border-2 shadow-md`}
                          ></span>
                        </div>
                        <button className="bg-red-500 text-white text-sm max-[480px]:text-xs self py-2 px-4 rounded-md">
                          <Link to={`/product/${item.id}`}> Buy now</Link>
                        </button>
                      </div>
                    </motion.div>
                  </div>
                );
              })
            ) : (
              <div className="flex flex-row justify-center items-center py-20 ">
                <span>No Products found...</span>
              </div>
            )}
          </section>
          </>
        )}
      </div>

      <div className="flex w-full items-center justify-center my-10">
        <button className="bg-red-500 hover:bg-red-500/70 transition-all duration-500 ease-linear py-3 px-3 text-white rounded-md hover:shadow-xl hover:scale-110">
          <NavLink to="/products">Explore All</NavLink>
        </button>
      </div>
    </div>
  );
};

export default ExploreProducts;
