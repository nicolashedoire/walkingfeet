import React from 'react';
import Layout from '../../components/Layout';
import styles from './styles.module.scss';
import { Form, Formik } from 'formik';
import { Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

export default function AddHiking() {

    interface Ihiking {
        _id: string;
        name: string;
        note: number;
        date: Date;
        difficulty: string;
        distance: string;
        elevation: string;
        country: string;
        city: string;
        startTime: Date;
        endTime: Date;
    }

    interface Ialert {
        message: string;
        type: "success" | "info" | "warning" | "error" | undefined;
    }

    const hiking = {
        name: '',
        difficulty: '',
        country: 'be',
        city: 'Mons',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        distance: '',
        den: ''
    }

    const difficulties: Array<string> = ["facile", "moyenne", "difficile"];
    const types: Array<string> = ["route", "sentier", "forêt", "sable"];

    return (
        <Layout filters={false}>
            <div className={`${styles.hikingAdd} mt-4`}>
                <h1>Ajouter une randonnée</h1>
                <Formik
                    enableReinitialize={true}
                    initialValues={hiking}
                    validate={(values) => {
                        const errors: any = {};
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 1000);
                    }}
                >
                    {({ values }) =>
                        <Form>
                            <Row className="mt-2 m-0">
                                <Col md={6}>
                                    <Row>
                                        <Col md="12">
                                            <h2 className="title p-0 m-0 mb-3 mt-4">Informations</h2>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="siret">Nom de la randonnée</Label>
                                                <Input
                                                    value={values?.name}
                                                    type="text"
                                                    component="input"
                                                    onChange={(event) => {

                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <label>Difficulté</label>
                                            <Input
                                                type="select"
                                                value={values?.difficulty}
                                                onChange={(event) => {
                                                    console.log(event.currentTarget.value);
                                                }}
                                            >
                                                <option value="">Choisir</option>
                                                {difficulties.map((el) => (
                                                    <option key={el} value={el}>
                                                        {el}
                                                    </option>
                                                ))}
                                            </Input>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col md={6}>
                                    <Row>
                                        <Col md="12">
                                            <h2 className="title p-0 m-0 mb-3 mt-4">Localisation</h2>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label>Pays</Label>
                                                <Input
                                                    value={values?.country}
                                                    type="text"
                                                    component="input"
                                                    onChange={(event) => {

                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <label>Ville</label>
                                            <Input
                                                value={values?.city}
                                                type="text"
                                                component="input"
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row className="mt-2 m-0">
                                <Col md={6}>
                                    <Row>
                                        <Col md="12">
                                            <h2 className="title p-0 m-0 mb-3">Temporalité</h2>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="siret">Date de départ</Label>
                                                <Input
                                                    value={values?.name}
                                                    type="text"
                                                    component="input"
                                                    onChange={(event) => {

                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <label>Heure de départ</label>
                                            <Input
                                                value={values?.difficulty}
                                                type="text"
                                                component="input"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="siret">Date d'arrivée</Label>
                                                <Input
                                                    value={values?.name}
                                                    type="text"
                                                    component="input"
                                                    onChange={(event) => {

                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <label>Heure d'arrivée</label>
                                            <Input
                                                value={values?.difficulty}
                                                type="text"
                                                component="input"
                                            />
                                        </Col>
                                    </Row>
                                </Col>

                                <Col md={6}>
                                    <Row>
                                        <Col md="12">
                                            <h2 className="title p-0 m-0 mb-3">Caractéristiques</h2>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label>Distance</Label>
                                                <Input
                                                    value={values?.distance}
                                                    type="text"
                                                    component="input"
                                                    onChange={(event) => {

                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <label>Dénivelé</label>
                                            <Input
                                                value={values?.den}
                                                type="text"
                                                component="input"
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row className="mt-2 m-0">
                                <Col md={12}>
                                    <Button>Créer la randonnée</Button>
                                </Col>
                            </Row>
                        </Form>
                    }
                </Formik>
            </div>
        </Layout>
    )
}