import React, { useEffect, useState } from "react";
import "./banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import {
  Audio,
  Bars,
  CirclesWithBar,
  InfinitySpin,
  RevolvingDot,
  ThreeDots,
} from "react-loader-spinner";

import BannerContent from "../BannerContent";

import axios from "axios";


const Banner = () => {
  const BASE_URL = import.meta.env.VITE_NODE_URL;
  const VITE_INVENTORY_URL = import.meta.env.VITE_INVENTORY_URL;
  const VITE_STORE_ID = import.meta.env.VITE_STORE_ID;

  const [isLoading, setIsLoading] = useState(false);
  const [bannerContent, setBannerContent] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    async function getBannerData() {
      
      await axios.get(`${BASE_URL}/banner-data`).then((item) => {
      });
    }
    async function getBannerJSONData() {
      await axios.get(`${VITE_INVENTORY_URL}${VITE_STORE_ID}/billboards`).then((item) => {
        setBannerContent(item.data);
        setIsLoading(false);
        // console.log(item.data)
      })
    }
    getBannerData();
    getBannerJSONData();
  }, []);

  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <>
        {isLoading ? (
          <div className="w-full h-[80vh] items-center flex flex-col gap-3 justify-center">
            <InfinitySpin
              visible={true}
              width="200"
              color="#ee2222"
              ariaLabel="infinity-spin-loading"
            />
            <span className="text-sm flex flex-row items-center gap-2 lg:font-semibold">
              Crazy stuffs loading{" "}
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
          bannerContent.map((banner) => {
            return (
              <div key={banner.id}>
                <SwiperSlide key={banner.id} className="py-3 px-2 rounded-lg">
                  <BannerContent content={banner} />
                </SwiperSlide>
              </div>
            );
          })
        )}
      </>
    </Swiper>
  );
};

export default Banner;
