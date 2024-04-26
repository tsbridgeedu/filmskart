import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
