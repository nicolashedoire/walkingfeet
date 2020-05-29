import React from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import './styles.scss';

export default function Login() {
   return (
      <div className="login">
         <h1>Good morning vietnam</h1>
         <Button className="google-button mt-4">
            <img src="/images/google.svg" alt="google" width="30" />
            <span>Se connecter avec Google</span>
         </Button>

         <div className="divider-container">
            <div className="divider"></div>
            <p>ou</p>
            <div className="divider"></div>
         </div>
         <Form>
      <FormGroup>
        <Input type="email" name="email" id="email" placeholder="Email" autoComplete="off" />
        </FormGroup>
        <FormGroup className="mt-4">
        <Input type="password" name="password" id="password" placeholder="password" autoComplete="off" />
        </FormGroup>
        <FormGroup className="mt-4 actions-container">
           <Button className="mr-4">Se connecter</Button>
           <NavLink to="/forgot-password" className="forgot-password">Mot de passe oublié</NavLink>
           </FormGroup>
        </Form>
      </div>
   )
}