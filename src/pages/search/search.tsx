import React from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import styles from './styles.module.scss';
import { Button } from 'reactstrap';

export default function Search() {

    return (
        <Layout>
            <div className="mt-4">
                <Card>
                    <img src="/images/header2.jpg" width="250" alt="randonnée" title="randonnée"/>
                    <h4 className="mt-4"><b>Randonnée</b></h4>
                    <p>Une superbe randonnée de 18km</p>
                    <Button className="mr-4" color="primary">Voir plus</Button>
                </Card>
            </div>
        </Layout>
    )
}