import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from  './styles.module.scss';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul>
                <li><NavLink to="/login">Se connecter</NavLink></li>
                <li><NavLink to="/signup">Créer un compte</NavLink></li>
            </ul>
        </div>
    );
}