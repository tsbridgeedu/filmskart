import axios from "axios";
import React, { useState, useEffect } from "react";
import { Puff, ThreeDots } from "react-loader-spinner";

import Slider from "react-slick";
const Hero = () => {
  const [countdown, setCountdown] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });
  const BASE_URL = import.meta.env.VITE_NODE_URL;

  const [flashProducts, setFlashProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function updateCountdown() {
    const currentTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    });
    const now = new Date(currentTime);

    const targetTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      23,
      59,
      59
    );

    let timeDiff = Math.max(targetTime - now, 0) / 1000;

    const days = Math.floor(timeDiff / (24 * 3600));
    timeDiff %= 24 * 3600;
    const hours = Math.floor(timeDiff / 3600);
    timeDiff %= 3600;
    const minutes = Math.floor(timeDiff / 60);
    const seconds = Math.floor(timeDiff % 60);

    setCountdown({
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    });
  }

  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000);

    setIsLoading(true);
    async function getBannerData() {
      await new Promise((resolve) => setTimeout(resolve, 2800));
      await axios.get(`${BASE_URL}/product-data`).then((item) => {
        console.log(item.data);
        setFlashProducts(item.data);
        setIsLoading(false);
      });
    }
    getBannerData();
    return () => clearInterval(interval);
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
          slidesToShow: 4,
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
    <div className=" flex flex-col w-full mt-20 px-4 md:px-20">
      <div className="w-full h-full flex flex-row items-center gap-2">
        <div className="w-2 rounded-md h-10 bg-red-500"></div>
        <span className="text-lg text-red-500 font-semibold flex flex-row justify-center items-center">
          Today's Deals
        </span>
        <span className="flex flex-row justify-center items-center">
          <img src="/fire.gif" className="w-7" />
        </span>
      </div>
      <div className="flex flex-row mt-1 px-2 gap-5 md:gap-20 items-center">
        <span className="md:text-4xl text-xl flex flex-row   mt-3 font-inter font-semibold ">
          Flash Sales
        </span>
        <span className="py-5 md:mt-0 mt-5 flex flex-col md:px-16 text-red-500">
          <div className="flex flex-row gap-3 max-[768px]:gap-1 font-bold items-center">
            <span className="text-xs font-semibold font-inter md:px-3 px-2 text-black">
              Days
            </span>{" "}
            <span className="text-xs font-semibold font-inter md:px-3 px-2 text-black">
              Hours
            </span>
            <span className="text-xs font-semibold font-inter md:px-3 px-2 text-black">
              Minutes
            </span>
            <span className="text-xs font-semibold font-inter md:px-1 px-2 text-black">
              Sec
            </span>
          </div>
          <div className="flex flex-row md:gap-3 gap-2 font-bold items-center">
            <span className="md:text-2xl text-lg     font-semibold font-inter px-2 text-black">
              {countdown.days}
            </span>{" "}
            :
            <span className="md:text-2xl text-lg font-semibold font-inter px-2 text-black">
              {countdown.hours}
            </span>
            :
            <span className="md:text-2xl text-lg font-semibold font-inter px-2 text-black">
              {countdown.minutes}
            </span>
            :
            <span className="md:text-2xl textlgl font-semibold font-inter max-[768px]:w-[23px] text-black">
              {countdown.seconds}
            </span>
          </div>
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
          <Slider
            {...settings}
            className=" w-full cat-slider flex flex-row shadow-3xl "
          >
            {flashProducts.map((item, key) => {
              return (
                <div
                  key={key}
                  className="flex flex-col w-[220px] h-64 border  rounded-sm cursor-pointer hover:scale-110 duration-300 ease-out hover:drop-shadow-xl hover:shadow-3xl "
                >
                  {" "}
                  <div className="w-full h-full frt_prdct_flsh">
                    <div className="w-full h-full flex justify-center bg-[#f5f5f5] relative">
                      <img
                        src={item.img}
                        alt="product-image"
                        className=" w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Hero;
