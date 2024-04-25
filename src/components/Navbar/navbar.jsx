import React, { Component, useState } from "react";
import "./navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { navBarLinks } from "../../../constants/constant";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Search, ShoppingCart } from "lucide-react";
import SearchForm from "../SearchForm";

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
        <div className="navbar_box">
          <h1 className="">Filmskart</h1>
        </div>
        <div>
          <ul
            id="nav_collapse"
            className={
              this.state.clicked ? "#nav_collapse open" : "#nav_collapse"
            }
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
        <div className="navbar_box">
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
        </div>

        
        <div className="flex gap-4 xl:gap-5 justify-end -mr-5">
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Search size={25} className="mobile-search" />
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
            <NavLink to="add-to-cart" >
              <ShoppingCart size={22} />
            </NavLink>
            <span className="absolute -top-1 -right-1 bg-red-500 w-4 h-4 rounded-lg font-medium text-white text-center text-xs justify-center flex items-center">
              5
            </span>
          </motion.div>
        </div>
        <div id="menu" onClick={this.handleClick}>
          <motion.i
          // animate={{ x: 0 }}
          transition={{ delay: 1 }}
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></motion.i>
        </div>
        {/* {this.state.isCartOpen && (
          <motion.div
            className="cart-popout"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
          >
            <p>This is the pop-out cart content.</p>
          </motion.div>
        )} */}
      </div>
    );
  }
}
export default Navbar;
