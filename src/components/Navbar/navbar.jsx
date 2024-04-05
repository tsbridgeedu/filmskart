import React from "react";
import "./navbar.css";
// import { IonIcon } from "@ionic/react";
import { logoIonic } from "ionicons/icons";
const Navbar = () => {
  return (
    <div>
      <header>
        <div class="menu">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <ul class="menu-options">
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
        <div class="logo_container">
          <a href="#">
            {" "}
            <img class="store_logo" src="/logo.svg" alt="myntra logo" />
          </a>
        </div>

        <nav class="nav_bar">
          <a href="./index.php">Home</a>
          <a href="./about.php">About</a>
          <a href="contact.php">Contact Us</a>
          <a href="event.php">Events</a>
          <a href="fan_club.php">Fan Clubs</a>
        </nav>

        <div class="search_bar">
          <span class="material-symbols-outlined search_icon"> search </span>
          <input
            class="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div></div>

        <div class="action_bar">
          <div class="action_container">
            <ion-icon name="person-outline"></ion-icon>
            <a href="./profile.php">
              <span class="action_name">Profile</span>
            </a>
          </div>
          <div class="action_container">
            <a
              href="./wishlist.php"
              class="material-symbols-outlined action_icon"
            >
              {" "}
              favorite
            </a>
            <a href="./wishlist.php">
              {" "}
              <span class="action_name">Wishlist</span>
            </a>
          </div>

          <div class="action_container">
            <a href="./cart_details.php" class="material-symbols-outlined">
              shopping_cart
            </a>
            <a href="./cart_details.php">
              {" "}
              <span class="action_name">Cart</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
