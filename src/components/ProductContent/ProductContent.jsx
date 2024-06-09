import "./ProductContent.css";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { Star } from "lucide-react";
import { FaSlash } from "react-icons/fa6";
import axios from "axios";
import { Puff, ThreeDots } from "react-loader-spinner";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { useNavigate } from "react-router-dom";
import { EffectFade, FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../redux/slices/cartSlice";
import { toggleItem } from "../../../redux/slices/wishlistSlice";

// Toastify
import { toast,Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductContent = ({fetchProductById}) => {
  const [toggleState, setToggleState] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  //added the functionalityy

  const handleAddToCart = () => {
    dispatch(addProduct({ itemId: product.id || id, quantity: quantity }));
    toast.success("Item has been added to cart", {
      position: 'top-center',
      transition: Slide,
    });
  };

  const handleAddToWishList = () => {
    if(wishListItem.includes(productId)){
      toast.success("Item has been removed from Wishlist", {
        position: 'top-center',
        transition: Slide,
      });
    }else{
      toast.success("Item has been added to Wishlist", {
        position: 'top-center',
        transition: Slide,
      });
    }
    dispatch(toggleItem({ itemId: productId })); 
  }

  const wishListItem = useSelector((state) => state.wishlist.wishListItems);
  

  const navigate = useNavigate();
  const handleBuyNow = () => {
    dispatch(addProduct({ itemId: product.id || id, quantity: quantity}));
    navigate("/checkout"); // Navigate to the checkout page
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    setIsLoading(true);
    async function getProduct() {
      await new Promise((resolve) => setTimeout(resolve, 2800));
      const item = await fetchProductById(id);
      setProduct(item);
      setIsLoading(false);
    }
    getProduct();
  }, []);
 
  const productId = product.id;
  const category = product.category?.name;
  const availableSize = product.size?.name;
  const availableColor = product.color?.name;
  const sizes = ["XS", "S", "M", "L", "XL"];

  const star = 4;
  const starsQuantity = parseInt(star, 10);
  const stars = Array.from({ length: starsQuantity }).map((_, i) => (
    <Star key={i} size={20} color="#FFD700" />
  ));

  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex flex-col justify-center items-start px-16 py-16 w-full h-14 gap-5">
        <h1 className="text-2xl font-semibold font-inter">Product Details</h1>
        <div className="flex gap-3">
          <span>Home</span>/<span className="text-red-500">Product</span>
        </div>
      </div>

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
            Fetching the Product Details{" "}
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
          <div className="prod_container mx-[60px] min-w-[90%] relative flex justify-center items-center gap-8 px-8 py-8 shadow-4xl shadow-gray-400">
            <div className="prod_images flex w-[50%] h-full gap-5">
              <Swiper
                direction={'vertical'}
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={'auto'}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation]}
                className="prod-thumb-slider w-[25%] h-full"
              >
                {product.images?.map((image, index) => {
                  return (
                    <SwiperSlide key={index} className="w-[100%]">
                      <img
                        key={image.id}
                        src={image.url}
                        alt={product.name}
                        className="w-full h-full object-contain cursor-pointer transition duration-200 ease-in hover:scale-110"
                      />
                    </SwiperSlide>
                  )
                })}
              </Swiper>

              <Swiper
                spaceBetween={10}
                effect={'fade'}
                pagination={{
                  clickable:true,
                }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[EffectFade, FreeMode, Thumbs, Pagination]}
                className="prod-slider w-[60%] h-full"
              >
                {product.images?.map((image, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <img
                        key={image.id}
                        src={image.url}
                        alt={product.name}
                        className="w-full h-full object-contain object-center"
                      />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>

            <div className="prod_info w-[50%] flex flex-col justify-center gap-2">
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-2xl">{product.name}</h1>
                <div className="flex justify-start items-center reviews">
                  {stars}
                  <div className="ml-2">(15)</div>
                </div>
                <p className="text-red-500 text-lg">${product.price}.00</p>
              </div>
              <hr className="flex w-full my-2 bg-red-400 h-[2px] rounded-lg" />
              <div>
                <p className="text-sm">
                  {product.description}
                </p>
              </div>
              <hr className="flex w-full my-2 bg-red-400 h-[2px] rounded-lg" />

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold">Colors:</span>
                  <div className={`w-[18px] h-[18px] rounded-lg border-[1px] shadow-gray-300 shadow-md border-gray-300 cursor-pointer bg-${availableColor}`}></div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-base font-semibold">Size:</span>

                  {sizes.map((size, index) =>  {
                    return(
                      <div key={index} className={`size w-10 h-10 overflow-hidden opacity-100 relative flex justify-center items-center rounded-md border-2 cursor-pointer ${availableSize !=size ? "size na" :"size"}`}>
                        {size}
                        {availableSize !=size ? <FaSlash size={40} strokeWidth={1} className="absolute flex justify-center items-center opacity-70" /> : null}
                      </div>
                    );
                  })}
                </div>
                <div className="highlight flex items-center justify-start gap-3">
                  <div className="add_sub flex">
                    <button className="bg-red-500 hover:bg-[#f45e5e] text-white px-2 py-[13px] flex justify-center items-center cursor-pointer border-[1px] border-[#808080] rounded-l-md"
                      onClick={decrementQuantity}>
                      <FiMinus />
                    </button>
                    <span className="digit px-6 py-2 flex justify-center items-center border-[1px] border-[#808080]">
                      {quantity}
                    </span>
                    <button className="bg-red-500 hover:bg-[#f45e5e] text-white px-2 py-[13px] flex justify-center items-center cursor-pointer border-[1px] border-[#808080] rounded-r-md"
                      onClick={incrementQuantity}>
                      <FaPlus />
                    </button>
                  </div>
                  <div className="flex gap-3">
                    <div className="buy bg-red-500 text-white font-semibold outline-none px-12 py-2 flex items-center rounded-md text-lg cursor-pointer">
                      <button onClick={handleBuyNow}>Buy</button>
                    </div>
                    <div className="cart border-[1px] border-[#808080] rounded-md flex justify-center items-center p-2 cursor-pointer">
                      <button onClick={handleAddToCart}><FiShoppingCart size={25} /></button>
                    </div>

                    
                   {/* WISHLIST FUNCTION ADDED */}

                    <div data-existInWishlist={wishListItem.includes(productId)} className="wishlist border-[1px] border-[#808080] rounded-md flex justify-center items-center p-2 cursor-pointer">
                      <button onClick={handleAddToWishList}>
                        {product.inWishlist ? (
                          <IoMdHeart size={25} color="red" />
                        ) : (
                          <IoMdHeartEmpty size={25} />
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="info-container flex flex-col bg-[#ffdede] w-full sm:px-14 md:px-20 py-14 gap-8 mb-5 justify-center items-start">
            <div className="info-head-container flex gap-16 text-red-500 sm:text-lg md:text-xl cursor-pointer items-center">
              <div
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Description
              </div>
              <div
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Additional info
              </div>
              <div
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                Reviews
              </div>
            </div>
            <div
              className={toggleState === 1 ? "content active-content" : "content"}
            >
              <h1 className="text-lg font-semibold text-red-500">
                Product Details
              </h1>
              <ul className="m-0 text-[#fe6b6b] marker:text-red-500 flex flex-col list-disc gap-1 pl-4">
                <li>Material - 100% Cotton</li>
                <li>
                  Pattern - Solid, Fit Type - Regular Fit, Half Sleeve T-Shirts
                </li>
                <li>Neck Type - Round Neck</li>
                <li>
                  Great for layering or wearing alone, this T-shirt features a
                  crewneck, short sleeves, and a Label-free neck for everyday
                  comfort
                </li>
                <li>Softner wash for better hand feel</li>
              </ul>
            </div>

            <div
              className={toggleState === 2 ? "content active-content" : "content"}
            >
              <div className="content-child flex justify-center w-[50%]">
                <div className="flex flex-col w-[50%] gap-2 text-red-500 font-semibold">
                  <h1>Manufacturer</h1>
                  <h1>Item Weight</h1>
                  <h1>Generic Name</h1>
                </div>
                <div className="flex flex-col w-[50%] gap-2 text-[#fe6b6b]">
                  <p>Filmkart Brand - Symbol</p>
                  <p>250 g</p>
                  <p>Cotton Solid Round Neck Regular Fit T-Shirt</p>
                </div>
              </div>
            </div>

            <div
              className={toggleState === 3 ? "content active-content" : "content"}
            >
              <h1 className="text-lg font-semibold text-red-500">
                Customer Reviews
              </h1>
            </div>
          </div>
        </>
      )}
      <RelatedProducts category={category} productId={productId} />
    </div>
  );
};

export default ProductContent;

