import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navigation">
      <ul>
        <NavLink>
          <li>Accueil</li>
        </NavLink>
        <NavLink>
          <li>Contact</li>
        </NavLink>
        <NavLink to="/about">
          <li>À propos</li>
        </NavLink>
      </ul>
    </div>
  );
}
