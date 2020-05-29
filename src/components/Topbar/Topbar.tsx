import React from 'react';
import { NavbarBrand, Navbar, NavbarText } from 'reactstrap';

import styles from './Topbar.module.scss';

const Topbar: React.FC = () => (
  <Navbar color="light" light fixed="top" className={`${styles.navbar} shadow`}>
    <NavbarBrand href="/" className={`${styles.root} col-sm-3 col-md-2 mr-0 pt-3`}>
      <span>Walkingfeet</span>
    </NavbarBrand>
    <NavbarText className={styles.navbarText}>
      <span className="bg-info rounded-circle mr-3 p-2 text-light">JD</span>
      <span className={styles.username}>John Doe</span>
    </NavbarText>
  </Navbar>
);

export default Topbar;
