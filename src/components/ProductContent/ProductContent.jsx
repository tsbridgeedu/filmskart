// import "./ProductContent.css";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { upcomingMovies } from "../../../constants/constant";

const ProductContent = () => {
  return (
    <div>
      <div className="prod_container  mx-[10px] my-auto flex justify-center mt-7 px-14">
        <div
          className="prod_thumbnail_carousel flex 
        flex-col"
        >
          <img
            className="prod_thumbnail w-[120px] h-[80px] object-cover mx-[5px] my-[10px] cursor-pointer"
            src="card3.jpg"
            alt=""
          />
          <img
            className="prod_thumbnail w-[120px] h-[80px] object-cover mx-[5px] my-[10px] cursor-pointer"
            src="card3.jpg"
            alt=""
          />
          <img
            className="prod_thumbnail w-[120px] h-[80px] object-cover mx-[5px] my-[10px] cursor-pointer"
            src="card3.jpg"
            alt=""
          />
          <img
            className="prod_thumbnail w-[120px] h-[80px] object-cover mx-[5px] my-[10px] cursor-pointer"
            src="card3.jpg"
            alt=""
          />
        </div>
        <div className="prod-images w-[40%] ml-5 ">
          <div className="prod_carousel flex justify-center overflow-x-auto snap-x-mandatory">
            <img
              className="w-[300px] h-[400px] object-cover block mb-20"
              src="card3.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="prod_info w-[40%] pl-28 flex flex-col justify-start">
          <h1 className="font-semibold text-2xl mb-2">Product Name</h1>
          <div className="flex justify-between w-2/3 items-center">
            {/* {upcomingMovies.map((card) => {
              return (
                <div className="flex justify-start mt-4">
                  <div className="flex justify-center items-center reviews">
                    {[...Array(parseInt(card.star, 10))].map((_, i) => (
                      <Star key={i} size={18} color="#FFD700" />
                    ))}
                  </div>
                  <div className="flex ml-2">({card.review})</div>
                </div>
              );
            })} */}
            <span className="text-yellow-500">★★★★★</span>
            <div>
              <span className="text-red-300 text-sm  text-[10px]">
                (150 Reviews)
              </span>
              <span className="text-red-200 text-xs"> | </span>
              <span className="text-yellow-300   text-[10px]">In Stock</span>
            </div>
          </div>
          <p className="text-red-500 mt-2 mb-4 text-lg">$192.00</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            ipsam odio saepe aliquid eum amet. Cumque aliquam ipsum quo
          </p>
          <hr className="flex w-full  my-3 bg-red-400 h-[2px] rounded-lg" />

          <div className="flex  items-center ">
            <span className="text-base font-semibold">Colors:</span>
            <div className="bg-black w-[14px] h-[14px] rounded-lg mx-2"></div>
            <div className="bg-red-400 w-[14px] h-[14px] rounded-lg mx-2"></div>
          </div>
          <div className="flex items-center">
            <span className="text-base font-semibold">Size:</span>
            <div className="mx-2 my-3 w-10 h-10 flex justify-center items-center rounded-md border-2 border-black">
              XS
            </div>
            <div className="mx-2 my-3 w-10 h-10 flex justify-center items-center rounded-md border-2 border-black">
              S
            </div>
            <div className="mx-2 my-3 w-10 h-10 flex justify-center items-center rounded-md border-2 border-black bg-red-400 text-white">
              M
            </div>
            <div className="mx-2 my-3 w-10 h-10 flex justify-center items-center rounded-md border-2 border-black">
              L
            </div>
            <div className="mx-2 my-3 w-10 h-10 flex justify-center items-center rounded-md border-2 border-black">
              XL
            </div>
          </div>
          <div className="flex items-center justify-start w-full">
            <div className="flex">
              <span className="bg-red-500 text-white my-3 w-10 h-10 flex justify-center items-center  border-[1px] border-[#808080] rounded-l-md">
                <FaPlus />
              </span>
              <span className=" my-3 w-20 h-10 flex justify-center items-center  border-[1px] border-[#808080]">
                3
              </span>
              <span className="bg-red-500 text-white my-3 w-10 h-10 flex justify-center items-center  border-[1px] border-[#808080] rounded-r-md">
                <FiMinus />
              </span>
            </div>
            <div
              className="flex h-10 w-16 mx-5
            "
            >
              <div className="bg-red-500 text-white outline-none px-10 flex justify-center items-center rounded-md ">
                Buy
              </div>
            </div>
            <div className="border-[1px] border-[#808080] rounded-md p-1 ml-14">
              <IoMdHeartEmpty size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
