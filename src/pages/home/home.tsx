import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import citySlice, {
  getCitiesAction,
  getCitiesData
} from '../../ducks/city';
import Navbar from "../../components/Navbar";
import { Button } from "reactstrap";
import { FormGroup, Label, Input, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import { Icity } from '../../types';
import Card from "../../components/Card";

export default function Home() {

  const cities = useSelector(getCitiesData);

  const dispatch = useDispatch();
  const [city, setCity] = useState<string>('');

  const getCities = (event: any) => {
    setCity(event.currentTarget.value);
    dispatch(getCitiesAction(event.currentTarget.value));
  }

  const resetCities = () => {
    setCity('');
    dispatch(citySlice.actions.cleanCities());
  }

  useEffect(() => {
    console.log(cities)
  }, [city]);

  return (
    <div className="App">
      <header className={styles.header}>
        <Navbar />
        <NavLink to="/">
          <h1>Walkin' Feet</h1>
        </NavLink>
        <div className={styles.searchContainer}>
          <FormGroup>
            <input className={styles.formcadre} placeholder="Quelle ville ?" value={city} onChange={getCities} onBlur={resetCities}/>
            <NavLink to="/hikings">
              <Button className={styles.headerButton}>C'est parti</Button>
            </NavLink>
          </FormGroup>
          {
            cities && cities.length > 0 ?
            <ul className={styles.cities}>
            {
              cities.map((city: Icity) => <li key={city._id}>
                <span>{city.name}</span> 
                <span className={styles.country}>{city.country}</span>
              </li>)
            }
          </ul> : null 
          }
        </div>

      </header>

      <Row className="mt-4 m-2">
        <Col md={4}>
          <div className={styles.flexCenter}>
            <span className={styles.icone}>
              <svg
                className="bi bi-star"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                />
              </svg>
            </span>
            <h2 className={styles.title}>Inspiration</h2>
            <p className={styles.informations}>
              Que vous soyez amateur de balades ou randonneur chevronné,
              <b> laissez-vous inspirer </b> par le contenu de notre communauté.
              <b> Elargissez vos horizons </b> en découvrant des nouveaux lieux
              un peu partout dans le monde.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.flexCenter}>
            <span className={styles.icone}>
              <svg
                className="bi bi-book"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.214 1.072C4.813.752 6.916.71 8.354 2.146A.5.5 0 0 1 8.5 2.5v11a.5.5 0 0 1-.854.354c-.843-.844-2.115-1.059-3.47-.92-1.344.14-2.66.617-3.452 1.013A.5.5 0 0 1 0 13.5v-11a.5.5 0 0 1 .276-.447L.5 2.5l-.224-.447.002-.001.004-.002.013-.006a5.017 5.017 0 0 1 .22-.103 12.958 12.958 0 0 1 2.7-.869zM1 2.82v9.908c.846-.343 1.944-.672 3.074-.788 1.143-.118 2.387-.023 3.426.56V2.718c-1.063-.929-2.631-.956-4.09-.664A11.958 11.958 0 0 0 1 2.82z"
                />
                <path
                  fillRule="evenodd"
                  d="M12.786 1.072C11.188.752 9.084.71 7.646 2.146A.5.5 0 0 0 7.5 2.5v11a.5.5 0 0 0 .854.354c.843-.844 2.115-1.059 3.47-.92 1.344.14 2.66.617 3.452 1.013A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.276-.447L15.5 2.5l.224-.447-.002-.001-.004-.002-.013-.006-.047-.023a12.582 12.582 0 0 0-.799-.34 12.96 12.96 0 0 0-2.073-.609zM15 2.82v9.908c-.846-.343-1.944-.672-3.074-.788-1.143-.118-2.387-.023-3.426.56V2.718c1.063-.929 2.631-.956 4.09-.664A11.956 11.956 0 0 1 15 2.82z"
                />
              </svg>
            </span>
            <h2 className={styles.title}>Carnet de bord</h2>
            <p className={styles.informations}>
              Créez un <b> historique de vos balades </b>. Grâce à votre carnet
              de bord,
              <b> monitorez vos performances </b> et partagez vos marches
              préférées. Planifiez aussi vos prochaines randonnées.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.flexCenter}>
            <span className={styles.icone}>
              <svg
                className="bi bi-reply"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9.502 5.013a.144.144 0 0 0-.202.134V6.3a.5.5 0 0 1-.5.5c-.667 0-2.013.005-3.3.822-.984.624-1.99 1.76-2.595 3.876C3.925 10.515 5.09 9.982 6.11 9.7a8.741 8.741 0 0 1 1.921-.306 7.403 7.403 0 0 1 .798.008h.013l.005.001h.001L8.8 9.9l.05-.498a.5.5 0 0 1 .45.498v1.153c0 .108.11.176.202.134l3.984-2.933a.494.494 0 0 1 .042-.028.147.147 0 0 0 0-.252.494.494 0 0 1-.042-.028L9.502 5.013zM8.3 10.386a7.745 7.745 0 0 0-1.923.277c-1.326.368-2.896 1.201-3.94 3.08a.5.5 0 0 1-.933-.305c.464-3.71 1.886-5.662 3.46-6.66 1.245-.79 2.527-.942 3.336-.971v-.66a1.144 1.144 0 0 1 1.767-.96l3.994 2.94a1.147 1.147 0 0 1 0 1.946l-3.994 2.94a1.144 1.144 0 0 1-1.767-.96v-.667z"
                />
              </svg>
            </span>{" "}
            <h2 className={styles.title}>Partage</h2>
            <p className={styles.informations}>
              <b>Inspirez les autres utilisateurs </b>en partageant vos
              randonnées.
              <b> Invitez vos proches </b> à marcher avec vous.{" "}
              <b> Soyez acteurs de la plateforme</b> en commentant les
              randonnées que vous aurez découvertes. Evaluez votre expérience et
              complétez le contenu.
            </p>
          </div>
        </Col>
      </Row>
      {/*<div>
        <h2 className={styles.title}>Et si on marchait ?</h2>
        <Row className="mt-4 m-2 mb-4">
          <Col md={4}>
            <Card>
              <p className={styles.informations}>
                Découvrez les toutes dernières publications toto
              </p>
            </Card>
          </Col>
        </Row>
      </div>*/}

      <footer className={styles.footer}>
        <Row className="mt-4 m-2">
          <Col md={3}>
            <h6>Réseaux sociaux</h6>
            <ul className={styles.socialMedias}>
              <li>
                <a href="https://www.facebook.com/hedoire" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nicolas-hedoire-1734775b" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/hnhack" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="https://github.com/nicolashedoire" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Termes</h6>
            <ul className={styles.terms}>
              <li>
                <NavLink to="/terms">Termes</NavLink>
              </li>
              <li>
                <NavLink to="/confidentiality">Confidentialté</NavLink>
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
    </div>
  );
}
