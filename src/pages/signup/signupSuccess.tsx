import React, { useEffect } from 'react';
import { Alert } from 'reactstrap';
import styles from './styles.module.scss';
import { useHistory } from 'react-router-dom';

export default function SignupSuccess() {
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push('/signin');
        }, 3000)
    }, [history]);

    return (
        <div className={styles.signup}>
            <h1>Créer votre compte</h1>
            <div className={styles.dividerContainer}>
                <div className={styles.divider}></div>
            </div>
            <Alert color="success">
                Le compte à bien été créé !
         </Alert>
        </div>
    )
}