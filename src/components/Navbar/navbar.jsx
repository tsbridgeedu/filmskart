import React, { Component, useState } from "react";
import "./navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { navBarLinks } from "../../../constants/constant";
import { NavLink } from "react-router-dom";

import {motion} from 'framer-motion'
import { Heart, Search, ShoppingCart } from "lucide-react";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return <div className="navbar">
      <div className="navbar_box">
        <h1>Celebrity Store</h1>
      </div>
      <div className="navbar_box">
        <NavLink>Home</NavLink>
        <NavLink>Contact</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Sign Up</NavLink>
      </div>
      <div className="navbar_box">
        <div className="navbar_search_div">
          <input type="text" placeholder="What are you looking for?"></input>
          <div style={{width:"24px"}}><Search/></div>
        </div>
        <NavLink><Heart/></NavLink>
        <NavLink><ShoppingCart/></NavLink>
      </div>
    </div>;
  }
}
export default Navbar;
