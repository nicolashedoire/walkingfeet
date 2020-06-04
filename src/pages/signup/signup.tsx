import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
import { Alert } from 'reactstrap';
import { NavLink, useHistory } from 'react-router-dom';
import OauthSlice, {
   signupAction,
   getSignupStatus
} from '../../ducks/oauth';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';
import { ISignUp, Ioauth } from '../../types';
import { validateEmail, validatePassword } from '../../services/oauth';

export default function Signup() {
   const history = useHistory();
   const dispatch = useDispatch();
   
   useEffect(() => {
      return () => {
         dispatch(
            OauthSlice.actions.cleanSignUp()
         )
      }
   }, [dispatch, history]);

   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   const [errors, setErrors] = useState<Ioauth>({
      email: undefined,
      password: undefined
   });
   const signupStatus: ISignUp = useSelector(getSignupStatus);

   useEffect(() => {

      if(signupStatus.code === 200){
         history.push('/signup/success');
      }
   }, [signupStatus, dispatch, history])


   const createAccount = () => {
      const emailIsValid = validateEmail(email);
      const passwordIsValid = validatePassword(password);

      setErrors({
         email: emailIsValid ? undefined : 'Le format email est incorrect',
         password: passwordIsValid ? undefined : 'Le mot de passe doit faire au moins 8 caractères'
      });
      if (email !== '' && password !== '' && emailIsValid && passwordIsValid) {
         dispatch(signupAction({ email, password }));
      }
   }

   return (
      <div className={styles.signup}>
         <NavLink to="/" className={styles.returnButton}><Button color="link">Retour</Button></NavLink>
         <h1>Créer votre compte</h1>
         <div className={styles.dividerContainer}>
            <div className={styles.divider}></div>
         </div>
         {signupStatus?.message ? <Alert color="danger">
            {signupStatus?.message}
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
            <FormGroup className={`mt-4`}>
               <Button className="mr-4" color="primary" onClick={createAccount}>Créer votre compte</Button>
            </FormGroup>
         </Form>
      </div>
   )
}