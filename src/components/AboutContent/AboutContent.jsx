import React from "react";
import { Link } from "lucide-react";
import {
  BadgeIndianRupee,
  BaggageClaim,
  CircleCheckBig,
  Facebook,
  Headset,
  IndianRupee,
  Instagram,
  Linkedin,
  PlaneTakeoff,
  Store,
  TwitterIcon,
} from "lucide-react";

import "./aboutContent.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const AboutContent = () => {
  return (
    <div className="flex h-full scrollbar ">
      <div className="flex h-full w-full flex-col">
       {/* route */}
        <div className="flex flex-row items-center justify-start gap-3   w-full min-[768px]:py-10 max-[767px]:py-8 max-[767px]:px-8 min-[768px]:px-20  h-[21px]  ">
          <span>Home</span>/
          <span className="">{window.location.pathname.slice(1)}</span>
        </div>
{/* our story */}
        <div className="flex flex-row max-[1096px]:flex-col items-center justify-center gap-4 w-full my-20 max-[768px]:my-12 ">
          <div className="flex flex-col w-[525px] max-[768px]:w-[340px] max-[475px]:px-5 max-[475px]:items-center">
            <h1 className="text-5xl font-semibold mb-10 max-[768px]:text-4xl ">
              Our Story
            </h1>
            <span className="text-start ">
              At <strong>Filmskart</strong>, we bring the magic of the movies to
              your wardrobe. We specialize in creating unique and high-quality
              costumes inspired by your favorite films, with a primary focus on
              designing custom t-shirts. Whether you're a die-hard fan or just
              looking to add a touch of cinematic flair to your style, we've got
              you covered.
            </span>
            <span className="text-start py-5 ">
              At <strong>Filmskart</strong>, our mission is to make movie magic
              accessible to everyone. We believe that wearing a piece of your
              favorite film shouldn't be limited to special occasions or
              premieres - it should be a part of your everyday life. By offering
              custom-designed t-shirts inspired by the latest movie releases, we
              aim to bring joy, creativity, and self-expression to movie lovers
              around the world.
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


        <div className="flex flex-row-reverse max-[1096px]:flex-col items-center justify-center gap-4 w-full my-20 max-[768px]:my-12 ">
          <div className="flex flex-col w-[525px] max-[768px]:w-[340px] max-[475px]:px-5 max-[475px]:items-center">
            <h1 className="text-5xl font-semibold mb-10 max-[768px]:text-4xl ">
            What We Offer

            </h1>
            <span className="text-start ">
              

              <strong>Unique Designs: </strong> Our team of talented designers creates original and eye-catching designs inspired by 
              the latest movie releases. From iconic quotes to memorable characters, our t-shirts capture the essence 
              of your favorite films in style.

            </span>
            <span className="text-start ">
              

              <strong>High-Quality Materials:  </strong> We believe in quality craftsmanship. 
              That's why all our t-shirts are made from premium materials, ensuring comfort, durability, and a perfect fit.


            </span>
            <span className="text-start ">
              

              <strong>Home Delivery: </strong> Sit back and relax while we bring the magic to your doorstep. With our convenient home delivery service, you can enjoy your
               favorite movie-inspired t-shirts without ever leaving the comfort of your home

            </span>
            <span className="text-start ">
              

              <strong>Theatre Delivery: </strong> Want to make a statement at the next movie premiere or midnight screening? Choose our theatre delivery option, and we'll have your custom 
              t-shirt waiting for you at the theatre, so you can step into the spotlight in style.

            </span>
   
          </div>
          <div className="flex w-[525px] max-[768px]:w-[305px]  lg:mr-10  lg:mt-0 mt-10">
            <img
              src="/wer.jpg"
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
            <h1 className="text-5xl font-semibold max-[450px]:font-medium">
              Our Team
            </h1>
          </div>

          <Swiper
  pagination={{ clickable: true }}
  navigation={true}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  spaceBetween={150}
  scrollbar={{ draggable: true }}
  modules={[Autoplay, Pagination, Navigation]}
  breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 30 },
    768: { slidesPerView: 2, spaceBetween: 30 },
    1024: { slidesPerView: 2, spaceBetween: 30 },
    1440: { slidesPerView: 2, spaceBetween: 30 },
  }}
  className="mySwiper flex justify-center items-center h-[500px] w-[750px]  "
