import React from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import styles from './styles.module.scss';
import { Button } from 'reactstrap';
import { hikings } from '../../config/data';

export default function Search() {

    return (
        <Layout>
            <div className={`${styles.search} mt-4`}>
                {
                    hikings.map((hiking) => {
                        return (
                            <Card>
                                <img src="/images/header2.jpg" width="250" alt="randonnée" title="randonnée" />
                                <h4 className="mt-4"><b>{hiking.title}</b></h4>
                                <p>{hiking.description}</p>
                                <Button className="mr-4" color="primary">Voir plus</Button>
                            </Card>
                        )
                    })
                }
            </div>
        </Layout>
    )
}