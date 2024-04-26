import React, { Component, useState } from "react";
import "./navbar.css";

import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Search, ShoppingCart, User } from "lucide-react";

import AccountButton from "../AccountButton";
import MobileSidebar from "../MobileSidebar";
import MobileSearch from "../MobileSearch";




class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  state = { isCartOpen: false };

  toggleCart = () => {
    console.log('clicked')
    this.setState((prevState) => ({
      isCartOpen: !prevState.isCartOpen,
    }));
  };

  render() {

    

    return (
      <div className="navbar">
        <div className="navbar_box flex w-[9rem] cursor-pointer ">
          {/* <h1 className="">Filmskart</h1> */}

          <NavLink to={'/'}>
          <img src='/logo.png' />
          </NavLink>
        </div>
        <div className="nav__elements">
          <ul
            className="list-none flex justify-center gap-10 "
            
          >
            <li>
              <NavLink className="nav-items font-semibold text-base uppercase" to={'/'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-items font-semibold text-base uppercase " to={'/about'}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-items font-semibold text-base uppercase" to={'/contact'}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-items font-semibold text-base uppercase" to={'/fan-club'}>
                Fan Club
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-items font-semibold text-base uppercase" to={'/event'}>
                Events
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div className="navbar_box">
          <div className="navbar_search_div ">
            <input type="text" placeholder="What are you looking for? " className=""></input>
            <motion.div 
             whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            style={{ width: "24px" }} className="cursor-pointer">
              <Search size={20}  />
            </motion.div>
          </div>
        </div> */}

        
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
              <Heart size={22}/>
            </NavLink>
          </motion.div>

          <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
          className="relative">
            <NavLink to="/cart" >
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
          className="relative cursor-pointer">
            {/* <User size={22} /> */}
{/* 
            <Avatar
  alt=""
  src={<User size={22} />}
  sx={{ width: 24, height: 24 }}
/> */}

<AccountButton  />


          </motion.div>
        </div>
        {/* <div id="menu" onClick={this.handleClick}>
          <motion.i
          // animate={{ x: 0 }}
          transition={{ delay: 1 }}
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></motion.i>
        </div> */}

        <motion.div className="md:hidden lg:hidden">
          <MobileSidebar />
        </motion.div>
        
      </div>
    );
  }
}
export default Navbar;



