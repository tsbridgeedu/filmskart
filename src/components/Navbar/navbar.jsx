import React, { Component, useState } from "react";
import "./navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { navBarLinks } from "../../../constants/constant";
import {Link, NavLink } from "react-router-dom";

import {motion} from 'framer-motion'
import { Heart, Search, ShoppingCart } from "lucide-react";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
    <div className="navbar">
      <div className="navbar_box">
        <h1>Celebrity Store</h1>
      </div>
      <div >
        <ul id="nav_collapse" className={this.state.clicked?"#nav_collapse active":"#nav_collapse"}>
          <li><NavLink className="nav-items">Home</NavLink></li>
          <li><NavLink className="nav-items">Contact</NavLink></li>
          <li><NavLink className="nav-items">About</NavLink></li>
          <li><NavLink className="nav-items">Sign Up</NavLink></li>
        </ul>
      </div>
      <div className="navbar_box">
        <div className="navbar_search_div">
          <input type="text" placeholder="What are you looking for?"></input>
          <div style={{width:"24px"}}><Search/></div>
        </div>
        <NavLink><Heart/></NavLink>
        <NavLink><ShoppingCart/></NavLink>
      </div >
      <div id="menu" onClick={this.handleClick}>
        <i className={this.state.clicked?'fas fa-times':'fas fa-bars'}></i>
      </div>
    </div>
    )
  }
}
export default Navbar;
