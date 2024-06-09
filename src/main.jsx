import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { Provider } from "react-redux";
import {store } from "../redux/store.js";
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from "react-toastify";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) throw new Error("Key Missing");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ProductProvider> */}
    <ToastContainer />
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>

    </ClerkProvider>
    {/* </ProductProvider> */}
  </React.StrictMode>
);
