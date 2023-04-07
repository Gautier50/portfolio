import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Projects from "./pages/Projects/Projects";

import "../src/Styles/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About.jsx" element={<About />} />
      <Route path="*" element={<Error />} />
      <Route path="/Projects.jsx" element={<Projects />} />
    </Routes>
  </BrowserRouter>
);
