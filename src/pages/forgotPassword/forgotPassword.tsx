import React from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export default function ForgotPassword() {
    return (
        <div className={styles.forgotPasswordPage}>
            <NavLink to="/signin" className={styles.returnButton}><Button color="link">Retour</Button></NavLink>
            <h1 className="mb-4">Mot de passe oublié</h1>
            <Form>
                <FormGroup>
                    <Input type="email" name="email" id="email" placeholder="Email" autoComplete="off" />
                </FormGroup>
                <FormGroup className="mt-4">
                    <Button className={`mr-4 ${styles.forgotButton}`} color="primary">Demander un nouveau mot de passe</Button>
                </FormGroup>
            </Form>
        </div>
    );
}