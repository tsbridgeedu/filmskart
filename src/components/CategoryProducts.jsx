import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Puff, ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../index.css";

const CategoryProducts = () => {
  const { slug } = useParams();
  const VITE_INVENTORY_URL = import.meta.env.VITE_INVENTORY_URL;
  const VITE_STORE_ID = import.meta.env.VITE_STORE_ID;

  const [products, setProducts] = useState([]);
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
    async function getCategoryProducts() {
      await new Promise((resolve) => setTimeout(resolve, 2800));
      await axios
        .get(`${VITE_INVENTORY_URL}${VITE_STORE_ID}/products`)
        .then((item) => {
          const filteredProducts = item.data.filter(
            (x) => x.category?.name === toTitleCase(slug)
          );
          setProducts(filteredProducts);
          setIsLoading(false);
        });
    }
    getCategoryProducts();
  }, [slug]);

  // const updatedProducts=products.filter((x)=>x.category?.name===slug);
  // setProducts(updatedProducts);

  return (
    <div className="flex flex-col w-full px-8 md:px-20 my-16">
      <div className="w-full h-full flex flex-row items-center gap-2">
        <div className="w-2 rounded-md h-10 bg-red-500"></div>
        <span className="text-xl text-red-500 font-semibold flex flex-row justify-center items-center">
          Products
        </span>
      </div>
      <div className="flex flex-row my-4 gap-2 items-center md:text-3xl text-xl font-inter font-semibold ">
        <span>Category -</span>
        <span className="text-green-500">{toTitleCase(slug)}</span>
      </div>

      <div className="mb-2 container flex w-full h-full border-t-2 border-red-300 border-solid border-opacity-80">
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
          <div className="flex max-[1024px]:items-center max-[1024px]:justify-center max-[1024px]:w-full gap-16 flex-wrap mx-5 my-10">
            {products.map((item, index) => {
              const isFlipped = index === flippedCardIndex;
              return (
                <div
                  key={item.id}
                  className="category-cards flex justify-center items-center min-w-[180px] w-[220px] h-80 bg-none rounded-sm cursor-pointer shadow-lg shadow-gray-400 hover:scale-110 duration-300 ease-out hover:drop-shadow-xl hover:shadow-4xl upcmvs__crd__cntr"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.div
                    className="w-full h-full frt_prdct_flsh relative upcmvs__crd"
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, animationDirection: "normal" }}
                  >
                    <div className="w-full h-full flex justify-center bg-transparent backdrop-blur-md rounded-sm upcmvs__frt">
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
                    <div className="w-full h-full items-center justify-center gap-3 px-8 py-5 flex flex-col bg-white upcmvs__bck">
                      <h1 className="font-bold font-inter text-sm">
                        {item.name}
                      </h1>
                      <div className="flex leading-snug tracking-tight font-inter text-sm font-medium">
                        {item.description}
                      </div>
                      <div className="flex w-full item-center justify-start text-sm font-inter font-semibold">
                        Color:&nbsp;
                        <span
                          className={`w-5 h-5 rounded-full bg-${item.color.value} border-2 shadow-md`}
                        ></span>
                      </div>
                      <button className="bg-red-500 text-white text-sm self py-2 px-4 rounded-md">
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

const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export default CategoryProducts;
