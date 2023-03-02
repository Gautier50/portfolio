import React from "react";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Cards from "../../components/Cards/Cards";
import "../.././Styles/styles.css";

export default function Projects() {
  return (
    <main>
      <div>
        <Header />
        <Nav />
        <Cards />
        <Footer />
      </div>
    </main>
  );
}
