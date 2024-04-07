import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import FanClub from "../pages/FanClub";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Navbar from "../src/components/Navbar/navbar";
import Footer from "../src/components/Footer/footer";
import Event from "../pages/Event";

import Admin from "../pages/Admin/Admin";

export function RoutesPath() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/fan-club" element={<FanClub />}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </div>
  );
}
