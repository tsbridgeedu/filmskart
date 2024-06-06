import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <div>
      <Navbar {...props} />
      <hr className="h-[5px]" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout ;
