import React from "react";

import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import FanClub from "../pages/FanClub";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";

const App = () => {
  // const [active, setActive] = useState("");

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/fan-club" element={<FanClub />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
