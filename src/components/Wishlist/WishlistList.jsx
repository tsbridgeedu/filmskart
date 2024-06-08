import { Delete, ShoppingCart, Star, Trash } from "lucide-react";
import React from "react";
import '../../index.css'
import WishlistListItem from "./Wishlistitem";

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
          <WishlistListItem />
          
         </div>
        </div>
      </div>
    </>
  );
};

export default WishlistList;
