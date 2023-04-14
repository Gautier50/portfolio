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
    <main className="main-container">
      <div className="presentation">
        <div
          className="background__presentation"
          style={{ backgroundImage: `url(${background})` }}
        >
          <Header />
          <h1 className="primary-title">Bonjour, je suis Gautier Lepage</h1>
          <p className="text__presentation">
            Bonjour, Je m'appelle Gautier Lepage et je viens de terminer une
            formation de Développeur Web chez OpenClassrooms.
          </p>
          <a href="./#projects">
            <Button sx="center" title="PROJETS" />
          </a>
        </div>
      </div>
      <section id="about-me">
        <span className="about-me__title">À propos de moi</span>
        <p className="about-me_infos">
          Vous trouverez ici plus d'informations sur moi, ce que je fais et mes
          compétences actuelles principalement en termes de programmation et de
          technologie.
        </p>
        <h3 className="other-about-me__title">Apprendre à me connaître !</h3>
        <p className="other-about-me">
          Je suis un développeur Web frontend qui construit le front-end des
          sites Web et des applications Web qui mène au succès du produit
          global. Découvrez quelques-unes de mes réalisations dans la rubrique
          Projets. J'aime aussi partager du contenu lié à ce que j'ai appris au
          fil des ans dans le développement Web afin qu'il puisse aider d'autres
          personnes de la communauté de développement. N'hésitez pas à vous
          connecter ou à me suivre sur mon Linkedin où je publie du contenu
          utile lié au développement et à la programmation Web Je suis ouvert
          aux opportunités d'emploi où je peux contribuer, apprendre et grandir.
          Si vous avez une bonne opportunité qui correspond à mes compétences et
          à mon expérience, n'hésitez pas à me contacter.
        </p>

        <a href="mailto:gautier.lep@live.fr">
          <Button color="#facf0f" title="CONTACT" />
        </a>

        <h3 className="skills__title">Technologies</h3>
        <div className="skills">
          <div className="skills__skill">HTML</div>
          <div className="skills__skill">CSS</div>
          <div className="skills__skill">Javascript</div>
          <div className="skills__skill">React</div>
          <div className="skills__skill">SASS</div>
          <div className="skills__skill">Git</div>
          <div className="skills__skill">Github</div>
          <div className="skills__skill">Responsive Design</div>
          <div className="skills__skill">SEO</div>
          <div className="skills__skill">Node.Js</div>
          <div className="skills__skill">Express</div>
          <div className="skills__skill">Mongo Db</div>
        </div>
      </section>

      <section id="projects">
        <div className="projects_cards_portfolio">
          <span className="projects__title">Projets</span>
          <p className="projects__description">
            Vous trouverez ici quelques-uns des projets personnels mais
            également, ceux que j'ai dû réaliser lors de mon cursus de
            formation.
          </p>
          <Cards />
        </div>
      </section>
      <Footer />
    </main>
  );
}
