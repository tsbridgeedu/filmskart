import { Delete, ShoppingCart, Star, Trash } from "lucide-react";
import React from "react";
import '../../index.css'

const WishlistList = () => {
  const starCount = [4];
  return (
    <>
      <div className="flex    flex-col lg:py-8 rounded-md max-[1023px]:w-[470px] z-0 relative max-[768px]:ml-3 max-[768px]:w-[320px] max-[1023px]:items-center mng_pfl_crd">
        <div className="flex flex-col px-10 ">
          <div className="flex flex-row px-6 py-5 max-[1023px]:py-7 w-full max-[1023px]:justify-center max-[1023px]:border max-[1023px]:rounded-t-md">
            <h2 className="text-xl font-semibold text-red-500">Wishlist:</h2>
            <span className="bg-red-500 rounded-md items-center flex text-xs px-3 ml-3 py-1 text-white">
              Private
            </span>
          </div>
          
         <div className="flex flex-col lg:px-10 max-[1023px]:px-16 max-[768px]:px-12 max-[1023px]:shadow-md max-[1023px]:rounded-b-md  py-6 scrollbar  lg:overflow-y-scroll lg:h-[450px] max-[1023px]:h-[650px] max-[1023px]:overflow-y-scroll w-full border-x-[1px] lg:mt-4 ">
         <div className="flex flex-row max-[1023px]:flex-col max-[1023px]:items-center mt-4 border-y-[1px] gap-7 justify-evenly">
            <div className="w-40 h-40 flex justify-center bg-[#f5f5f5] my-5">
              <img
                src="/image1.avif"
                alt="product-image"
                className=" w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col my-7 ">
              <span className="font-inter flex flex-wrap w-56 ">
                U.S. Polo Assn. Denim Co.
              </span>
              <span className="text-xs text-gray-500">
                by Filmskart (Apparels)
              </span>
              <span className="flex items-center mt-2 ">
                {starCount.map((count, index) => (
                  <React.Fragment key={index}>
                    {[...Array(count)].map((_, i) => (
                      <Star key={i} size={14} className=" text-yellow-300" />
                    ))}
                  </React.Fragment>
                ))}{" "}
                <span className="text-xs ml-3">(391)</span>
              </span>
              <span className="mt-2 text-sm flex items-center ">
                <span className="font-semibold mr-2 flex h-full font-inter">
                  Price:{" "}
                </span>
                <span className="flex flex-col items-center text-sm tracking-wide font-inter">
                  ₹ 2130/-{" "}
                  <span className="text-xs text-red-500">
                    (₹ <s>2530/-</s>)
                  </span>
                </span>
              </span>

              <span className="text-xs font-medium mt-4 font-inter ">
                Pattern Name:{" "}
                <span className="text-xs font-normal font-inter ml-1">
                  MCBGF234
                </span>
              </span>
            </div>

            <div className="flex flex-col my-7">
              <span className="font-inter text-sm flex flex-wrap text-gray-900/90 ">
                Items added on 5th May, 2024
              </span>
              <div className="flex flex-row items-center bg-red-500 text-white justify-center mt-4 text-sm gap-3 py-2 rounded-md hover:scale-110 duration-300 ease-out cursor-pointer">
                <button className="">Move to Cart </button>
                <ShoppingCart size={14} />
              </div>
              <div className="flex flex-row items-center bg-red-500 text-white justify-center mt-4 text-sm gap-3 py-2 rounded-md hover:scale-110 duration-300 ease-out cursor-pointer">
                <button className="">Delete </button>
                <Trash size={14} />
              </div>
            </div>
          </div>
          <div className="flex flex-row max-[1023px]:flex-col max-[1023px]:items-center mt-4 border-y-[1px] gap-7 justify-evenly">
            <div className="w-40 h-40 flex justify-center bg-[#f5f5f5] my-5">
              <img
                src="/image1.avif"
                alt="product-image"
                className=" w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col my-7 ">
              <span className="font-inter flex flex-wrap w-56 ">
                U.S. Polo Assn. Denim Co.
              </span>
              <span className="text-xs text-gray-500">
                by Filmskart (Apparels)
              </span>
              <span className="flex items-center mt-2 ">
                {starCount.map((count, index) => (
                  <React.Fragment key={index}>
                    {[...Array(count)].map((_, i) => (
                      <Star key={i} size={14} className=" text-yellow-300" />
                    ))}
                  </React.Fragment>
                ))}{" "}
                <span className="text-xs ml-3">(391)</span>
              </span>
              <span className="mt-2 text-sm flex items-center ">
                <span className="font-semibold mr-2 flex h-full font-inter">
                  Price:{" "}
                </span>
                <span className="flex flex-col items-center text-sm tracking-wide font-inter">
                  ₹ 2130/-{" "}
                  <span className="text-xs text-red-500">
                    (₹ <s>2530/-</s>)
                  </span>
                </span>
              </span>

              <span className="text-xs font-medium mt-4 font-inter ">
                Pattern Name:{" "}
                <span className="text-xs font-normal font-inter ml-1">
                  MCBGF234
                </span>
              </span>
            </div>

            <div className="flex flex-col my-7">
              <span className="font-inter text-sm flex flex-wrap text-gray-900/90 ">
                Items added on 5th May, 2024
              </span>
              <div className="flex flex-row items-center bg-red-500 text-white justify-center mt-4 text-sm gap-3 py-2 rounded-md hover:scale-110 duration-300 ease-out cursor-pointer">
                <button className="">Move to Cart </button>
                <ShoppingCart size={14} />
              </div>
              <div className="flex flex-row items-center bg-red-500 text-white justify-center mt-4 text-sm gap-3 py-2 rounded-md hover:scale-110 duration-300 ease-out cursor-pointer">
                <button className="">Delete </button>
                <Trash size={14} />
              </div>
            </div>
          </div>
          <div className="flex flex-row max-[1023px]:flex-col max-[1023px]:items-center mt-4 border-y-[1px] gap-7 justify-evenly">
            <div className="w-40 h-40 flex justify-center bg-[#f5f5f5] my-5">
              <img
                src="/image1.avif"
                alt="product-image"
                className=" w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col my-7 ">
              <span className="font-inter flex flex-wrap w-56 ">
                U.S. Polo Assn. Denim Co.
              </span>
              <span className="text-xs text-gray-500">
                by Filmskart (Apparels)
              </span>
              <span className="flex items-center mt-2 ">
                {starCount.map((count, index) => (
                  <React.Fragment key={index}>
                    {[...Array(count)].map((_, i) => (
                      <Star key={i} size={14} className=" text-yellow-300" />
                    ))}
                  </React.Fragment>
                ))}{" "}
                <span className="text-xs ml-3">(391)</span>
              </span>
              <span className="mt-2 text-sm flex items-center ">
                <span className="font-semibold mr-2 flex h-full font-inter">
                  Price:{" "}
                </span>
                <span className="flex flex-col items-center text-sm tracking-wide font-inter">
                  ₹ 2130/-{" "}
                  <span className="text-xs text-red-500">
                    (₹ <s>2530/-</s>)
                  </span>
                </span>
              </span>

              <span className="text-xs font-medium mt-4 font-inter ">
                Pattern Name:{" "}
                <span className="text-xs font-normal font-inter ml-1">
                  MCBGF234
                </span>
              </span>
            </div>

            <div className="flex flex-col my-7">
              <span className="font-inter text-sm flex flex-wrap text-gray-900/90 ">
                Items added on 5th May, 2024
              </span>
              <div className="flex flex-row items-center bg-red-500 text-white justify-center mt-4 text-sm gap-3 py-2 rounded-md hover:scale-110 duration-300 ease-out cursor-pointer">
                <button className="">Move to Cart </button>
                <ShoppingCart size={14} />
              </div>
              <div className="flex flex-row items-center bg-red-500 text-white justify-center mt-4 text-sm gap-3 py-2 rounded-md hover:scale-110 duration-300 ease-out cursor-pointer">
                <button className="">Delete </button>
                <Trash size={14} />
              </div>
            </div>
          </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default WishlistList;
