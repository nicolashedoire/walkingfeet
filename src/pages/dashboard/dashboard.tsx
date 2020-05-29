import React from 'react';
import Layout from '../../components/Layout';
import styles from './styles.module.scss';

export default function Dashboard() {

    return (
        <Layout filters={false}>
            <div className={`${styles.search} mt-4`}>
            </div>
        </Layout>
    )
}