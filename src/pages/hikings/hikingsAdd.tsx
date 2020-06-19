import React from 'react';
import Layout from '../../components/Layout';
import styles from './styles.module.scss';
import { Form, Formik } from 'formik';
import { Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { formatDate } from '../../services/date';
import getCountries from '../../services/countries';

export default function AddHiking() {

    const countries = getCountries();

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
        country: 'BE',
        city: 'Mons',
        startDate: new Date(Date.now()).toString(),
        startTime: '',
        endDate: new Date(Date.now()).toString(),
        endTime: '',
        distance: '',
        den: ''
    }

    const difficulties: Array<string> = ["facile", "moyenne", "difficile"];
    const types: Array<string> = ["route", "sentier", "forêt", "sable"];

    const [difficulty, setDifficulty] = React.useState(difficulties[0]);
    const [country, setCountry] = React.useState({ key: 'FR', value: 'France' })


    const handleChangeDifficulty = (e: any) => {
        setDifficulty(e.currentTarget.value)
    }

    const handleChangeCountry = (e: any) => {
        const selectedCountry = countries.find((country: any) => country.key === e.currentTarget.value);
        setCountry(selectedCountry);
    }

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
                                            <h2 className={`${styles.tagTitle} p-0 m-0 mb-3 mt-4`}>Informations</h2>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label>Nom de la randonnée</Label>
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
                                            <h2 className={`${styles.tagTitle} p-0 m-0 mb-3 mt-4`}>Localisation</h2>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label>Pays</Label>
                                                <Input
                                                    value={values?.country}
                                                    type="select"
                                                    component="input"
                                                    onChange={(event) => {

                                                    }}
                                                >
                                                    {countries.map((country: any) => (
                                                        <option key={country.key} value={country.key}>
                                                            {country.value}
                                                        </option>
                                                    ))}
                                                </Input>
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

                            <Row className="m-0">
                                <Col md={6}>
                                    <Row>
                                        <Col md="12">
                                            <h2 className={`${styles.tagTitle} p-0 m-0 mb-3`}>Temporalité</h2>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label>Date de départ</Label>
                                                <div>
                                                    <DatePicker
                                                        dateFormat="dd/MM/yyyy"
                                                        className="form-control"
                                                        selected={
                                                            new Date(
                                                                formatDate(values?.startDate)
                                                            )
                                                        }
                                                        onChange={(val) => {
                                                            console.log(val)
                                                        }}
                                                    />
                                                </div>
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
                                                <Label>Date d'arrivée</Label>
                                                <div>
                                                    <DatePicker
                                                        dateFormat="dd/MM/yyyy"
                                                        className="form-control"
                                                        selected={
                                                            new Date(
                                                                formatDate(values?.endDate)
                                                            )
                                                        }
                                                        onChange={(val) => {
                                                            console.log(val)
                                                        }}
                                                    />
                                                </div>
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
                                            <h2 className={`${styles.tagTitle} p-0 m-0 mb-3`}>Caractéristiques</h2>
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
                                            <FormGroup>
                                                <label>Dénivelé</label>
                                                <Input
                                                    value={values?.den}
                                                    type="text"
                                                    component="input"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Type de chemins</label>
                                                <div className={styles.types}>
                                                    {
                                                        types.map(type => {
                                                            return (
                                                                <div style={{ width: 'fit-content' }}>
                                                                    <Input
                                                                        value={values?.den}
                                                                        type="checkbox"
                                                                        component="input"
                                                                    />
                                                                    <span>{type}</span>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row className="mt-2 m-0">
                                <Col md={12}>
                                    <h2 className={`${styles.tagTitle} p-0 m-0 mb-3`}>Note globale</h2>
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