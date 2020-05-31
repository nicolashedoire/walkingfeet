import React from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import styles from './styles.module.scss';

export default function Login(props: any) {

   const [isLoading, setIsloading] = React.useState(false);

   const onGoogleClick = () => {
      setIsloading(true);
   }

   const responseGoogle = async (response: any) => {
      setIsloading(true);
      console.log(response);
   }

   return (
      <div className={styles.login}>
         <NavLink to="/" className={styles.returnButton}><Button color="link">Retour</Button></NavLink>
         <h1>Good morning vietnam</h1>
         <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID ? process.env.REACT_APP_GOOGLE_CLIENT_ID : ''}
            render={renderProps => (
               <Button className={`${styles.googleButton} mt-4`} onClick={renderProps.onClick}>
                  <img src="/images/google.svg" alt="google" width="30" />
                  <span>Se connecter avec Google</span>
               </Button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            onRequest={onGoogleClick}
            cookiePolicy={'single_host_origin'}
         />

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