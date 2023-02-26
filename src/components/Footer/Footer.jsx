import React from "react";
import "../Footer/footer.css";
import github_logo from "../.././assets/img/github_logo.png";
import linkedin_logo from "../.././assets/img/linkedin_logo.png";

export default function footer() {
  return (
    <div className="portfolio_footer">
      <div className="portfolio_footer_fig">
        <a href="https://github.com/Gautier50">
          <img src={github_logo} alt="logo github" />
        </a>
        <a href="https://www.linkedin.com/in/gautier-lepage-971b70232/">
          <img src={linkedin_logo} alt="logo linkedin" />
        </a>
        <div className="portfolio_footer_text">
          Designed by Lepage Gautier, all rights reserved ©
        </div>
      </div>
    </div>
  );
}
