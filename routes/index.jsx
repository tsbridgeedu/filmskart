import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import FanClub from "../pages/FanClub";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Product from "../pages/Product";
import Products from "../pages/Products";
import CategoriesAdmin from "../pages/Admin/CategoriesAdmin";
import InsertProduct from "../pages/Admin/InsertProduct";
import Tags from "../pages/Admin/Tags";
import Theme from "../pages/Admin/Theme";
import UpcomingMovies from "../pages/Admin/UpcomingMovies";
import UploadBanner from "../pages/Admin/UploadBanner";
import Event from "../pages/Event";
import TermsAndConditions from '../pages/TermsAndConditions'
import PrivacyPolicy from '../pages/PrivacyPolicy'

import Dashboard from "../pages/Admin/Dashboard";

export function RoutesPath() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/fan-club" element={<FanClub />}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/terms-and-conditions" element={<TermsAndConditions />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/insert-product" element={<InsertProduct />}></Route>
        <Route path="/admin/upload-banner" element={<UploadBanner />}></Route>
        <Route
          path="/admin/categories-admin"
          element={<CategoriesAdmin />}
        ></Route>
        <Route
          path="/admin/insert-upcoming-movies"
          element={<UpcomingMovies />}
        ></Route>
        <Route path="/admin/theme" element={<Theme />}></Route>
        <Route path="/admin/tags" element={<Tags />}></Route>
      </Routes>
    </div>
  );
}
