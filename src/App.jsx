import React from "react";
import { CartProvider } from "./CartContext";
import "./App.css";
import Router from "../routes/RoutePath";
import StairTransition from "./components/animation/StairTransition";
import PageTransition from "./components/animation/PageTransition";
const App = () => {
  return (
    <>
      <StairTransition />
      <PageTransition>
        <CartProvider>
          <Router />
        </CartProvider>
      </PageTransition>
    </>
  );
};

export default App;
