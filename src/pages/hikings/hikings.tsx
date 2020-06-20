import React from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import styles from './styles.module.scss';
import { Button } from 'reactstrap';
import { hikings } from '../../config/data';
import { NavLink } from 'react-router-dom';

export default function Search() {

    return (
        <Layout filters={true}>
            <div className="mt-4">
            <NavLink to="/hiking/add">
            <Button className="mr-4" color="primary">Ajouter une randonnée</Button>
            </NavLink>
            </div>
            <div className={`${styles.search} mt-4`}>
                {
                    hikings.map((hiking) => {
                        return (
                            <Card key={hiking._id}>
                                <img src="/images/header2.jpg" width="250" alt="randonnée" title="randonnée" />
                                <h4 className="mt-4"><b>{hiking.title}</b></h4>
                                <p>{hiking.description}</p>
                                <NavLink to={`/hikings/${hiking._id}`} >
                                    <Button className="mr-4" color="primary">Voir plus</Button>
                                </NavLink>
                            </Card>
                        )
                    })
                }
            </div>
        </Layout>
    )
}