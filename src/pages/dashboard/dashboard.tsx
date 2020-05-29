import React from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import styles from './styles.module.scss';
import { Button } from 'reactstrap';
import { hikings } from '../../config/data';
import { NavLink } from 'react-router-dom';

export default function Dashboard() {

    return (
        <Layout filters={false}>
            <div className={`${styles.search} mt-4`}>
            </div>
        </Layout>
    )
}