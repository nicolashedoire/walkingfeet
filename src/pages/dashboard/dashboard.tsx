import React from 'react';
import Layout from '../../components/Layout';
import styles from './styles.module.scss';
import { NavLink, useHistory } from 'react-router-dom';

export default function Dashboard() {

    return (
        <Layout filters={true}>
            <div className={`${styles.search} mt-4`}>
            </div>
        </Layout>
    )
}