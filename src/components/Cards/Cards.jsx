import React from "react";
import "./cards.css";

export default function Cards() {
  return (
    <div className="projects_cards">
      <div className="booki_project">
        Booki
        <details>
          Kanap est une marque de canapés qui vend ses produits depuis sa
          boutique exclusivement. Aujourd’hui, celle-ci souhaiterait avoir une
          plateforme de e-commerce en plus de sa boutique physique pour vendre
          ses produits sur Internet.
          <summary>Contexte</summary>
        </details>
        <details>
          Unifier les travaux déjà réalisés par les développeurs front-end et
          back-end, en intégrant dynamiquement les éléments de l'API dans les
          différentes pages web avec JavaScript. L'utilisateur doit pouvoir
          visualiser l'ensemble des produits disponibles, ajouter un ou
          plusieurs article dans un panier, modifier ou supprimer son panier et
          enfin, passer commande.
        </details>
        <summary>Objectifs</summary>
      </div>
      <div className="ohmyfood_project">Ohmyfood</div>
      <div className="la-panthere_project">La Panthère</div>
      <div className="kanap_project">Kanap</div>
      <div className="piiquante_project">Piiquante</div>
      <div className="kasa_project">Kasa</div>
    </div>
  );
}