>
  <SwiperSlide className="w-[320px] h-[450px] flex flex-col border border-1 mx-4 ">
    <div className="w-full h-1/2 bg-[#f5f5f5] flex justify-center pt-6">
      <img
        src="/team-img1.jpg"
        alt="teamImage"
        className="h-full"
      />
    </div>
    <div className="flex flex-col items-start px-3 py-4 mt-7 ">
      <h2 className="font-medium text-2xl">Mudavath Chandar</h2>
      <span className="text-sm py-2">Founder & Chairman</span>
      <span className="flex items-center text-base gap-4 py-2">
        <a href="https://www.linkedin.com/in/mudavath-chandar-29062b23b">
          <Linkedin
            size={18}
            className="hover:text-red-500 duration-300 transition-all ease-linear hover:scale-110 cursor-pointer"
          />
        </a>
        <a href="https://www.instagram.com/tyson_chandu_333?igsh=MXZzejkzNTY3cG9jcA==">
          <Instagram
            size={18}
            className="hover:text-red-500 duration-300 transition-all ease-linear hover:scale-110 cursor-pointer"
          />
        </a>
        <a href="https://x.com/Tysonchandu4?t=1SPCltt8eDWKAXXz-M4cgw&s=09">
          <TwitterIcon
            size={18}
            className="hover:text-red-500 duration-300 transition-all ease-linear hover:scale-110 cursor-pointer"
          />
        </a>
      </span>
    </div>
  </SwiperSlide>
  <SwiperSlide className="w-[320px] h-[450px] flex flex-col border border-1 mx-4">
    <div className="w-full h-1/2 bg-[#f5f5f5] flex justify-center pt-6">
      <img
        src="/team-img2.jpg"
        alt="teamImage"
        className="w-40 self-center"
      />
    </div>
    <div className="flex flex-col items-start px-3 py-4 mt-7">
      <h2 className="font-medium text-2xl">Karthik T.V.V</h2>
      <span className="text-sm py-2">Co-Founder</span>
      <span className="flex items-center text-base gap-4 py-2">
        <a href="https://www.linkedin.com/in/karthik-tvv-84146a149?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <Linkedin
            size={18}
            className="hover:text-red-500 duration-300 transition-all ease-linear hover:scale-110 cursor-pointer"
          />
        </a>
        <Instagram
          size={18}
          className="hover:text-red-500 duration-300 transition-all ease-linear hover:scale-110 cursor-pointer"
        />
        <TwitterIcon
          size={18}
          className="hover:text-red-500 duration-300 transition-all ease-linear hover:scale-110 cursor-pointer"
        />
      </span>
    </div>
  </SwiperSlide>
</Swiper>


        
        </section>

        <section className="flex my-20">
          <div className="flex flex-row flex-wrap w-full justify-center gap-20 ">
            <div className="flex flex-col w-[280px] h-[200px] items-center justify-center  shadow-lg bg-red-500 hover:bg-[#ffffff] transition-colors duration-300 ease-out hover:cursor-pointer text-white hover:text-[#000000]">
              <span className="w-20 h-20 bg-[#c1c1c1] rounded-full flex items-center justify-center ">
                <span className="w-14 h-14 bg-[#000000] z-20 text-white flex justify-center items-center rounded-full ">
                  <PlaneTakeoff size={25} />
                </span>
              </span>

              <h2 className="font-semibold text-center text-xl pt-3">
                Free and Fast Delivery <sup>*</sup>
              </h2>

              <span className="text-xs py-4 font-medium">
                * Free delivery for order above Rs. 500/-
              </span>
            </div>
            <div className="flex flex-col w-[280px] h-[200px] items-center justify-center  shadow-lg hover:bg-red-500 transition-colors duration-300 ease-out hover:cursor-pointer hover:text-white">
              <span className="w-20 h-20 bg-[#c1c1c1] rounded-full flex items-center justify-center ">
                <span className="w-14 h-14 bg-[#000000] z-20 text-white flex justify-center items-center rounded-full">
                  <Headset size={25} />
                </span>
              </span>

              <h2 className="font-semibold text-xl pt-3">
                24/7 Customer Service
              </h2>

              <span className="text-xs py-4 font-medium">
                Friendly customer support 24/7
              </span>
            </div>
            <div className="flex flex-col w-[280px] h-[200px] items-center justify-center  shadow-lg bg-red-500 hover:bg-[#ffffff] transition-colors duration-300 ease-out hover:cursor-pointer text-white hover:text-[#000000]">
              <span className="w-20 h-20 bg-[#c1c1c1] rounded-full flex items-center justify-center ">
                <span className="w-14 h-14 bg-[#000000] z-20 text-white flex justify-center items-center rounded-full">
                  <CircleCheckBig size={25} />
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
