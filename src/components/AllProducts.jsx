import axios from "axios";
import React, { useEffect, useState } from "react";
import {motion} from "framer-motion";
import '../index.css'
import { Link } from "react-router-dom";

const AllProducts = () => {
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
    async function getRelatedProducts() {
      await new Promise((resolve) => setTimeout(resolve, 2800));
      await axios
        .get(`${VITE_INVENTORY_URL}${VITE_STORE_ID}/products`)
        .then((item) => {
          setProducts(item.data);

          setIsLoading(false);
        });
    }
    getRelatedProducts();
  }, []);

  return (
    <div className="lg:px-32 sm:px-16 px-10 lg:my-24 my-12 flex flex-col">
      <div className="flex-row flex w-full max-[590px]:px-0 px-16 justify-center">
        <span className="font-inter text-[32px] font-bold tracking-wide border-b-4 border-red-400">
          Explore All Products
        </span>
      </div>
      <section className="flex flex-wrap max-[1024px]:items-center max-[1024px]:justify-center my-28  gap-16">
        {products ? (
          products.map((item) => {
            const isFlipped = item.id === flippedCardIndex;
            return (
              <div
                key={item.id}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                className="flex flex-row border max-[768px]:w-[250px] max-[768px]:h-[350px] w-[350px] h-[400px] rounded-md shadow-lg upcmvs__crd__cntr"
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
          })
        ) : (
          <div className="flex flex-row justify-center items-center py-20 ">
            <span>No Products found...</span>
          </div>
        )}
      </section>
    </div>
  );
};

export default AllProducts;
