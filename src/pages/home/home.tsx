import React from 'react';
import Navbar from "../../components/Navbar";
import "./styles.scss"

export default function Home() {

    return (
      <div className="App">
      <header className="header">
        <Navbar />
        <h1>Walking feet</h1>
        <p className="intro">
          <span className="walkingfeet">Walking feet</span> est une plateforme communautaire gratuite vous proposant
          des balades et randonnées partout dans le monde. Il n’est pas toujours évident de trouver des informations sur le net. Quoi de mieux qu’un
          site qui les regroupe pour vous!
        </p>
        <div className="search-container">
          <input placeholder="Rechercher une randonnée" />
         
        </div>
      </header>
      <div>
        
        <h2>Découverte</h2>
        <p className="informations">
          Découvrez des lieux agréables ou des endroits insolites, un peu
          partout dans le monde ou à 2 pas de chez vous.
        </p>
        <h2>Inspiration</h2>
        <p className="informations">
          Elargissez vos horizons et inspirez les autres utilisateurs. Grâce à 
           <span className="walkingfeet"> Walking Feet</span>, partagez vos randonnées et découvrez de nouveaux
          parcours.
        </p>
        <h2>Personnalisation</h2>
        <p className="informations">
          Vous aimez vous balader ou vous êtes un randonneur chevronné en quête
          d’inspiration ? <br></br>Seuls, en groupe ou avec vos enfants ? Toute une série
          de critères vous aideront à trouver ce qui vous correspond le mieux.
        </p>
        <h2>Échange </h2>
        <p className="informations">
          Soyez acteurs de la plateforme en commentant les randonnées que vous
          aurez découvertes grâce aux autres utilisateurs. <br></br>Evaluez votre
          expérience et complétez le contenu. Invitez vos proches à marcher avec
          vous.
        </p>
        <h2>Carnet de bord</h2>
        <p className="informations">
          Grâce à votre carnet de bord, créez un historique de vos balades,
          monitorez vos performances et partagez vos marches préférées.
          <br></br>Planifiez aussi vos prochaines randonnées.
        </p>
        <h3>Boite à idées</h3>
        <p className="informations">
          Aidez-nous à améliorer notre plateforme. 
          Envoyez un mail via cet
        </p>
      </div>
    </div>
    )
}