import React from "react";
import "./home.css";
import "../.././Styles/styles.css"
import profilePicture from "../../assets/img/profile_picture.jpeg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="home_profile">
        <div className="about_me">
          <h1>Bonjour, je suis Gautier Lepage !</h1>
          <p className="presentation">
            Je m'appelle Gautier et je viens de terminer une formation de
            Développeur Web chez OpenClassrooms.
          </p>
          <div id="cercle"></div>
          <button className="hire_me_button">Engagez-moi</button>
        </div>
        <div className="home_profile_picture">
          <img src={profilePicture} alt="" />
        </div>
      </div>
      <Footer />
    </main>
  );
}
