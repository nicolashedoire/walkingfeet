import React from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export default function Signup () {
    return (
        <div className={styles.signup}>
        <h1>Créer votre compte</h1>
        <div className={styles.dividerContainer}>
           <div className={styles.divider}></div>
        </div>
        <Form>
     <FormGroup>
       <Input type="email" name="email" id="email" placeholder="Email" autoComplete="off" />
       </FormGroup>
       <FormGroup className="mt-4">
       <Input type="password" name="password" id="password" placeholder="password" autoComplete="off" />
       </FormGroup>
       <FormGroup className={`mt-4`}>
          <Button className="mr-4">Créer votre compte</Button>
          </FormGroup>
       </Form>
     </div>
    )
}