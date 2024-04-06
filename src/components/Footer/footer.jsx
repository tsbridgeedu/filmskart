import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="footer_container">
        <div className="footer_column">
          <h3>Exclusive</h3>
          <a href="#">Subscribe</a>
          <a href="#">Get 10% off Your first order</a>
          <input className="placeholder" placeholder="Enter your email " />
        </div>
        <div className="footer_column">
          <h3>Support</h3>
          <a href="#">
            111 Bijoy sarani,Dhaka <br />
            DH 1515,Bangladesh.
          </a>
          <a href="#">exclusive@gmail.com</a>
          <a href="#">+880015-88888-9999</a>
        </div>

        <div className="footer_column">
          <h3>Account</h3>
          <a href="#">My Account</a>
          <a href="#">Login / Register</a>
          <a href="#">Cart</a>
          <a href="#">Wishlist</a>
          <a href="#">Shop</a>
        </div>

        <div className="footer_column">
          <h3>Quick Link</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms Of Use</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer_column">
          <h3>Download App</h3>
          <a href="#">save $3 with App New User Only</a>
          <div className="images">
            <img className="barcode" src="/barcode.jpeg" alt="bar" />
            <div className="stors">
              <img className="stor" src="/googleplay.jpeg" alt="google" />
              <img className="stor" src="/appstore.jpeg" alt="app" />
            </div>
          </div>
          <div className="icon">
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        @ Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
