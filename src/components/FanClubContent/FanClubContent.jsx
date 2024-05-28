import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './fanClub.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Banner/banner.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowBigDown, ArrowBigDownDash, ArrowBigRight } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import FanClubVideo from '../../assets/fan-club.mp4';
import CountUp from 'react-countup';

const FanClubContent = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (

    <div className="flex flex-col">
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

      <div className="flex flex-col justify-between items-center gap-[35px] mt-10 mb-10">

        <div className="fan-header flex flex-wrap justify-between items-center gap-16 w-full px-[30px]">
          <div className="flex justify-start items-center">
            <div className="bg-red-500 w-2 h-10 rounded-md"></div>
            <div className="fan-club-heading text-red-500 font-semibold lg:text-2xl md:text-2xl sm:text-xl ml-3 tracking-wider">
              Fan Clubs
            </div>
            <div className="clap-board mb-2 ml-[5px] self-end ">
              <img className="sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]" src="clap-board-gif.gif" alt="clap-board-gif" width='45px' height='45px' />
            </div>
          </div>

          <div className="search-bar flex items-center rounded-full border-4 border-red-500 lg:w-[500px] md:w-[400px] sm:w-[350px] px-[10px] py-[10px] relative">
            <div className="px-[5px]"><FaSearch size={20} /></div>
            <input className='w-full ml-[10px] border-none outline-none' type="search" id="searchItem" name="person_name" placeholder="Search for your favourite star" />
          </div>
        </div>

        <h1 className="self-start pl-[40px] pr-[10px] text-3xl font-semibold">Fan Clubs Await: Dive In & Connect</h1>


        <div className="flex justify-center items-center gap-16 flex-wrap mx-5" id="explore-fan-clubs">
          {data.map((card, index) => {
            return (
              <div key={index} className="flex flex-col justify-center items-center min-w-[180px] rounded-xl cursor-pointer shadow-lg shadow-gray-400 hover:shadow-gray-600 transition-transform duration-[0.2s] hover:scale-105">
                <img
                  className="h-[300px] w-[300px] object-cover rounded-t-xl"
                  src={card.img}
                  alt=""
                />
                <p className="py-4 text-xl font-semibold">
                  {card.name}
                </p>
                <button
                  className="w-1/2 mb-5 rounded-full py-2 text-lg text-white font-medium bg-gradient-to-r from-[#f75700] to-[#f90000] hover:bg-gradient-to-l">
                  Join now
                </button>
              </div>
            )
          })}
        </div>
      </div>

      <div className="font-medium bg-gradient-to-r from-[#f75700] to-[#f90000] flex flex-wrap gap-10 w-full sm:h-44 h-full mt-10 mb-14 justify-around items-center py-5 px-5">
        <div className="flex flex-col justify-center items-center gap-3 text-[#fff]">
          <div className="text-5xl"><CountUp start={0} end={20} duration={2} delay={0} separator="" suffix="+" enableScrollSpy={true}>{({ countUpRef }) => <span ref={countUpRef} />}</CountUp><br /><span id="counter" /></div>
          <div className="bg-white w-[40px] h-[8px]"></div>
          <p className="text-[22px]">
            Years in the Business
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 text-[#fff] my-5">
          <div className="text-5xl"><CountUp start={0} end={100} duration={2} delay={0} separator="" suffix="+" enableScrollSpy={true}>{({ countUpRef }) => <span ref={countUpRef} />}</CountUp></div>
          <div className="bg-white w-[40px] h-[8px]"></div>
          <p className="text-[22px]">Satisfied Client</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 text-[#fff] my-5">
          <div className="text-5xl"><CountUp start={0} end={1000} duration={2} delay={0} separator="" suffix="+" enableScrollSpy={true}>{({ countUpRef }) => <span ref={countUpRef} />}</CountUp></div>
          <div className="bg-white w-[40px] h-[8px]"></div>
          <p className="text-[22px]">Satisfied Fan</p>
        </div>
      </div>

      
    </div>

  );
};

export default FanClubContent;

const data = [
  {
    name: 'Chiranjeevi',
    img: '/star1.jpg',
  },

  {
    name: 'Bala Krishna',
    img: '/star2.jpg',
  },

  {
    name: 'Prabhas',
    img: '/star3.jpg',
  },

  {
    name: 'Anushka Shetty',
    img: '/star8.jpg',
  },

  {
    name: 'Mahesh Babu',
    img: '/star11.jpg',
  },

  {
    name: 'Pawan Kalyan',
    img: '/star12.jpg',
  },

  {
    name: 'Tamanna',
    img: '/star6.jpg',
  },

  {
    name: 'Allu Arjun',
    img: '/star4.jpg',
  },

  {
    name: 'Samantha',
    img: '/star9.jpg',
  },

  {
    name: 'Nagarjuna',
    img: '/star10.jpg',
  },

  {
    name: 'kajal Agarwal',
    img: '/star7.jpg',
  },


];

const FanClubBanner = () => {

  const [text] = useTypewriter({
    words: ['Merchandise Fulfillment', 'Social Interaction', 'Fan Club Management'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  })

  return (
    <Link className="fan-club-banner relative block w-full xl:h-[85vh] lg:h-[85vh] md:h-[80vh] sm:h-[80vh]">
      <video

        className="w-full h-full object-cover blur-[2px] relative"

        alt="fan-club-banner"
        autoPlay
        muted
        loop

      >
        <source src={FanClubVideo} type="video/mp4" />
      </video>
      <div className="absolute top-3 left-0 z-10">
        <div className="bg-red-500 text-white py-1 px-3 rounded-tl-md">
          Fan Club
        </div>
      </div>

      <div className="fan-club-content absolute top-0 bottom-0 w-full h-full flex flex-col justify-center items-center gap-5 px-8">
        <h2 className="quote text-center lg:text-4xl md:text-3xl sm:text-2xl font-bold text-[#fff] lg:leading-[50px]">Unite in Passion: Join Our Fan Clubs and Celebrate Cinema's Greatest Stars!</h2>

        <motion.div
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          className="flex items-center text-[#fff] bg-red-500 opacity-2 py-2 px-4 rounded-md"
        >
          <h2 className="motion-button lg:text-3xl md:text-xl sm:text-lg font-bold">Explore Fan Clubs</h2>
          <motion.div>
            <ArrowBigDown size={34} className="ml-2" />
          </motion.div>
        </motion.div>
        <div className="text-lg font-medium italic">
          <span className='type-text text-[#fff]'>{text}</span>
          <Cursor cursorColor='red' />
        </div>
      </div>
    </Link>
  );
};
