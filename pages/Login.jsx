import React from "react";
import Navbar from "../src/components/Navbar/navbar.jsx";
import Footer from "../src/components/Footer/footer.jsx";
import LoginContent from "../src/components/LoginContent/LoginContent.jsx";

const Login = () => {
  return (
    <div>
      <Navbar />
      <LoginContent />
      <Footer />
    </div>
  );
};

export default Login;
