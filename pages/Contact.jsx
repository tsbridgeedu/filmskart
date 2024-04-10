import React from "react";
import Navbar from "../src/components/Navbar/navbar.jsx";
import Footer from "../src/components/Footer/footer.jsx";
import ContactContent from '../src/components/ContactContent/contact-content.jsx'
const Contact = () => {
  return (
    <div>
    <Navbar />
    
    <ContactContent />
    <Footer />
    </div>
  )
};

export default Contact;
