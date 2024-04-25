import React from "react";
import { NavLink } from "react-router-dom";
import { Instagram, Facebook, Twitter, FacebookIcon, TwitterIcon, Linkedin } from "lucide-react";
import './footer.css'

const Footer = () => {
  return (
    // <div className="footer">
    //   <div className="sb__footer section_padding">
    //     <div className="sb__footer-links">
    //       <div className="sb__footer-links-div">
    //         <h4>For Business</h4>
    //         <hr/>
    //         <NavLink to={"/"}>
    //           <p>Employer</p>
    //         </NavLink>
    //         <NavLink to={"/"}>
    //           <p>Get in Touch</p>
    //         </NavLink>
    //         <NavLink to={"/"}>
    //           <p>Individuals</p>
    //         </NavLink>
    //       </div>

    //       <div className="sb__footer-links-div">
    //         <h4>Account</h4>
    //         <hr/>
    //         <NavLink to={"/"}>
    //           <p>My Account</p>
    //         </NavLink>
    //         <NavLink to={"/"}>
    //           <p>Login / Register</p>
    //         </NavLink>
    //         <NavLink to={"/"}>
    //           <p>Cart</p>
    //         </NavLink>
    //         <NavLink to={"/"}>
    //           <p>Wishlist</p>
    //         </NavLink>
    //         <NavLink to={"/"}>
    //           <p>Shop</p>
    //         </NavLink>
    //       </div>

    //       <div className="sb__footer-links-div">
    //         <h4>Address</h4> 
    //         <hr/>
    //         <p style={{lineHeight:"1.5"}}>VijayNagar, Downtown Area, Los Santos, Hyderabad - 511001</p>
    //       </div>

    //       <div className="sb__footer-links-div">
    //         <h4>Follow us on </h4>
    //         <hr/>
    //         <div className="socialmedia">   
    //           <p>
    //             <Instagram /> 
    //           </p>
    //           <p>
    //             <Facebook />
    //           </p>
    //           <p>
    //             <Twitter />
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <hr />
    //   <div className="sb__footer-below">
    //     <div className="sb__footer-copyright">
    //       <p className="font-bold tracking-widest text-base">@{new Date().getFullYear()} <a href="https://www.tsbridgeedu.in" className="no-underline ">TS Bridge Edu. All rights reserved</a></p>
    //     </div>
    //     <div className="sb__footer-below-links">
    //       <NavLink to="/terms-and-conditions">
    //         <div>
    //           <p>Terms & Conditions</p>
    //         </div>
    //       </NavLink>
    //       <NavLink to="/privacy-policy">
    //         <div>
    //           <p>Privacy Policy</p>
    //         </div>
    //       </NavLink>
    //       <NavLink to="/faq">
    //         <div>
    //           <p>FAQ's</p>
    //         </div>
    //       </Nk>
    //       <NavLink to="/contact">
    //         <div>
    //           <p>Contact Us</p>
    //         </div>
    //       </NavLink>
    //     </div>
    //   </div>
    // </div>

    <div className="footer">
      <div className="footer_data_box">
          <div>
            <div className="footer_data_inner-box">
              <h1>Celebrity Store</h1>
              <NavLink><h2 >Subscribe</h2></NavLink>
              <NavLink><p>Get 10% off on your first order</p></NavLink>
              <input placeholder="Enter your email"></input>
            </div>
          </div>

          <div>
            <div className="footer_data_inner-box">
              <h2>Support</h2>
              <NavLink><p>My Account</p></NavLink>
              <NavLink><p>Login/Register</p></NavLink>
              <NavLink><p>Cart</p></NavLink>
              <NavLink><p>Wishlist</p></NavLink>
              <NavLink><p>Shop</p></NavLink>
            </div>
          </div>
          <div>
            <div className="footer_data_inner-box">
              <h2>Account</h2>
              <NavLink><p>My Account</p></NavLink>
              <NavLink><p>Login/Register</p></NavLink>
              <NavLink><p>Cart</p></NavLink>
              <NavLink><p>Wishlist</p></NavLink>
              <NavLink><p>Shop</p></NavLink> 
            </div>
          </div>
          <div>
            <div className="footer_data_inner-box">
              <h2>Quick Link</h2>
              <NavLink><p>Privacy Policy</p></NavLink>
              <NavLink><p>Terms Of Use</p></NavLink>
              <NavLink><p>FAQ</p></NavLink>
              <NavLink><p>Contact</p></NavLink>
            </div>
          </div>

          <div>
            <div className="footer_data_inner-box">
                <h2>Download App</h2>
                  <div className="footer_data_photos">
                    <img src="qr-code.jpeg" style={{width:"100px", height:"100px"}}/>
                    <div className="footer_data_store-imgs">
                      <img id="image1" src="https://s3-alpha-sig.figma.com/img/a61d/4c71/10b18ab55a1e1a07ebf54a46ebb07284?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fgPJPDOkjOzTLWKR7wszqR0ssOwr3~CZ4YH2bz7g4qIOXB0MF3H1VhvNREaYkkOZilLfzTyiNpyldGbWB2Dy2wOeu3h7Wr49I8CrxYycwsWE1io-EYsnRXN0ZS1yoLHs3B2NrRBgulsj7O9h~IPFFGv33iVw6ZUbysJXp6UmNXfjfy8DJSZ2~d59UVn0BPwhHOz1KuXaiG~zqVLXgommnLIhzZWQ04NrK9GY2zYoMfrybCFtk6Y6e3vJtwgFYKs-t4w-V-uJvxmNopP~4KtvW3qYkg1UWDiZnzBAvquwQ6~kk-JgVm7r2a2GUYy4ZpEpRxzT5GUi8iX0tVtZfdtGTw__" style={{width:"103px",height:"62px", }}/>
                      <img id="image2" src="https://s3-alpha-sig.figma.com/img/3893/2d5a/ccb54c528f9bcf326ca48ea29bd6d890?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AQLXVPK1Ix9GXVm7URurjHq58dSTWPxrm88s8NHat87d-ino76xn6ibbKjYaaYWsw4nnp39xCMfYMN01WiPtGZdJz408zvMSUalBDY1XaqV8PBOrmIGzW6f3K5C8Z4lNcqifMpkbYXivYh-x01IPnBuTp1q8tERa2PrCMp-7ikalzEmH~TrUZraztT~WnEHt8iBOrUkKrm1mYPm3DExW3cI-C2ekkF0WiR-lGN8jtTYIBBvXkMVFZfUobuLgfL8ohzM0La1jN6TPWnHyvhr73r~Ozc9rTmTe1GJ9XdYRNdZCxcPJ-SottEmqpC~OBSvFSkrjojLiDUeb-cTvvXF1gw__" style={{width:"103px",height:"65px", }} />
                    </div>
                  </div>
                  <div className="footer_data_icons">
                      <FacebookIcon/>
                      <TwitterIcon/>
                      <Instagram/>
                      <Linkedin/>
                  </div> 
              </div>
          </div>        
      </div>
      <hr style={{height:"3px", color:"white"}}/>
      <div className="footer_copyright_box">
        <p>@ Copyright Rimel 2024. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
