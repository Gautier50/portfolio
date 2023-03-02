import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import "../src/Styles/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/src/pages/Projects/Projects.jsx" element={<Projects />} />
      <Route path="/src/pages/About.jsx" element={<About />} />
    </Routes>
  </BrowserRouter>
);
