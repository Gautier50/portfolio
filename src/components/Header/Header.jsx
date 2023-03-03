import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
import "../.././index"

export default function Header() {
  return (
    <div className="portfolio_header">
      <div className="portfolio_header_nav">
        <Link to="/" className="gautier_button">
          <h1 className="header_title">Gautier Lepage</h1>
        </Link>
        <div className="navlink_header">
          <Link to="/" className="accueil_button">
            Accueil
          </Link>
          <Link to="/src/pages/About.jsx" className="a-propos_button">
            À propos
          </Link>
          <Link
            to="/src/pages/Projects/Projects.jsx"
            className="projects_button"
          >
            Projets
          </Link>
          <a
            href="mailto:gautier.lep@live.fr"
            className="header_links_link_contact"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
