import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import FanClub from "../pages/FanClub";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Movie from "../pages/Movie";
import Partners from "../pages/Partners";
import AddtoCart from "../pages/AddtoCart";
import Checkout from "../pages/Checkout";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Layout from "../src/layout/Layout";
import Account from "../pages/Account";
import UserSettings from "../pages/UserSettings";
import EventCreation from "../pages/EventCreation";
import EventContent from "../src/components/EventContent/EventContent";
import MovieDesc from "../src/components/MovieDesc/MovieDesc";
import Faq from "../src/components/Faq";
import ReturnPolicy from "../src/components/AccountContent/ReturnPolicy";
import CancellationPolicy from "../src/components/cancellation-policy/CancellationPolicy";
import AccountEdit from "../src/components/AccountContent/AccountEdit";
import AddressEdit from "../src/components/AccountContent/AddressEdit";
import WishlistList from "../src/components/Wishlist/WishlistList";


const Routers = (props) => {
  return (
    <Layout {...props}>
      <Routes>
        <Route index element={<Home {...props} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/fan-club" element={<FanClub />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<Product {...props} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/returnpolicy" element={<ReturnPolicy />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy/>}/>
        <Route path="/partners" element={<Partners />} />
        <Route path="/cart" element={<AddtoCart {...props} />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/user-profile" element={<UserSettings />} />
        <Route path="/profile" element={<Account />}>
          <Route index element={<AccountEdit />} />
          <Route path="address" element={<AddressEdit />} />
          <Route path="wishlist" element={<WishlistList />} />
        </Route>
        <Route path="/event-creation" element={<EventCreation />} />
        <Route path="/event" element={<EventContent />} />
        <Route path="/movie/:id" element={<MovieDesc />} />
      </Routes>
    </Layout>
  );
};

export default Routers;
