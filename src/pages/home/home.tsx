import React from "react";
import Navbar from "../../components/Navbar";
import { Button } from 'reactstrap';
import { FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import styles from "./styles.module.scss";
import Card from '../../components/Card'

export default function Home() {
  return (
    <div className="App">
      <header className={styles.header}>
        <Navbar />
        <NavLink to="/">
          <h1>Walking feet</h1>
        </NavLink>
        {/* <p className={styles.intro}>
          <span className="walkingfeet">Walking feet</span> est une plateforme
          communautaire gratuite vous proposant des balades et randonnées
          partout dans le monde. Il n’est pas toujours évident de trouver des
          informations sur le net. Quoi de mieux qu’un site qui les regroupe
          pour vous!
        </p> */}
        <div className={styles.searchContainer}>
          <FormGroup>
            <input placeholder="Rechercher une randonnée" />
            <NavLink to="/hikings">
              <Button color="primary">Rechercher bien</Button>
            </NavLink>
          </FormGroup>
        </div>
      </header>

      <Row className="mt-4 m-2">
        <Col md={4}>
          <Card>
            <span className="bg-info rounded-circle mr-3 p-2"></span>
            <h2 className={styles.title}>Inspiration</h2>
            <p className={styles.informations}>
              Elargissez vos horizons en découvrant des lieux agréables ou des endroits insolites, un peu
              partout dans le monde ou à 2 pas de chez vous. Inspirez les autres utilisateurs et partagez vos randonnées.
          </p>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <span className="bg-info rounded-circle mr-3 p-2"></span>
            <h2 className={styles.title}>Personnalisation</h2>
            <p className={styles.informations}>
              Vous aimez vous balader ou vous êtes un randonneur chevronné en
            quête d’inspiration ? <br></br>Seuls, en groupe ou avec vos enfants
            ? Toute une série de critères vous aideront à trouver ce qui vous
            correspond le mieux.
          </p>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4 m-2 mb-4">
        <Col md={4}>
          <Card>
            <span className="bg-info rounded-circle mr-3 p-2"></span>
            <h2 className={styles.title}>Partage </h2>
            <p className={styles.informations}>
              Soyez acteurs de la plateforme en commentant les randonnées que vous
            aurez découvertes grâce aux autres utilisateurs. <br></br>Evaluez
            votre expérience et complétez le contenu. Invitez vos proches à
            marcher avec vous.
          </p>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <span className="bg-info rounded-circle mr-3 p-2"></span>
            <h2 className={styles.title}>Carnet de bord</h2>
            <p className={styles.informations}>
              Grâce à votre carnet de bord, créez un historique de vos balades,
              monitorez vos performances et partagez vos marches préférées.
          <br></br>Planifiez aussi vos prochaines randonnées.
        </p>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <span className="bg-info rounded-circle mr-3 p-2"></span>
            <h2 className={styles.title}>Boite à idées</h2>
            <p className={styles.informations}>
              Aidez-nous à améliorer notre plateforme. Envoyez un mail via cet
        </p>
          </Card>
        </Col>
      </Row>
      <footer className={styles.footer}>
        <Row className="mt-4 m-2">
          <Col md={3}>
            <h6>Réseaux sociaux</h6>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Linkedin</li>
              <li>Youtube</li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Termes</h6>
            <ul>
              <li>Termes</li>
              <li>Confidentialté</li>
            </ul>
          </Col>
        </Row>
      </footer>
    </div>
  );
}
