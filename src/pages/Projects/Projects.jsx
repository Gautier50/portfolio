import React from "react";
import "./projects.css";

import background from "../../assets/img/mesh-background-portfolio-lglines.jpg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import ButtonEmpty from "../../components/Button/ButtonEmpty";

export default function Projects() {
  return (
    <main>
      <div>
        <Header />
      </div>

      <div
        className="background__presentation"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="entire_project">
          <h1 className="title_projects">BOOKI</h1>
          <p>Transformez une maquette en site web avec HTML & CSS</p>
          <a href="https://github.com/Gautier50/Dev-Web_P2_Booki">
          <Button sx="center" title="LIEN DU PROJET" />
          </a>
        </div>
      </div>
      <img src="" alt="" />
      <div className="project">
        <h2 className="project_description">Description du projet</h2>
        <p>
          Vous débutez votre alternance en tant que développeur web au sein de
          la start-up Booki. L’entreprise souhaite développer un site Internet
          qui permette aux usagers de trouver des hébergements et des activités
          dans la ville de leur choix. Vous êtes chargé d'intégrer l'interface
          du site avec du code HTML et CSS.
        </p>
      </div>
      <div className="tools">
        <h2>Outils utilisés</h2>
        <p>
          <div className="skills">
            <div className="skills__skill">HTML</div>
            <div className="skills__skill">CSS</div>
            <div className="skills__skill">Git</div>
            <div className="skills__skill">Github</div>
          </div>
        </p>
      </div>

      <div className="live_project">
        <h2>Voir le projet</h2>
        <a href="https://github.com/Gautier50/Dev-Web_P2_Booki">
          <Button title="LIEN DU PROJET" />
        </a>

        <a href="/">
          <ButtonEmpty title="Revenir à l'accueil" />
        </a>
      </div>
      <Footer />
    </main>
  );
}
