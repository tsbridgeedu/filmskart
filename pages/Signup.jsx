import React from "react";
import Navbar from "../src/components/Navbar/navbar.jsx";
import Footer from "../src/components/Footer/footer.jsx";
import { SignUp } from "@clerk/clerk-react";
const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      
      
      <SignUp />
   
      
    </div>
  );
};

export default Signup;
