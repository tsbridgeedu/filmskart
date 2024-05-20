import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BannerContent = ({ content }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Calculate navbar height on component mount
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      const height = navbar.offsetHeight;
      setNavbarHeight(height);
    }
  }, []);

  return (
    <Link to={content.link} key={content.id} className="relative block">
      <img
        className="w-full h-full xl:h-[85vh] object-contain"
        src={content.imageUrl}
        alt="Banner"
      />

      <div className="absolute top-3 left-0 z-10">
        <div className="bg-red-500 text-white py-1 px-3 rounded-tl-md">
          Filmskart
        </div>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
        style={{ paddingTop: `${navbarHeight}px` }}
      >
        <div className="flex flex-col items-center text-white">
          <h2 className="text-4xl font-bold">{content.label}</h2>
          <p className="text-lg">{content.description}</p>
          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-700"
          >
            Explore Now
          </motion.button>
        </div>
      </div>
    </Link>
  );
};

export default BannerContent;
