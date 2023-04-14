import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";

import "../../assets/img/booki_mobile.png";
import booki from "../../assets/img/booki_desktop.png";
import ohmyfood from "../../assets/img/ohmyfood_desktop.png";
import laPanthere from "../../assets/img/laPanthere_desktop.png";
import kanap from "../../assets/img/kanap_desktop.png";
import piiquante from "../../assets/img/piiquante_desktop.png";
import kasa from "../../assets/img/kasa_desktop.png";

import Button from "../Button/Button";

export default function Cards() {
  return (
    <div className="projects_cards">
      <div className="projectPicture">
        <img src={booki} alt="" />
      </div>
      <div className="title__project">Booki</div>
      <p className="description__project">
        Transformez une maquette en site web avec HTML & CSS
      </p>
        <Link to="/Projects">
          <Button color="#facf0f" title="PLUS" />
        </Link>
      
      <div className="projectPicture">
        <img src={ohmyfood} alt="" />
      </div>

      <div className="title__project">Ohmyfood</div>
      <p className="description__project">
        Dynamisez une page web avec des animations CSS
      </p>
      <Link to="/Projects">
        <Button color="#facf0f" title="PLUS" />
      </Link>

      <div className="projectPicture">
        <img src={laPanthere} alt="" />
      </div>
      <div className="title__project">La panthère</div>
      <p className="description__project">Optimisez un site web existant</p>
      <Link to="/Projects">
        <Button color="#facf0f" title="PLUS" />
      </Link>

      <div className="projectPicture">
        <img src={kanap} alt="" />
      </div>
      <div className="title__project">Kanap</div>
      <p className="description__project">
        Construisez un site e-commerce en JavaScript
      </p>
      <Link to="/Projects">
        <Button color="#facf0f" title="PLUS" />
      </Link>

      <div className="projectPicture">
        <img src={piiquante} alt="" />
      </div>
      <div className="title__project">Piiquante</div>
      <p className="description__project">
        Construisez une API sécurisée pour une application d'avis gastronomiques
      </p>
      <Link to="/Projects">
        <Button color="#facf0f" title="PLUS" />
      </Link>

      <div className="projectPicture">
        <img src={kasa} alt="" />
      </div>
      <div className="title__project">Kasa</div>
      <p className="description__project">
        Créez une application web de location immobilière avec React
      </p>
      <Link to="/Projects">
        <Button color="#facf0f" title="PLUS" />
      </Link>
    </div>
  );
}
