import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <hr className="h-[5px]" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
