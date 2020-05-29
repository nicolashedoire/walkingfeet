import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

import styles from './Sidebar.module.scss';

const Sidebar: React.FC = () => (
  <div className={`col-md-2 d-none d-md-block bg-light ${styles.root}`}>
    <div className={`${styles.sticky} mt-3`}>
      <Nav vertical>
        <NavItem>
          <NavLink className="nav-link" exact to="/">
            Tableau de bord
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

export default Sidebar;
