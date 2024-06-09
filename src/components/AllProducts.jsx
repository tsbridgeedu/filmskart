import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Puff, ThreeDots } from "react-loader-spinner";
import { motion } from "framer-motion";
import '../index.css'

const AllProducts = () => {
  const VITE_INVENTORY_URL = import.meta.env.VITE_INVENTORY_URL;
  const VITE_STORE_ID = import.meta.env.VITE_STORE_ID;

  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);
  const [activeCategory,setActiveCategory]=useState("All")

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
          setProducts(JSON.parse(JSON.stringify(item.data)));
          setFilter(item.data);
          setIsLoading(false);
        });
    }
    getRelatedProducts();
  }, []);

  const filterProduct = (cat) => {
    if(cat==="All"){
      setFilter(products)
    }else{
      const updatedProducts = products.filter((x) => x.category?.name === cat);
      setFilter(updatedProducts);
    }
    setActiveCategory(cat);
  };

  return (
    <div className="lg:px-20 sm:px-16 px-10 mt-10 mb-16 flex flex-col gap-10">
      <div className="flex-row flex w-full max-[590px]:px-0 px-16 justify-center">
        <span className="font-inter text-[32px] font-bold tracking-wide border-b-4 border-red-400">
          Explore All Products
        </span>
      </div>
      <div className="flex gap-16 justify-center items-center">
        <button className={activeCategory==="All" ? "all-prod-btn active" :  "all-prod-btn"}
          onClick={()=>filterProduct("All")}>
          All
        </button>
        <button className={activeCategory==="Men" ? "all-prod-btn active" :  "all-prod-btn"}
          onClick={()=>filterProduct("Men")}
          >Men
        </button>
        <button className={activeCategory==="Women" ? "all-prod-btn active" :  "all-prod-btn"}
          onClick={()=>filterProduct("Women")}
          >Women
        </button>
        <button className={activeCategory==="Caps" ? "all-prod-btn active" :  "all-prod-btn"}
          onClick={()=>filterProduct("Caps")}
          >Caps
        </button>
      </div>
      <div className="mb-2 container flex w-full h-full">
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
          <section className="flex max-[1024px]:items-center max-[1024px]:justify-center items-center w-full gap-10 flex-wrap mx-5 mt-3">
            {products ? (
              filter.map((item) => {
                const isFlipped = item.id === flippedCardIndex;
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
              })
            ) : (
              <div className="flex flex-row justify-center items-center py-20 ">
                <span>No Products found...</span>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
