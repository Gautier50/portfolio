import React from "react";
import "./cards.css";
import "../../assets/img/booki_mobile.png";
import bookiProjectPicture from "../../assets/img/Laptop_booki_desktop.png";
import omyfoodProjectPicture from "../../assets/img/Laptop_ohmyfood_desktop.png";
import kanapProjectPicture from "../../assets/img/Laptop_kanap_desktop.png";
import Button from "../Button/Button";

export default function Cards() {
  return (
    <div className="projects_cards">
      <div className="projectPicture">
        <img src={bookiProjectPicture} alt="" onClick />
      </div>
      <div className="title__project">Booki</div>
      <p className="description__project">
        Transformez une maquette en site web avec HTML & CSS
      </p>
      <Button color="#facf0f" title="PLUS" />
      <div className="projectPicture">
        <img src={omyfoodProjectPicture} alt="" />
      </div>
      <div className="title__project">Ohmyfood</div>
      <p className="description__project">
        Dynamisez une page web avec des animations CSS
      </p>
      <Button color="#facf0f" title="PLUS" />
      <div className="title__project">La panthere</div>
      <p className="description__project">Optimisez un site web existant</p>
      <Button color="#facf0f" title="PLUS" />
      <div className="projectPicture">
        <img src={kanapProjectPicture} alt="" />
      </div>
      <div className="title__project">Kanap</div>
      <p className="description__project">
        Construisez un site e-commerce en JavaScript
      </p>
      <Button color="#facf0f" title="PLUS" />
      <div className="title__project">Piiquante</div>
      <p className="description__project">
        Construisez une API sécurisée pour une application d'avis gastronomiques
      </p>
      <Button color="#facf0f" title="PLUS" />
      <div className="title__project">Kasa</div>
      <p className="description__project">
        Créez une application web de location immobilière avec React
      </p>
      <Button color="#facf0f" title="PLUS" />
    </div>
  );
}
