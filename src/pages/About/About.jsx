import React from "react";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import github_logo from "../.././assets/img/github_logo.png";
import linkedin_logo from "../.././assets/img/linkedin_logo.png";

export default function About() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="cv">
        <button>Mon CV</button>
      </div>
      <div className="link_logos">
        <div className="portfolio_footer_fig">
          <a href="https://github.com/Gautier50">
            <img src={github_logo} alt="logo github" />
            Github
          </a>
          <a href="https://www.linkedin.com/in/gautier-lepage-971b70232/">
            <img src={linkedin_logo} alt="logo linkedin" />
            LinkedIn
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
