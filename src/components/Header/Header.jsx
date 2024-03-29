import React from "react";
import "./header.css";
import profilePicture from "../../assets/img/photo-profil-détourée.png";
import { useState } from "react";
import "../.././index";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="header__nav">
        <div className="profilePicture">
          <img src={profilePicture} alt="" />
        </div>
        <div className="navbar__logo-contain">Gautier Lepage</div>

        <ul className="navbar__links">
          <li className="navbar__item slideInDown-1">
            <a href="/" className="navbar__link">
              Accueil
            </a>
          </li>
          <li className="navbar__item slideInDown-2">
            <a href="/" className="navbar__link">
              A propos
            </a>
          </li>
          <li className="navbar__item slideInDown-3">
            <a href="/" className="navbar__link">
              Projets
            </a>
          </li>
          <li className="navbar__item slideInDown-4">
            <a href="/" className="navbar__link">
              Contact
            </a>
          </li>
        </ul>
        <button className="navbar__burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </div>
    </nav>
  );
}
