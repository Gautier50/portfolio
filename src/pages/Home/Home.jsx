import React from "react";
import "./home.css";
import "../.././Styles/styles.css"
import profilePicture from "../../assets/img/photo_profil_détouree.png";
import background from "../../assets/img/background.jpg"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <div style={{ backgroundImage: `url(${background})` }}>
        <div className="home_profile">
          <div className="home_profile_picture">
            <img src={profilePicture} alt="" />
          </div>
          <div className="about_me">
            <h3 className="presentation_title">Bonjour, je suis Gautier Lepage !</h3>
            <p className="presentation">
              Je m'appelle Gautier et je viens de terminer une formation de
              Développeur Web chez OpenClassrooms.
            </p>
            <div id="cercle"></div>
            <button className="hire_me_button">Engagez-moi</button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
