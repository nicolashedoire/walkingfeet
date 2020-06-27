import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
import { Alert } from 'reactstrap';
import { NavLink, useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import OauthSlice, {
   signinAction,
   signinGoogleAction,
   getSigninStatus,
   getJwt
} from '../../ducks/oauth';
import { ISignIn, Ioauth } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { validateEmail, validatePassword } from '../../services/oauth';
import styles from './styles.module.scss';

export default function SignIn(props: any) {
   const history = useHistory();
   const dispatch = useDispatch();

   const signinStatus: ISignIn = useSelector(getSigninStatus);
   const isLogged: string = useSelector(getJwt);

   if(isLogged) {
      history.push('/');
   }

   useEffect(() => {

   }, [dispatch, history]);

   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   const [errors, setErrors] = useState<Ioauth>({
      email: undefined,
      password: undefined
   });
   const [isLoading, setIsloading] = React.useState(false);

   const onGoogleClick = () => {
      setIsloading(true);
   }

   const responseGoogle = async (user: any) => {
      setIsloading(true);
      dispatch(signinGoogleAction(user));
   }

   const login = () => {
      const emailIsValid = validateEmail(email);
      const passwordIsValid = validatePassword(password);

      setErrors({
         email: emailIsValid ? undefined : 'Le format email est incorrect',
         password: passwordIsValid ? undefined : 'Le mot de passe doit faire au moins 8 caractères'
      });
      if (email !== '' && password !== '' && emailIsValid && passwordIsValid) {
         dispatch(signinAction({ email, password }));
      }
   }

   return (
      <div className={styles.login}>
         <NavLink to="/" className={styles.returnButton}><Button color="link">Retour</Button></NavLink>
         <h1>Good morning</h1>
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
         {signinStatus?.message ? <Alert color="danger">
            {signinStatus?.message}
         </Alert> : null}
         {errors?.email || errors?.password ? <Alert color="danger">
            {errors?.email ? <div>{errors?.email}</div> : null}
            {errors?.password ? <div>{errors?.password}</div> : null}
         </Alert> : null}
         <Form>
            <FormGroup>
               <Input type="email" name="email" id="email" placeholder="Email" autoComplete="off" onChange={(e) => setEmail(e.currentTarget.value)} />
            </FormGroup>
            <FormGroup className="mt-4">
               <Input type="password" name="password" id="password" placeholder="password" autoComplete="off" onChange={(e) => setPassword(e.currentTarget.value)} />
            </FormGroup>
            <FormGroup className={`${styles.actionsContainer}`}>
               <Button className="mr-4" color="primary" onClick={login}>Se connecter</Button>
               <NavLink to="/forgot-password" className={styles.forgotPassword}>Mot de passe oublié</NavLink>
            </FormGroup>
         </Form>
      </div>
   )
}