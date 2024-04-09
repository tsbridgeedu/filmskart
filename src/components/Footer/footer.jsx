import React from "react";
import { NavLink } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section_padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <h4>For Business</h4>
            <NavLink to={"/"}>
              <p>Employer</p>
            </NavLink>
            <NavLink to={"/"}>
              <p>Get in Touch</p>
            </NavLink>
            <NavLink to={"/"}>
              <p>Individuals</p>
            </NavLink>
          </div>

          <div className="sb__footer-links-div">
            <h4>Account</h4>
            <NavLink to={"/"}>
              <p>My Account</p>
            </NavLink>
            <NavLink to={"/"}>
              <p>Login / Register</p>
            </NavLink>
            <NavLink to={"/"}>
              <p>Cart</p>
            </NavLink>
            <NavLink to={"/"}>
              <p>Wishlist</p>
            </NavLink>
            <NavLink to={"/"}>
              <p>Shop</p>
            </NavLink>
          </div>

          <div className="sb__footer-links-div">
            <h4>Address: </h4>
            <p>VijayNagar, Downtown Area, Los Santos, Hyderabad - 511001</p>
          </div>

          <div className="sb__footer-links-div">
            <h4>Follow us on: </h4>
            <div className="socialmedia">
              <p>
                <Instagram />
              </p>
              <p>
                <Facebook />
              </p>
              <p>
                <Twitter />
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="sb__footer-below">
        <div className="sb__footer-copyright">
          <p>@{new Date().getFullYear()} TS Bridge Edu. All rights reserved</p>
        </div>
        <div className="sb__footer-below-links">
          <NavLink href="/terms">
            <div>
              <p>Terms & Conditions</p>
            </div>
          </NavLink>
          <NavLink href="/privacy-policy">
            <div>
              <p>Privacy Policy</p>
            </div>
          </NavLink>
          <NavLink href="/faq">
            <div>
              <p>FAQ's</p>
            </div>
          </NavLink>
          <NavLink href="/contact">
            <div>
              <p>Contact Us</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
