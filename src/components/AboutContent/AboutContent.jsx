import React from "react";
import {
  BadgeIndianRupee,
  BaggageClaim,
  CircleCheckBig,
  Facebook,
  Headset,
  IndianRupee,
  Instagram,
  PlaneTakeoff,
  Store,
  TwitterIcon,
} from "lucide-react";

import './aboutContent.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const AboutContent = () => {
  return (
    <div className="flex h-full scrollbar ">
      <div className="flex h-full w-full flex-col">
        <div className="flex flex-row items-center justify-start gap-3   w-full min-[768px]:py-10 max-[767px]:py-8 max-[767px]:px-8 min-[768px]:px-20  h-[21px]  ">
          <span>Home</span>/
          <span className="">{window.location.pathname.slice(1)}</span>
        </div>

        <div className="flex flex-row max-[1096px]:flex-col items-center justify-center gap-4 w-full my-20 max-[768px]:my-12 ">
          <div className="flex flex-col w-[525px] max-[768px]:w-[340px] max-[475px]:px-5 max-[475px]:items-center">
            <h1 className="text-5xl font-semibold mb-10 max-[768px]:text-4xl ">
              Our Story
            </h1>
            <span className="text-start ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              numquam et, nulla nostrum molestias iure sunt delectus
              voluptatibus harum sint atque porro, eum saepe ipsum at quis
              facere temporibus explicabo? Esse adipisci expedita aspernatur
              nisi, aliquam, quisquam voluptatem pariatur officiis vitae
              repellendus quas repellat voluptatum vel laborum nesciunt
              perferendis iste suscipit quaerat explicabo nemo. Excepturi atque
              mollitia sint illo in!
            </span>
            <span className="text-start py-5 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              quos officia eius qui, quisquam consequuntur itaque sed soluta
              voluptas at nobis incidunt nisi, nam reiciendis maxime accusantium
              deleniti debitis minima.
            </span>
          </div>
          <div className="flex w-[525px] max-[768px]:w-[305px]">
            <img
              src="/about-us-1.png"
              alt="about-us-1"
              className="w-full object-contain"
            />
          </div>
        </div>

        <section className="flex my-20">
          <div className="flex flex-row flex-wrap w-full justify-center gap-20 ">
            <div className="flex flex-col w-[170px] h-[160px] items-center justify-center border border-1 border-[#e2e2e2] shadow-lg bg-red-500 hover:bg-[#ffffff] transition-colors duration-300 ease-out hover:cursor-pointer text-white hover:text-[#000000]">
              <span className="w-12 h-12 bg-[#c1c1c1] rounded-3xl flex items-center justify-center ">
                <span className="w-8 h-8 bg-[#000000] z-20 text-white flex justify-center items-center rounded-2xl">
                  <Store size={18} />
                </span>
              </span>

              <h2 className="font-bold text-xl pt-3">10.5K</h2>

              <span className="text-xs py-2 font-medium">
                Seller's active in our site
              </span>
            </div>
            <div className="flex flex-col w-[170px] h-[160px] items-center justify-center border border-1 border-[#e2e2e2] shadow-lg hover:bg-red-500 transition-colors duration-300 ease-out hover:cursor-pointer hover:text-white">
              <span className="w-12 h-12 bg-[#c1c1c1] rounded-3xl flex items-center justify-center ">
                <span className="w-8 h-8 bg-[#000000] z-20 text-white flex justify-center items-center rounded-2xl">
                  <IndianRupee size={18} />
                </span>
              </span>

              <h2 className="font-bold text-xl pt-3">33K</h2>

              <span className="text-xs py-2 font-medium">
                Monthly product sales
              </span>
            </div>
            <div className="flex flex-col w-[170px] h-[160px] items-center justify-center border border-1 border-[#e2e2e2] shadow-lg bg-red-500 hover:bg-[#ffffff] transition-colors duration-300 ease-out hover:cursor-pointer text-white hover:text-[#000000]">
              <span className="w-12 h-12 bg-[#c1c1c1] rounded-3xl flex items-center justify-center ">
                <span className="w-8 h-8 bg-[#000000] z-20 text-white flex justify-center items-center rounded-2xl">
                  <BaggageClaim size={18} />
                </span>
              </span>

              <h2 className="font-bold text-xl pt-3">45.5K</h2>

              <span className="text-xs py-2 font-medium">
                User's active in our site
              </span>
            </div>
            <div className="flex flex-col w-[170px] h-[160px] items-center justify-center border border-1 border-[#e2e2e2] hover:bg-red-500 transition-colors duration-300 ease-out hover:cursor-pointer hover:text-white shadow-lg">
              <span className="w-12 h-12 bg-[#c1c1c1] rounded-3xl flex items-center justify-center ">
                <span className="w-8 h-8 bg-[#000000] z-20 text-white flex justify-center items-center rounded-2xl">
                  <BadgeIndianRupee size={18} />
                </span>
              </span>

              <h2 className="font-bold text-xl pt-3">255.5K</h2>

              <span className="text-xs py-2 px-3 flex justify-center w-full text-center font-medium">
                Annual Gross Sales in our site
              </span>
            </div>
          </div>
        </section>

        <section className="flex flex-col my-16">
          <div className="flex flex-row justify-center py-16 mb-2 w-full">
            <h1 className="text-5xl font-semibold max-[450px]:font-medium">Our Team</h1>
          </div>

          <div className="flex flex-row flex-wrap w-full h-[500px]">
            <Swiper
              centeredSlides
              loop
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              // navigation={true}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                
              }}
              cssMode={true}
              // slidesPerView={'auto'}
              className="w-[90vw] h-full teamSwiper"
            >
              <SwiperSlide className="w-[320px] h-[450px]">
                <div className="flex flex-col border border-1 w-[320px] h-[450px] ">
                  <div className="w-full bg-[#f5f5f5] flex justify-center pt-6">
                    <img
                      src="/team-img-1.png"
                      alt="teamImage"
                      className="w-40 self-center "
                    />
                  </div>
                  <div className="flex flex-col items-start  px-3 py-4 mt-7">
                    <h2 className="font-medium text-2xl">Mudavath Chandar</h2>
                    <span className="text-sm py-2 ">Founder & Chairman</span>
                    <span className="flex items-center text-base gap-4 py-2 ">
                      <Instagram
                        size={18}
                        className="hover:text-red-500 duration-300 transition-all ease-linear hover:scale-110 cursor-pointer"
                      />
                      <Facebook
                        size={18}
                        className="hover:text-red-500 duration-300 transition-all ease-linear hover:scale-110 cursor-pointer"
                      />
                      <TwitterIcon
                        size={18}
                        className="hover:text-red-500 duration-300 transition-all ease-linear hover:scale-110 cursor-pointer"
                      />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-[320px] h-[450px]">
                <div className="flex flex-col border border-1 w-[320px] h-[450px] ">
                  <div className="w-full bg-[#f5f5f5] flex justify-center pt-6">
                    <img
                      src="/team-img-1.png"
                      alt="teamImage"
                      className="w-40 self-center "
                    />
                  </div>
                  <div className="flex flex-col items-start  px-3 py-4 mt-7">
                    <h2 className="font-medium text-2xl">Mass Gajendra</h2>
                    <span className="text-sm py-2 ">Co-Founder</span>
                    <span className="flex items-center text-base gap-4 py-2 ">
                      <Instagram
                        size={18}
                        className="hover:text-red-500 duration-300 transition-all ease-linear hover:scale-110 cursor-pointer"
                      />
                      <Facebook
                        size={18}
                        className="hover:text-red-500 duration-300 transition-all ease-linear hover:scale-110 cursor-pointer"
                      />
                      <TwitterIcon
                        size={18}
                        className="hover:text-red-500 duration-300 transition-all ease-linear hover:scale-110 cursor-pointer"
                      />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-[320px] h-[450px]">
                <div className="flex flex-col border border-1 w-[320px] h-[450px] ">
                  <div className="w-full bg-[#f5f5f5] flex justify-center pt-6">
                    <img
                      src="/team-img-1.png"
                      alt="teamImage"
                      className="w-40 self-center "
                    />
                  </div>
                  <div className="flex flex-col items-start  px-3 py-4 mt-7">
                    <h2 className="font-medium text-2xl">Guru Charan</h2>
                    <span className="text-sm py-2 ">HR</span>
                    <span className="flex items-center text-base gap-4 py-2 ">
                      <Instagram
                        size={18}
                        className="hover:text-red-500 duration-300 transition-all ease-linear hover:scale-110 cursor-pointer"
                      />
                      <Facebook
                        size={18}
                        className="hover:text-red-500 duration-300 transition-all ease-linear hover:scale-110 cursor-pointer"
                      />
                      <TwitterIcon
                        size={18}
                        className="hover:text-red-500 duration-300 transition-all ease-linear hover:scale-110 cursor-pointer"
                      />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>


        <section className="flex my-20">
          <div className="flex flex-row flex-wrap w-full justify-center gap-20 ">
            <div className="flex flex-col w-[280px] h-[200px] items-center justify-center  shadow-lg bg-red-500 hover:bg-[#ffffff] transition-colors duration-300 ease-out hover:cursor-pointer text-white hover:text-[#000000]">
              <span className="w-20 h-20 bg-[#c1c1c1] rounded-full flex items-center justify-center ">
                <span className="w-14 h-14 bg-[#000000] z-20 text-white flex justify-center items-center rounded-full ">
                <PlaneTakeoff size={25} />
                </span>
              </span>

              <h2 className="font-semibold text-center text-xl pt-3">Free and Fast Delivery <sup>*</sup></h2>

              <span className="text-xs py-4 font-medium">
                
               * Free delivery for order above Rs. 500/-
              </span>
            </div>
            <div className="flex flex-col w-[280px] h-[200px] items-center justify-center  shadow-lg hover:bg-red-500 transition-colors duration-300 ease-out hover:cursor-pointer hover:text-white">
              <span className="w-20 h-20 bg-[#c1c1c1] rounded-full flex items-center justify-center ">
                <span className="w-14 h-14 bg-[#000000] z-20 text-white flex justify-center items-center rounded-full">
                <Headset size={25}/>
                </span>
              </span>

              <h2 className="font-semibold text-xl pt-3">24/7 Customer Service</h2>

              <span className="text-xs py-4 font-medium">
                Friendly customer support 24/7
              </span>
            </div>
            <div className="flex flex-col w-[280px] h-[200px] items-center justify-center  shadow-lg bg-red-500 hover:bg-[#ffffff] transition-colors duration-300 ease-out hover:cursor-pointer text-white hover:text-[#000000]">
              <span className="w-20 h-20 bg-[#c1c1c1] rounded-full flex items-center justify-center ">
                <span className="w-14 h-14 bg-[#000000] z-20 text-white flex justify-center items-center rounded-full">
                <CircleCheckBig size={25}/>
                </span>
              </span>

              <h2 className="font-bold text-xl pt-3">Money Back Gurantee</h2>

              <span className="text-xs py-4 font-medium">
                Settlements on time
              </span>
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutContent;
