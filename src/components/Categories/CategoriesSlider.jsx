import React, { useState, useEffect, useRef } from "react";
import './App.css'
import { IoIosPhonePortrait } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { IoCamera } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa6";
import { SiYoutubegaming } from "react-icons/si";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            style={{ ...style, display: "block", background: "#f5f5f5", borderRadius: "100%", width: "46px", height: "46px", top: "50%", }}

        >< IoIosArrowBack className='icon' style={{ position: "absolute", left: "20%", top: "20%" }} size={28} color='black' />
        </div>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#f5f5f5", borderRadius: "100%", width: "46px", height: "46px", top: "50%", }}
            onClick={onClick}

        ><  IoIosArrowForward style={{ position: "absolute", left: "20%", top: "20%" }} size={28} color='black' />
        </div>
    );
}

const data = [
    {
        name: 'Phones',
        icon: <IoIosPhonePortrait />,
    },

    {
        name: 'Computers',
        icon: <RiComputerLine />,

    },

    {
        name: 'Smartwatch',
        icon: <BsSmartwatch />,

    },

    {
        name: 'Camera',
        icon: <IoCamera />,

    },

    {
        name: 'Headphones',
        icon: <FaHeadphones />,
    },

    {
        name: 'Gaming',
        icon: <SiYoutubegaming />,

    },
]

const CategoriesSlider = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: "linear",
        slidesToShow: 5,
        slidesToScroll: 5,
        pauseOnHover: true,
        // arrows:false,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        },
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className='w-full h-auto m-auto p-[40px]'>
            <div className='container mt-20'>
                <div className="flex justify-start items-center">
                    <div className="bg-red-500 w-2 h-10 rounded-md"> </div>
                    <div className="text-red-500 font-semibold lg:text-2xl ml-3 tracking-wider">
                        Categories
                    </div>
                </div>
                <div className="product-breaker flex ml-36 mr-36 mt-2 mb-5">
                    <hr className="flex w-full bg-red-200 h-[2px] rounded-lg" />
                </div>
                <div>
                    <div className="sub-head">Browse by category </div>

                    <Slider {...settings} className="cat-slider">
                        {data.map((item, index) => {
                            return (
                                <div key={index} className='item border-[1px] border-solid rounded border-[#0000004D]'>
                                    <div className="info flex justify-center items-center flex-col p-[10px] gap-[10px]">
                                        <div className="item-icon">
                                            {item.icon}
                                        </div>
                                        <div className="item-name">
                                            {item.name}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>

            </div>
        </div>
    );
}