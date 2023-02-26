import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Card from "./components/Card/Card";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/src/pages/About.jsx" element={<About />} />
      <Route path="/src/pages/Contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
