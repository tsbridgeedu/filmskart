import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { Provider } from "react-redux";
import {store, persistor } from "../redux/store/index.js";
import { PersistGate } from 'redux-persist/integration/react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) throw new Error("Key Missing");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ProductProvider> */}
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>

    </ClerkProvider>
    {/* </ProductProvider> */}
  </React.StrictMode>
);
