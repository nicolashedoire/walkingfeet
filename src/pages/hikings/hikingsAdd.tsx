import React from 'react';
import Layout from '../../components/Layout';
import styles from './styles.module.scss';

export default function AddHiking() {
    return (
        <Layout filters={false}>
            <div className={`${styles.hikingAdd} mt-4`}>
            <h1>Ajouter une randonnée</h1>
            </div>
        </Layout>
    )
}