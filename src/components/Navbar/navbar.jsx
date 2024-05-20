import React, { Component, useState } from "react";
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

const Navbar = () => {
  const [toggleCat, setToggleCat] = useState(false);
  const [toggleAbout, setToggleAbout] = useState(false);
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
                <NavLink to='/about'>
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
              <NavLink to='/partners'>
              <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "center",
                    letterSpacing: "2px",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    paddingX: 5,
                    width: 'full'
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
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "center",
                    letterSpacing: "2px",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                  }}                                                                        
                >
                  Men
                </Typography>
                <Divider
                  sx={{
                    height: "2px",
                    bgcolor: "#ee2222",
                  }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "center",
                    letterSpacing: "2px",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                  }}
                >
                  Women
                </Typography>
                <Divider
                  sx={{
                    height: "2px",
                    bgcolor: "#ee2222",
                  }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "center",
                    letterSpacing: "2px",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                  }}
                >
                  Teens
                </Typography>
                <Divider
                  sx={{
                    height: "2px",
                    bgcolor: "#ee2222",
                  }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "center",
                    letterSpacing: "2px",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    maxWidth: 'full',
                  }}
                  className="w-full"
                >
                  Coffee Mugs
                </Typography>
                <Divider
                  sx={{
                    height: "2px",
                    bgcolor: "#ee2222",
                  }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "center",
                    letterSpacing: "2px",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                  }}
                >
                  Under 13
                </Typography>
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
            5
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
