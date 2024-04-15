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
            <hr/>
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
            <hr/>
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
            <h4>Address</h4> 
            <hr/>
            <p style={{lineHeight:"1.5"}}>VijayNagar, Downtown Area, Los Santos, Hyderabad - 511001</p>
          </div>

          <div className="sb__footer-links-div">
            <h4>Follow us on </h4>
            <hr/>
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
          <p className="font-bold tracking-widest text-base">@{new Date().getFullYear()} <a href="https://www.tsbridgeedu.in" className="no-underline ">TS Bridge Edu. All rights reserved</a></p>
        </div>
        <div className="sb__footer-below-links">
          <NavLink to="/terms-and-conditions">
            <div>
              <p>Terms & Conditions</p>
            </div>
          </NavLink>
          <NavLink to="/privacy-policy">
            <div>
              <p>Privacy Policy</p>
            </div>
          </NavLink>
          <NavLink to="/faq">
            <div>
              <p>FAQ's</p>
            </div>
          </NavLink>
          <NavLink to="/contact">
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
