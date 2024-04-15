import React, { Component, useState } from "react";
import "./navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { navBarLinks } from "../../../constants/constant";
import { NavLink } from "react-router-dom";

import {motion} from 'framer-motion'

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div>
        <header>
          {/* <div className="menu">
          <RxHamburgerMenu />
        </div> */}
          <ul className="menu-options">
            <li>
              <a href="#">Women's Fashion</a>
            </li>
            <li>
              <a href="#">Men's fashion</a>
            </li>
            <li>
              <a href="#">Electronics</a>
            </li>
            <li>
              <a href="#">Home & Electronics</a>
            </li>
          </ul>
          <div className="logo_container">
            <a href="#">
              <img className="store_logo" src="/logo.jpeg" alt="myntra logo" />
            </a>
          </div>

          <nav
            id="navbar"
            className={this.state.clicked ? "#navbar active" : "#navbar"}
          >
            {navBarLinks.map((Element) => {
              return (
                <div key={Element.link} className="activeHandler ">
                  <NavLink
                    className="navElements "
                    key={Element.link}
                    to={Element.link}
                  >
                    {Element.name}
                  </NavLink>
                </div>
              );
            })}
          </nav>

          <div className="search_bar">
            <span className="material-symbols-outlined search_icon">
              <FaSearch />
            </span>
            <input
              className="search_input"
              placeholder="Search for products..."
            />
          </div>

         <div className="right-elements">
         <div className="action_bar">
            <div className="action_container">
              <a href="#" className="material-symbols-outlined action_icon">
                <FaRegHeart />
              </a>
              {/* <span className="action_name">Wish</span> */}
            </div>

            <div className="action_container">
              <a href="#" className="material-symbols-outlined action_icon">
                <FiShoppingCart />
              </a>
              {/* <span className="action_name">Cart</span> */}
            </div>
          </div>

          <div className="login_button">
            <button className="log">
              <a href="/login">Login</a>
            </button>
          </div>
         </div>

         
          <div id="iconbar" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </header>
        <hr />
      </div>
    );
  }
}
export default Navbar;
