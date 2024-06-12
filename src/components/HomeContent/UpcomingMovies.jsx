import { Puff, ThreeDots } from "react-loader-spinner";
import Slider from "react-slick";
import axios from "axios";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";

const UpcomingMovies = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);
  const [showMoreMovies, setShowMoreMovies] = useState(false);
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_NODE_URL;

  const handleMouseEnter = (index) => {
    setFlippedCardIndex(index);
  };

  const handleMouseLeave = () => {
    setFlippedCardIndex(null);
  };

  useEffect(() => {
    setLoading(true);
    async function getMovieData() {
      await new Promise((resolve) => setTimeout(resolve, 2800));
      await axios.get(`${BASE_URL}/movie-data`).then((item) => {
        setMovieList(item.data);
        setLoading(false);
      });
    }
    getMovieData();
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
    rtl: false,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="flex flex-col w-full mt-20 px-4 md:px-20">
      <div className="w-full h-full flex flex-row items-center gap-2">
        <div className="w-2 rounded-md h-10 bg-red-500"></div>
        <span className="text-lg text-red-500 font-semibold flex flex-row justify-center items-center">
          Factory Built
        </span>
        <span className="flex flex-row justify-center items-center">
          <img src="/factory.gif" className="w-7" />
        </span>
      </div>
      <div className="flex flex-row mt-1 px-2 gap-5 md:gap-20 items-center">
        <span className="md:text-4xl text-xl flex flex-row mt-3 font-inter font-semibold">
          Upcoming Movies
        </span>
      </div>

      <div className="my-10 container flex flex-col w-full h-full border-y-2">
        {loading ? (
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
              Spawning Upcoming Movies{" "}
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
            <div className="hidden md:block w-full">
              <Slider
                {...settings}
                className="w-full upcomov-slider flex flex-row shadow-3xl"
              >
                {movieList.slice(0, 5).map((item, index) => {
                  const isFlipped = index === flippedCardIndex;
                  return (
                    <div
                      key={item.id}
                      className="flex flex-col w-[320px] h-80 border rounded-sm cursor-pointer hover:scale-110 duration-300 ease-out hover:drop-shadow-xl hover:shadow-3xl upcmvs__crd__cntr"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <motion.div
                        className="w-full h-full frt_prdct_flsh relative upcmvs__crd"
                        initial={false}
                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                        transition={{
                          duration: 0.6,
                          animationDirection: "normal",
                        }}
                      >
                        <div className="w-full h-full flex justify-center bg-transparent backdrop-blur-md rounded-md absolute upcmvs__frt">
                          <img
                            src={item.img}
                            alt="product-image"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-full h-full flex flex-col bg-white  upcmvs__bck">
                          <h1 className="px-4 font-bold py-4 font-inter text-lg">
                            {item.title}
                          </h1>
                          <span className="flex px-4 py-4 font-inter text-base">
                            {item.description}
                          </span>
                          <span className="flex-row flex py-2 px-5 justify-between">
                            <span className="text-sm font-bold font-inter gap-2">
                              {item.rating}/10
                            </span>
                            <button
                  className="bg-red-500 text-white text-sm py-1 px-3 rounded-md mt-2"
                >
                  <a href={`/movie/${item.id}`} className="block text-center w-full h-full">
                    Know more
                  </a>
                </button>
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            {/* REVISe CODE for mobile 🎯🎯*/}
            <div className="container mx-auto">
              {/* Mobile view */}
              <div className="block md:hidden w-full">
                <div className="flex flex-wrap justify-center">
                  {movieList
                    .slice(0, showMoreMovies ? 8 : 4)
                    .map((item, index) => {
                      const isFlipped = index === flippedCardIndex;
                      return (
                        <div
                          key={item.id}
                          className="flex flex-col w-40 h-56  m-2 cursor-pointer hover:scale-105 duration-300 ease-out hover:drop-shadow-xl hover:shadow-3xl"
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <motion.div
                            className="w-full h-full frt_prdct_flsh relative upcmvs__crd"
                            initial={false}
                            animate={{ rotateY: isFlipped ? 180 : 0 }}
                            transition={{
                              duration: 0.6,
                              animationDirection: "normal",
                            }}
                          >
                          {/* removed  h-full w-full*/}
                            <div className="w-40 h-56 flex justify-center bg-transparent backdrop-blur-md rounded-md  upcmvs__frt">
                              <img
                                src={item.img}
                                alt="product-image"
                                className="w-full h-full object-cover"
                                style={{ borderRadius: "11px" }} //adding the border radius
                              />
                            </div>
                            {/* Back side of the card */}
                            <div
                              className="w-40 h-56  flex flex-col bg-white absolute upcmvs__bck p-2 rounded-md"
                              style={{ borderRadius: "11px" }} //added the border-radius
                            >
                              <h1 className="px-4 font-bold py-1 font-inter text-lg text-black ">
                                {item.title}
                              </h1>
                              <span className="flex px-2 py-1 font-inter text-sm text-black font-semibold overflow-hidden">
                                {item.description}
                              </span>
                              <span className="flex-row flex py-1 px-2 justify-between items-center">
                                <span className="text-sm font-bold font-inter gap-2 text-black">
                                  {item.rating}/10
                                </span>
                                {/* <button
                                  className="bg-red-500 text-white text-sm py-1 px-2 rounded-md"
                                  style={{ width: "70px", height: "30px" }} // Fix button size
                                >
                                  <a
                                    href={`/movie/${item.id}`}
                                    className="block text-center w-full h-full"
                                  >
                                    Know more
                                  </a>
                                </button> */}
                                <button
                        className="bg-red-500 text-white text-sm py-1 px-2 rounded-md mt-2"
                        style={{ width: '70px', height: '30px' }} // Fix button size for mobile
                      >
                        <a href={`/movie/${item.id}`} className="block text-center w-full h-full">
                          Know more
                        </a>
                      </button>
                              </span>
                            </div>
                          </motion.div>
                        </div>
                      );
                    })}
                </div>
                {!showMoreMovies && (
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded-md mt-4 mx-auto block"
                    onClick={() => setShowMoreMovies(true)}
                  >
                    View More
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UpcomingMovies;
