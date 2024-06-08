import React from "react";
import { Delete, ShoppingCart, Star, Trash } from "lucide-react";

function WishlistListItem(){
    const itemAddedOn = new Date(2024, 5, 5);
    const itemName = "d U.S. Polo Assn. Denim Co.";
    const sellerName = "d Filmskart (Apparels)";
    const starCount = 2;
    const starRating = 400;
    const price = 250;
    const patternName = "MCBGF234";
    return (
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
                    {itemName}
                </span>
                <span className="text-xs text-gray-500">
                    by {sellerName}
                </span>
                <span className="flex items-center mt-2 ">
                    {
                        Array(starCount).fill().map((_, i) => (
                            <Star key={i} size={14} className=" text-yellow-300" />
                        ))
                    }                    
                    <span className="text-xs ml-3">({starRating})</span>
                </span>
                <span className="mt-2 text-sm flex items-center ">
                    <span className="font-semibold mr-2 flex h-full font-inter">
                        Price: 
                    </span>
                    <span className="flex flex-col items-center text-sm tracking-wide font-inter">
                        ₹ {price} 
                    </span>
                </span>
                <span className="text-xs font-medium mt-4 font-inter ">
                Pattern Name:{" "}
                    <span className="text-xs font-normal font-inter ml-1">
                    {patternName}
                    </span>
                </span>
            </div>
            <div className="flex flex-col my-7">
                <span className="font-inter text-sm flex flex-wrap text-gray-900/90 ">
                Items added on {itemAddedOn.toDateString()}
              </span>
              <button className="flex flex-row items-center bg-red-500 text-white justify-center mt-4 text-sm gap-3 py-2 rounded-md hover:scale-110 duration-300 ease-out cursor-pointer">
                Move to Cart 
                <ShoppingCart size={14} />
              </button>
              <button className="flex flex-row items-center bg-red-500 text-white justify-center mt-4 text-sm gap-3 py-2 rounded-md hover:scale-110 duration-300 ease-out cursor-pointer">
                Delete 
                <Trash size={14} />
              </button>
            </div>
        </div>
    )
}

export default WishlistListItem;