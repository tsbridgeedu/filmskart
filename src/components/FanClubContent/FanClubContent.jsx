import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Banner/banner.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowBigDown, ArrowBigDownDash, ArrowBigRight } from "lucide-react";

import FanClubVideo from '../../assets/fan-club.mp4'

const FanClubContent = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
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
      // onAutoplayTimeLeft={onAutoplayTimeLeft}
    >
      <SwiperSlide className="py-3 px-2 rounded-lg">
        <FanClubBanner />
      </SwiperSlide>
    </Swiper>
  );
};

export default FanClubContent;

const FanClubBanner = () => {
  return (
    <Link className="relative block">
      <video
      width='100'
      height='100'
        className="w-full h-full xl:h-[85vh] object-cover blur-[3px]"
        
        alt="fan-club-banner"
        autoPlay
        muted
        loop
        
      >
        <source src={FanClubVideo} type="video/mp4"/>
      </video>
      <div className="absolute top-3 left-0 z-10">
        <div className="bg-red-500 text-white py-1 px-3 rounded-tl-md">
          Fan Club
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center">
        <motion.div
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.2 }}
          className="flex  items-center text-[#fff] bg-red-500 opacity-2 p-3  rounded-tl-md rounded-tr-md "
        >
          <h2 className="lg:text-4xl  font-bold">Explore Fan Clubs</h2>
          <motion.div>
            <ArrowBigDown className="ml-4" />
          </motion.div>
        </motion.div>
      </div>
    </Link>
  );
};
