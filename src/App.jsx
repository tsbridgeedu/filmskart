import React from "react";

import "./App.css";
import Router from "../routes/routes";
import StairTransition from "./components/animation/StairTransition";
import PageTransition from "./components/animation/PageTransition";
const App = () => {
  
  return (
    <>
      <StairTransition />
      <PageTransition>
        <Router />
      </PageTransition>
    </>
  );
};

export default App;
