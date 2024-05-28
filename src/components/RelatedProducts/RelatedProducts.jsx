import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../Hero/hero.css";
import { Puff, ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { motion } from "framer-motion";
import '../../index.css'
import { relatedProducts } from "../../../constants/constant";
import { Star } from "lucide-react";

const RelatedProducts = ({ category, productId }) => {

  const VITE_INVENTORY_URL = import.meta.env.VITE_INVENTORY_URL;
  const VITE_STORE_ID = import.meta.env.VITE_STORE_ID;


  const [relatedProducts, setRelatedProducts] = useState([]);
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
    async function getRelatedProducts() {
      await new Promise((resolve) => setTimeout(resolve, 2800));
      await axios
        .get(`${VITE_INVENTORY_URL}${VITE_STORE_ID}/products`)
        .then((item) => {
          const filteredProducts = item.data.filter((x) => x.category?.name === category && x.id !== productId);
          setRelatedProducts(filteredProducts);
          
          setIsLoading(false);
        });
    }
    getRelatedProducts();
  }, []);

  // const filterProduct=(cat)=>{
  //   const ul=relatedProducts.filter((x)=>x.category?.name===cat);
  //   setFilter(ul);
  // }

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
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
          <div className="flex justify-center items-center gap-16 flex-wrap mx-5 my-10">
            {relatedProducts.map((item, index) => {
              const isFlipped = index === flippedCardIndex;
              return (
                <div
                  key={item.id}
                  className="flex justify-center items-center min-w-[180px] w-[200px] h-64 bg-none rounded-sm cursor-pointer shadow-lg shadow-gray-400 hover:scale-110 duration-300 ease-out hover:drop-shadow-xl hover:shadow-4xl upcmvs__crd__cntr"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.div
                    className="w-full h-full frt_prdct_flsh relative upcmvs__crd"
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, animationDirection: "normal" }}
                  >
                    <div className="w-full h-full flex justify-center bg-transparent backdrop-blur-md rounded-md upcmvs__frt">
                      <div className="w-full h-full flex justify-center bg-[#f5f5f5] relative">
                        {item.images.slice(0, 1).map((item) => {
                          return (
                            <img
                              key={item.id}
                              src={item.url}
                              alt="product-image"
                              className="w-full h-full object cover rounded-sm"
                            />
                          );
                        })}
                      </div>
                    </div>
                    <div className="w-full h-full items-center justify-center px-2 flex flex-col bg-white upcmvs__bck">
                      <h1 className="px-4 font-bold py-2 font-inter text-base">
                        {item.name}
                      </h1>
                      <span className="flex px-4 pb-4 leading-snug tracking-tight font-inter text-sm font-medium">
                        {item.description}
                      </span>

                      <span className="flex-row flex pb-4 gap-2 w-full px-5 item-center justify-start text-sm font-inter font-semibold">
                        Color: <span className={`w-5 h-5 rounded-full bg-${item.color.value} border-2 shadow-md`}></span>
                      </span>
                      <button className="bg-red-500 text-white text-sm mt-2 self py-2 px-2 rounded-md">
                        <Link to={`/product/${item.id}`}> Buy now</Link>
                      </button>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
