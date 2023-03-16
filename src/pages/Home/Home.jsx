import React from "react";
import Button from "../../components/Button/Button";
import "./home.css";
import "../.././Styles/styles.css";

import background from "../../assets/img/mesh-background-portfolio-lglines.jpg";
import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <div style={{ backgroundImage: `url(${background})` }}>
        <Header /> 
        <h1 className="primary-title">
          Bonjour, je suis Gautier Lepage
        </h1>
            <p className="presentation">
              Bonjour, Je m'appelle Gautier Lepage et je viens de terminer une formation de
              Développeur Web chez OpenClassrooms.
            </p>
            <Button/>
      </div>
      <div className="projects_cards_portfolio">
        <Cards />
        <Footer />
      </div>
    </main>
  );
}
