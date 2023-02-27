import React from "react";
import { Link } from "react-router-dom";
import "./header.css"

export default function Header() {
  return (
    <div className="portfolio_header">
      <div className="portfolio_header_nav">
        <Link to="/" className="gautier_button">
          Gautier
        </Link>
        <Link to="/" className="accueil_button">
          Accueil
        </Link>
        <Link to="/src/pages/About.jsx" className="a-propos_button">
          À propos
        </Link>
        <Link to="/src/pages/Projets.jsx" className="projets_button">
          Projets
        </Link>
        <Link to="/src/pages/Contact.jsx" className="contact_button">
          Contact
        </Link>
      </div>
    </div>
  );
}
