import React from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export default function Login() {
   return (
      <div className={styles.login}>
         <NavLink to="/" className={styles.returnButton}><Button color="link">Retour</Button></NavLink>
         <h1>Good morning vietnam</h1>
         <Button className={`${styles.googleButton} mt-4`}>
            <img src="/images/google.svg" alt="google" width="30" />
            <span>Se connecter avec Google</span>
         </Button>

         <div className={styles.dividerContainer}>
            <div className={styles.divider}></div>
            <p>ou</p>
            <div className={styles.divider}></div>
         </div>
         <Form>
      <FormGroup>
        <Input type="email" name="email" id="email" placeholder="Email" autoComplete="off" />
        </FormGroup>
        <FormGroup className="mt-4">
        <Input type="password" name="password" id="password" placeholder="password" autoComplete="off" />
        </FormGroup>
        <FormGroup className={`${styles.actionsContainer}`}>
        <NavLink to="/dashboard" className={styles.returnButton}>
         <Button className="mr-4" color="primary">Se connecter</Button>
         </NavLink>
         <NavLink to="/forgot-password" className={styles.forgotPassword}>Mot de passe oublié</NavLink>
         </FormGroup>
        </Form>
      </div>
   )
}