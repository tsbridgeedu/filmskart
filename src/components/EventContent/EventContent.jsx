import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Banner/banner.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowBigDown,
  ArrowBigDownDash,
  ArrowBigRight,
  MapPin,
  Search,
  TicketPercent,
  Trophy,
} from "lucide-react";

import SearchIcon from "@mui/icons-material/Search";

import EventVideo from "../../assets/event.mp4";
import EventSearch from "../EventSearch";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const EventContent = () => {
  return (
    <>
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
          <EventsBanner />
        </SwiperSlide>
      </Swiper>

      <div
        className="flex justify-center mb-16 mt-16 px-2 evnts__buttons__sch_org"
        id="event__search__organize"
      >
        <EventSearch />
      </div>

      <section className="flex my-16 md:px-2">
        <div className="flex flex-col items-center w-full py-5 relative justify-center">
          <div className="absolute w-full  top-0  bottom-0 -z-10">
            <img
              src="event-hero.jpeg"
              className="object-cover w-full h-full blur-[3px]"
            />
          </div>
          <Stack className="flex justify-center  w-full h-full">
            <Typography
              variant="h1"
              sx={{
                color: "#ffffff",
                textAlign: "center",
                fontWeight: "500",
                letterSpacing: "5px",
              }}
              className="min-[450px]:uppercase "
            >
              Eve<span className="">nts</span>
            </Typography>
            <Stack className="flex justify-center">
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "500",
                  letterSpacing: "5px",
                }}
              >
                <span className="bg-red-500 px-1.5 rounded-md mr-3"> </span>{" "}
                Featured Events
              </Typography>
            </Stack>
          </Stack>
        </div>
      </section>

      <section className="flex my-20">
        <div className="flex w-full justify-center gap-10 max-[1024px]:flex-col">
          {/* Events */}

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-12 bg-[#f5f5f5] shadow-xl max-[1023px]:px-4">
              <div className=" flex relative max-[1023px]:px-10 max-[1023px]:justify-center w-full ">
                <img
                  src="/kalkibannerimg.jpg"
                  className="w-[720px] h-full object-contain"
                />
                <div
                  className="absolute -bottom-7 left-10 text-white bg-red-500 px-7 py-3 max-[540px]:px-3 max-[540px]:left-24 max-[540px]:text-sm max-[540px]:py-2  rounded-md max-[1023px]:-bottom-[5] max-[1023px]:py-4 max-[1023px]:left-44 
                "
                >
                  <span className="text-2xl max-[540px]:text-base min-[540px]:mr-2">
                    21st
                  </span>{" "}
                  June, 2023
                </div>
              </div>

              <div className="details__evnts w-full mt-2 max-[1023px]:mt-2 max-[1023px]:items-center min-[540px]:pl-5 flex flex-col">
                <h1 className="evnt__title text-3xl font-medium max-[540px]:text-2xl">
                  Prabhas Movie Launch
                </h1>

                <div className="flex flex-row w-full items-center max-[1023px]:justify-center  gap-4 min-[540px]:pl-2 py-3">
                  <span className="flex items-center gap-2">
                    <MapPin size={15} /> Hyderabad
                  </span>{" "}
                  |
                  <span className="flex items-center gap-2">
                    <Trophy size={15} />
                    Sport
                  </span>
                </div>

                <div className="flex flex-row w-full items-center max-[1023px]:justify-center max-[540px]:px-2 py-1 min-[540px]:pl-2 gap-2 flex-wrap">
                  <span className="font-semibold">Venue: </span>{" "}
                  <span>Wankhede Stadium, Mumbai</span>
                </div>

                <div className="flex flex-col w-full items-end justify-center max-[1023px]:items-center  pr-7 py-8">
                  <span className="text-center mb-2">₹300 onwards</span>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-12 bg-[#f5f5f5] shadow-xl">
              <div className=" flex relative max-[1023px]:px-10 max-[1023px]:justify-center w-full ">
                <img
                  src="/kalkibannerimg.jpg"
                  className="w-[720px] h-full object-contain"
                />
                <div
                  className="absolute -bottom-7 left-10 text-white bg-red-500 px-7 py-3 max-[540px]:px-3 max-[540px]:left-24 max-[540px]:text-sm max-[540px]:py-2  rounded-md max-[1023px]:-bottom-[5] max-[1023px]:py-4 max-[1023px]:left-44 
                "
                >
                  <span className="text-2xl max-[540px]:text-base min-[540px]:mr-2">
                    21st
                  </span>{" "}
                  June, 2023
                </div>
              </div>

              <div className="details__evnts w-full mt-2 max-[1023px]:mt-2 max-[1023px]:items-center min-[540px]:pl-5 flex flex-col">
                <h1 className="evnt__title text-3xl font-medium max-[540px]:text-2xl">
                  Prabhas Movie Launch
                </h1>

                <div className="flex flex-row w-full items-center max-[1023px]:justify-center  gap-4 min-[540px]:pl-2 py-3">
                  <span className="flex items-center gap-2">
                    <MapPin size={15} /> Hyderabad
                  </span>{" "}
                  |
                  <span className="flex items-center gap-2">
                    <Trophy size={15} />
                    Sport
                  </span>
                </div>

                <div className="flex flex-row w-full items-center max-[1023px]:justify-center max-[540px]:px-2 py-1 min-[540px]:pl-2 gap-2 flex-wrap">
                  <span className="font-semibold">Venue: </span>{" "}
                  <span>Wankhede Stadium, Mumbai</span>
                </div>

                <div className="flex flex-col w-full items-end justify-center max-[1023px]:items-center  pr-7 py-8">
                  <span className="text-center mb-2">₹300 onwards</span>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-12 bg-[#f5f5f5] shadow-xl">
              <div className=" flex relative max-[1023px]:px-10 max-[1023px]:justify-center w-full ">
                <img
                  src="/kalkibannerimg.jpg"
                  className="w-[720px] h-full object-contain"
                />
                <div
                  className="absolute -bottom-7 left-10 text-white bg-red-500 px-7 py-3 max-[540px]:px-3 max-[540px]:left-24 max-[540px]:text-sm max-[540px]:py-2  rounded-md max-[1023px]:-bottom-[5] max-[1023px]:py-4 max-[1023px]:left-44 
                "
                >
                  <span className="text-2xl max-[540px]:text-base min-[540px]:mr-2">
                    21st
                  </span>{" "}
                  June, 2023
                </div>
              </div>

              <div className="details__evnts w-full mt-2 max-[1023px]:mt-2 max-[1023px]:items-center min-[540px]:pl-5 flex flex-col">
                <h1 className="evnt__title text-3xl font-medium max-[540px]:text-2xl">
                  Prabhas Movie Launch
                </h1>

                <div className="flex flex-row w-full items-center max-[1023px]:justify-center  gap-4 min-[540px]:pl-2 py-3">
                  <span className="flex items-center gap-2">
                    <MapPin size={15} /> Hyderabad
                  </span>{" "}
                  |
                  <span className="flex items-center gap-2">
                    <Trophy size={15} />
                    Sport
                  </span>
                </div>

                <div className="flex flex-row w-full items-center max-[1023px]:justify-center max-[540px]:px-2 py-1 min-[540px]:pl-2 gap-2 flex-wrap">
                  <span className="font-semibold">Venue: </span>{" "}
                  <span>Wankhede Stadium, Mumbai</span>
                </div>

                <div className="flex flex-col w-full items-end justify-center max-[1023px]:items-center  pr-7 py-8">
                  <span className="text-center mb-2">₹300 onwards</span>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Events */}

          <div className="flex flex-col max-[1024px]:w-full max-[1024px]:items-center">
            <div className="flex items-center bg-[#fbf9ff] py-5 px-10">
              <input
                type="text"
                placeholder="Search for Events.."
                className="px-4 py-2 outline-1 outline-[#f0e9ff] ring-1 ring-[#f0e9ff]"
              />
              <button className="bg-red-500 text-[#ffffff] py-3 px-4 font-bold">
                <Search size={17} />
              </button>
            </div>

            <div className="flex bg-[#fbf9ff] mt-5 px-10 flex-col items-center py-5">
              <h1 className="text-2xl font-semibold">Events Category</h1>
              <hr className="my-5 h-[1px] w-full" />
              <ul className="flex flex-col gap-4 items-start w-full px-3 pb-4 font-light">
                <li>
                  <a
                    href="#"
                    className="no-underline cursor-pointer hover:text-red-500 duration-300 transition-colors"
                  >
                    All
                  </a>
                </li>{" "}
                <hr className="my-2 h-[1px] w-full" />
                <li>
                  <a
                    href="#"
                    className="no-underline cursor-pointer hover:text-red-500 duration-300 transition-colors"
                  >
                    Celebration(1)
                  </a>
                </li>{" "}
                <hr className="my-2 h-[1px] w-full" />
                <li>
                  <a
                    href="#"
                    className="no-underline cursor-pointer hover:text-red-500 duration-300 transition-colors"
                  >
                    EDM(2)
                  </a>
                </li>{" "}
                <hr className="my-2 h-[1px] w-full" />
                <li>
                  <a
                    href="#"
                    className="no-underline cursor-pointer hover:text-red-500 duration-300 transition-colors"
                  >
                    Show(3)
                  </a>
                </li>{" "}
                <hr className="my-2 h-[1px] w-full" />
                <li>
                  <a
                    href="#"
                    className="no-underline cursor-pointer hover:text-red-500 duration-300 transition-colors"
                  >
                    Sports(4)
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex mt-5 px-10 flex-col items-center py-5 bg-[#fbf9ff]">
              <h1 className="font-semibold text-2xl">Recent Events</h1>
              <hr className="my-5 h-[1px] w-full" />

              <ul className="w-full py-3">
                <li className="flex flex-row gap-8 my-10">
                  <img src="/kantarabanner.jpg" className="w-24" />

                  <div className="flex-col flex">
                    <span className="text-base font-normal">
                      The amazing Hubble
                    </span>
                    <span className="text-sm font-light">28th Feb, 2024</span>
                  </div>
                </li>
                <li className="flex flex-row gap-8 my-10">
                  <img src="/kalkibannerimg.jpg" className="w-24" />

                  <div className="flex-col flex">
                    <span className="text-base font-normal">
                      Astronomy or Astrology...
                    </span>
                    <span className="text-sm font-light">1st May, 2024</span>
                  </div>
                </li>
                <li className="flex flex-row gap-8 my-10">
                  <img src="/kantarabanner.jpg" className="w-24" />

                  <div className="flex-col flex">
                    <span className="text-base font-normal">
                      Rave Party NCR...
                    </span>
                    <span className="text-sm font-light">1st May, 2024</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventContent;

const EventsBanner = () => {
  const scrollOnClick = () => {
    window.scrollTo({
      top: window.pageYOffset + window.innerHeight * 0.5,
      behavior: "smooth",
    });
  };

  const redirectToOrgButton = () => {
    const element = document.getElementById("event__organize__button");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Link className="relative block">
        <video
          width="100"
          height="100"
          className="w-full h-full xl:h-[85vh] object-cover blur-[3px]"
          alt="fan-club-banner"
          autoPlay
          muted
          loop
        >
          <source src={EventVideo} type="video/mp4" />
        </video>
        <div className="absolute top-3 left-0 z-10">
          <div className="bg-red-500 text-white py-1 px-3 rounded-tl-md">
            Events
          </div>
        </div>

        <div className="absolute bottom-5  right-0 z-10">
          <div className="py-1 px-2 bg-red-500 flex gap-2 items-center">
            <button className="text-white " onClick={redirectToOrgButton}>
              Organize
            </button>
            <TicketPercent size={20} className="text-white" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center">
          <motion.div className="flex   items-center text-[#fff]  opacity-2 p-3  rounded-tl-md rounded-tr-md ">
            <h2 className="lg:text-4xl  font-bold tracking-wider text-center ">
              Explore <span className="text-red-500">Events</span>
            </h2>
            <motion.div
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
              className="bg-red-500 flex justify-center items-center ml-4 rounded-md"
              onClick={scrollOnClick}
            >
              <ArrowBigDown className="" />
            </motion.div>
          </motion.div>
        </div>
      </Link>
    </>
  );
};
