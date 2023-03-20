import React from "react";
import "../Footer/footer.css";
import "../.././Styles/styles.css";
import GithubLogo from "../../assets/img/github_logo.png";
import LinkedinLogo from "../../assets/img/linkedin_logo.png";

export default function footer() {
  return (
    <div className="portfolio__footer">
      <h2 className="main-footer">SOCIAL</h2>
      <div className="social__logos">
        <a href="https://github.com/Gautier50">
          <img src={GithubLogo} alt="github logo" />
        </a>
        <a href="https://www.linkedin.com/in/gautier-lepage-971b70232/">
          <img src={LinkedinLogo} alt="linkedin logo" />
        </a>
      </div>

      <div className="portfolio_footer_text">
        Designed by Lepage Gautier, all rights reserved ©
      </div>
    </div>
  );
}
