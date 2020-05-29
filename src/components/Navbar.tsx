import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles.scss';

export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><NavLink to="/login">Se connecter</NavLink></li>
                <li><NavLink to="/signup">Créer un compte</NavLink></li>
            </ul>
        </div>
    );
}