import React, { Component, useEffect, useState } from "react";
import "./navbar.css";

import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Heart,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

import AccountButton from "../AccountButton";
import MobileSidebar from "../MobileSidebar";
import MobileSearch from "../MobileSearch";
import { Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import PropTypes from "prop-types";
const Navbar = ({cartItems}) => {

  const VITE_INVENTORY_URL = import.meta.env.VITE_INVENTORY_URL;
  const VITE_STORE_ID = import.meta.env.VITE_STORE_ID;
  const [toggleCat, setToggleCat] = useState(false);
  const [toggleAbout, setToggleAbout] = useState(false);

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  Navbar.propTypes = {
    cartItems: PropTypes.array,
  };
  useEffect(() => {
    setIsLoading(true);
    async function getCategories() {
      await axios
        .get(`${VITE_INVENTORY_URL}${VITE_STORE_ID}/categories`)
        .then((item) => {
          setCategories(item.data);
          setIsLoading(false);
        });
      }
      getCategories();
    }, []);

  
   

    
  return (
    <div className="navbar">
      <div className="navbar_box flex w-[9rem] cursor-pointer ">
        <NavLink to={"/"}>
          <img src="/logo.png" />
        </NavLink>
      </div>
      <div className="nav__elements">
        <ul className="list-none flex justify-center gap-10 ">
          <li>
            <NavLink
              className="nav-items font-semibold text-base uppercase"
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li
            className="relative flex font-semibold text-base uppercase cursor-pointer "
            onMouseEnter={() => setToggleAbout(!toggleAbout)}
            onMouseLeave={() => setToggleAbout(!toggleAbout)}
          >
            About Us
            <div
              className={`flex flex-col items-center max-w-full absolute w-36 top-6 ${
                toggleAbout ? "opacity-100" : "opacity-0 hidden"
              } transition-opacity duration-500`}
            >
              <div className="flex justify-center w-full">
                {toggleAbout ? <ChevronDown /> : <ChevronUp />}
              </div>
              <div className="flex flex-col bg-[#ffffff]  backdrop-blur-md bg-opacity-30 border-2 border-red-500 mt-2 ring-1 ring-gray-900/5 py-8 px-10 rounded-md text-[#222] gap-4">
                <NavLink to="/about">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      textAlign: "center",
                      letterSpacing: "2px",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      paddingX: 5,
                    }}
                  >
                    Our Story
                  </Typography>
                </NavLink>
                <Divider
                  sx={{
                    height: "2px",
                    bgcolor: "#ee2222",
                  }}
                />
                <NavLink to="/partners">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      textAlign: "center",
                      letterSpacing: "2px",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      paddingX: 5,
                      width: "full",
                    }}
                  >
                    Our Partners
                  </Typography>
                </NavLink>
              </div>
            </div>
            <div></div>
          </li>
          <li>
            <NavLink
              className="nav-items font-semibold text-base uppercase"
              to={"/contact"}
            >
              Contact Us
            </NavLink>
          </li>
          <li
            className="relative flex font-semibold text-base uppercase cursor-pointer "
            onMouseEnter={() => setToggleCat(!toggleCat)}
            onMouseLeave={() => setToggleCat(!toggleCat)}
          >
            Categories
            <div
              className={`flex flex-col items-center max-w-full absolute w-36 top-6 ${
                toggleCat ? "opacity-100" : "opacity-0 hidden"
              } transition-opacity duration-500`}
            >
              <div className="flex justify-center w-full">
                {toggleCat ? <ChevronDown /> : <ChevronUp />}
              </div>
              <div className="flex flex-col bg-[#ffffff]  backdrop-blur-md bg-opacity-30 border-2 border-red-500 mt-2 ring-1 ring-gray-900/5 py-8 px-14 rounded-md text-[#222] gap-4">
              {categories.map((item) => {
                return(
                  <div key={item.id}>
                    <Typography
                  variant="subtitle2"
                  key={item.id}
                  sx={{
                    textAlign: "center",
                    letterSpacing: "2px",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                  }}
                >
                  {item.name}
                </Typography>
                <Divider
                  sx={{
                    height: "2px",
                    bgcolor: "#ee2222",
                  }}
                  
                />
                  </div >
                )
              })}
              </div>
            </div>
          </li>
          <li>
            <NavLink
              className="nav-items font-semibold text-base uppercase"
              to={"/fan-club"}
            >
              Fan Club
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-items font-semibold text-base uppercase"
              to={"/event"}
            >
              Events
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex gap-4 xl:gap-5 justify-end -mr-5">
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer"
        >
          <MobileSearch className="mobile-search " />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <NavLink>
            <Heart size={22} />
          </NavLink>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
          className="relative"
        >
          <NavLink to="/cart">
            <ShoppingCart size={22} />
          </NavLink>
          <span className="absolute -top-1 -right-1 bg-red-500 w-4 h-4 rounded-lg font-medium text-white text-center text-xs justify-center flex items-center">
          {cartItems.length === 0 ? "" : cartItems.length}
          </span>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
          className="relative cursor-pointer"
        >
          <AccountButton />
        </motion.div>
      </div>

      <motion.div className="max-[1023px]:inline-block lg:hidden">
        <MobileSidebar />
      </motion.div>
    </div>
  );
};

export default Navbar;
