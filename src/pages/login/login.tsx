import React from 'react';
import { Button } from 'reactstrap';
import './styles.scss';

export default function Login() {
   return (
      <div className="login">
         <h1>Good morning vietnam</h1>
         <Button className="google-button">
            <img src="/images/google.svg" alt="google" width="30" />
              &nbsp;Se connecter avec Google
            </Button>
      </div>
   )
}