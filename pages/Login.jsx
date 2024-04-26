import React from "react";
import Navbar from "../src/components/Navbar/navbar.jsx";
import Footer from "../src/components/Footer/footer.jsx";
// import LoginContent from "../src/components/LoginContent/LoginContent.jsx";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      
      
      <SignIn />
   
      
    </div>
  );
};

export default Login;
