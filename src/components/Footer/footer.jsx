import React from "react";
import { NavLink } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  FacebookIcon,
  TwitterIcon,
  Linkedin,
} from "lucide-react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="footer_data_box sticky ">
        <div>
          <div className="footer_data_inner-box">
            <h1>Filmskart</h1>
            <NavLink>
              <h2>Subscribe</h2>
            </NavLink>
            <NavLink>
              <p>Get 10% off on your first order</p>
            </NavLink>
            <input placeholder="Enter your email"></input>
          </div>
        </div>

        <div>
          <div className="footer_data_inner-box">
            <h2>Support</h2>

            <NavLink to={"/contact"}>
              <p>Contact Us</p>
            </NavLink>
            <NavLink to={"/returnpolicy"}>
              <p>Return Policy</p>
            </NavLink>
            <NavLink to={"/cancellation-policy"}>
              <p>Cancellation Policy</p>
            </NavLink>
          </div>
        </div>
        <div>
          <div className="footer_data_inner-box">
            <h2>Account</h2>
            <NavLink to={"/profile"}>
              <p>My Account</p>
            </NavLink>
            <NavLink to={"/login"}>
              <p>Login</p>
            </NavLink>
            <NavLink to={"/cart"}>
              <p>Cart</p>
            </NavLink>
            <NavLink to={"/wishlist"}>
              <p>Wishlist</p>
            </NavLink>
          </div>
        </div>
        <div>
          <div className="footer_data_inner-box">
            <h2>Quick Link</h2>
            <NavLink to={"/privacy-policy"}>
              <p>Privacy Policy</p>
            </NavLink>
            <NavLink to={"/terms-and-conditions"}>
              <p>Terms Of Use</p>
            </NavLink>
            <NavLink to={"/faq"}>
              <p>FAQ</p>
            </NavLink>
            <NavLink to={"/contact"}>
              <p>Contact</p>
            </NavLink>
          </div>
        </div>

        <div>
          <div className="footer_data_inner-box">
            <h2>Download App</h2>
            <div className="footer_data_photos">
              <img
                src="qr-code.jpeg"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="footer_data_store-imgs">
                <img
                  id="image1"
                  src="/appstore.jpeg"
                  className="w-32  pb-4 pl-3 object-contain"
                />
                <img
                  id="image2"
                  src="googleplay.jpeg"
                  className="w-32 pb-4 pl-3 object-contain"
                />
              </div>
            </div>
            <div className="footer_data_icons">
              <FacebookIcon className="cursor-pointer hover:scale-110 hover:ease-in-out duration-300 transition-all" />
              <TwitterIcon className="cursor-pointer hover:scale-110 hover:ease-in-out duration-300 transition-all" />
              <Instagram className="cursor-pointer hover:scale-110 hover:ease-in-out duration-300 transition-all" />
              <Linkedin className="cursor-pointer hover:scale-110 hover:ease-in-out duration-300 transition-all" />
            </div>
          </div>
        </div>
      </div>
      <hr style={{ height: "3px", color: "white" }} />
      <div className="footer_copyright_box">
        <p className="cursor-pointer hover:text-white text-sm tracking-wide">
          <NavLink to="https://tsbridgeedu.in">
            @ Copyright Startapodero Ventures. All right reserved
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Footer;
