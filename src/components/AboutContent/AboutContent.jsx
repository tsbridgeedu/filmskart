import React from 'react';
import './aboutContent.css'; 

function AboutContent() {
  return (
    <div>
      <div className="story">
        <div className="container1">
          <h2>Our Story</h2>
          <p className="para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, unde
            non. Sunt beatae perspiciatis accusamus impedit quas perferendis dolor
            nostrum nisi nam, aperiam voluptatum, atque est. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Unde obcaecati dolor suscipit
            eius nostrum animi labore blanditiis, fugiat
          </p>
          <div className="image-container">
            <img src="Side Image.png" alt="Image Description" width="200" />
          </div>
        </div>
      </div>

      <div className="heading-container">
        <h2>What Our Clients Say...</h2>
      </div>

      <div className="container2">
        <div className="box">
          <img src="image.jpg" alt="" />
          <h3>Tom Cruise</h3>
          founder & chairman
          <div className="icons">
            <i className="fab fa-twitter-square"></i>
            <i className="fas fa-comment"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div className="box">
          <img src="image.jpg" alt="" />
          <h3>Tom Cruise</h3>
          founder & chairman
          <div className="icons">
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div className="box">
          <img src="image.jpg" alt="" />
          <h3>Tom Cruise</h3>
          founder & chairman
          <div className="icons">
            <i className="fab fa-twitter-square"></i>
            <i className="fas fa-comment"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
