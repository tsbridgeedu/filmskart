import React from "react";
import Navbar from "../src/components/Navbar/navbar.jsx";
import ProductContent from "../src/components/ProductContent/ProductContent.jsx";
import Footer from "../src/components/Footer/footer.jsx";
const Product = (props) => {
  return (
    <div>
     
      <ProductContent {...props} />
    
    </div>
  );
};

export default Product;
