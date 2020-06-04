import React, { useEffect } from 'react';
import { NavbarBrand, Navbar, NavbarText, Button } from 'reactstrap';
import { removeToken, jwtExist } from '../../services/oauth';
import styles from './Topbar.module.scss';

const Topbar = () => {

  const isLogged = jwtExist();

  const logout = () => {
    removeToken();
  }
  
  return (<Navbar color="light" light fixed="top" className={`${styles.navbar} shadow`}>
    <NavbarBrand href="/" className={`${styles.root} col-sm-3 col-md-2 mr-0 pt-3`}>
      <span>Walkingfeet</span>
    </NavbarBrand>
    {isLogged ? <NavbarText className={styles.navbarText}>
      <span className="bg-info rounded-circle mr-3 p-2 text-light">JD</span>
      <span className={styles.username}>John Doe</span>
      <Button color="primary" onClick={logout} className="ml-2">Deconnexion</Button>
      </NavbarText> : null}
  </Navbar>)
};

export default Topbar;
