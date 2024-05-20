import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import '../../index.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        background: "#f5f5f5",
        borderRadius: "100%",
        width: "45px",
        height: "45px",
        top: "50%",
        zIndex:"1",
      }}
    >
      <IoIosArrowBack
        className="bg-red-500 text-white rounded-full hover:cursor-pointer hover:scale-110 duration-300 ease-out"
        style={{ position: "absolute", left: "20%", top: "20%" }}
        size={28}
        color=""
      />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#f5f5f5",
        borderRadius: "100%",
        width: "45px",
        height: "45px",
        top: "50%",
      }}
      onClick={onClick}
    >
      <IoIosArrowForward
        style={{ position: "absolute", left: "20%", top: "20%" }}
        className="bg-red-500 rounded-full text-white hover:cursor-pointer hover:scale-110 duration-300 ease-out"
        size={28}
        color=""
      />
    </div>
  );
}

const data = [
  {
    name: "Partner-1",
    img: "partner-1.jpg",
  },
  {
    name: "Partner-2",
    img: "partner-2.jpg",
  },
  {
    name: "Partner-3",
    img: "partner-3.jpg",
  },

  {
    name: "Partner-4",
    img: "partner-4.jpg",
  },

  {
    name: "Partner-5",
    img: "partner-5.jpg",
  },
  {
    name: "Partner-6",
    img: "partner-6.jpg",
  },
];

const PartnersContent = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
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
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='flex flex-col justify-between items-center gap-16 my-10'>
          <div className='flex flex-col justify-center items-center py-14 relative gap-10 w-full'>
            <div className="absolute w-full top-0 bottom-0 -z-10">
                  <img
                    src="partners-banner-img.jpg"
                    className="object-cover w-full h-full blur-[2px]"
                  />
            </div>
            <h2 className='text-center text-[#fff] text-4xl font-medium tracking-wide'>
              Elevating Cinema Together: Meet Our Valued Collaborators
            </h2>
            <div className="flex justify-start items-center">
              <div className="bg-red-500 w-2 h-10 rounded-md"></div>
              <div className="fan-club-heading text-[#fff] font-semibold lg:text-4xl md:text-2xl sm:text-xl ml-3 tracking-wider">
                Our Patners
              </div>
            </div>
          </div>

        <div className='w-full h-full px-12'>
          <Slider {...settings} className="partner-slider w-full h-full">
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-center w-full h-full p-[10px] relative hover:scale-110 border-[1px] border-solid rounded border-[#0000004D] hover:cursor-pointer duration-300 ease-out"
                  >
                    <div className="flex flex-col w-full h-full justify-center items-center gap-4">
                      <img src={item.img} alt="partners" className='w-full h-full' />
                      <div className="mb-8 ml-4 mr-4 px-5 py-5 text-center absolute w-3/4 top-auto bottom-0 bg-white border-none rounded-md">
                        <p>{item.name}</p>
                      </div>
                    </div>
                  </div>
                  );
                })}
            </Slider>
        </div>

        <div className='flex items-center justify-around w-full gap-4 px-8 mb-5'>
          <p className='text-md font-medium tracking-wide'>Ready to Elevate Fan Experiences? Partner with Filmskart and create Cinematic Magic Together!</p>
          <button className='px-8 py-3 rounded-md text-2xl font-medium bg-gradient-to-r from-[#f75700] to-[#f90000] hover:bg-gradient-to-l text-white transition-transform duration-[0.2s] ease-out hover:scale-105'>Join as Partner</button>
        </div>
      </div>      
    </>
  )
};

export default PartnersContent;