import React from "react";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import github_logo from "../.././assets/img/github_logo.png";
import linkedin_logo from "../.././assets/img/linkedin_logo.png";
import "./about.css";
import "../.././Styles/styles.css";

export default function About() {
  return (
    <div className="about_container">
    <Header />
      <Nav />
      <div className="link_logos">
        <div className="portfolio_footer_fig">
          <a href="https://github.com/Gautier50">
            <img src={github_logo} alt="logo github" />
            <div className="logos_legends">Github</div>
          </a>
          <a href="https://www.linkedin.com/in/gautier-lepage-971b70232/">
            <img src={linkedin_logo} alt="logo linkedin" />
            <div className="logos_legends">LinkedIn</div>
          </a>
      <Button />
        </div>
      </div>
      <Footer />
    </div>
  );
}
