import React from "react";
import "./navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="menu">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
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
            <img className="store_logo" src="/logo.svg" alt="myntra logo" />
          </a>
        </div>

        <nav className="nav_bar">
          <a href="/">Home</a>
          <a href="./about.php">About</a>
          <a href="/contact-us">Contact Us</a>
          {/* <a href="event.php">Events</a> */}
          <a href="fan_club.php">Fan Clubs</a>
        </nav>

        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">
            <FaSearch />
          </span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>

        <div>
          <a href="#">
            <button className="log">Login</button>
          </a>
        </div>

        <div className="action_bar">
          <div className="action_container">
            <a href="#" class="material-symbols-outlined action_icon">
              <FaRegHeart />
            </a>
            <span className="action_name">Wishlist</span>
          </div>

          <div className="action_container">
            <a href="#" class="material-symbols-outlined action_icon">
              <FiShoppingCart />
            </a>
            <span className="action_name">Cart</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
