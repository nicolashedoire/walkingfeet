import React from 'react';
import Layout from '../../components/Layout';
import styles from './styles.module.scss';
import { Form, Formik } from 'formik';
import { Row, Col, FormGroup, Label, Input, Button, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { formatDate } from '../../services/date';
import getCountries from '../../services/countries';
import Rating, { IconContainerProps } from "@material-ui/lab/Rating";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";


const customIcons: {
    [index: string]: { icon: React.ReactElement; label: string };
} = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon />,
        label: "Very Dissatisfied",
    },
    2: {
        icon: <SentimentDissatisfiedIcon />,
        label: "Dissatisfied",
    },
    3: {
        icon: <SentimentSatisfiedIcon />,
        label: "Neutral",
    },
    4: {
        icon: <SentimentSatisfiedAltIcon />,
        label: "Satisfied",
    },
    5: {
        icon: <SentimentVerySatisfiedIcon />,
        label: "Very Satisfied",
    },
};

function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

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
        country: 'FR',
        city: 'Lille',
        startDate: new Date(Date.now()).toString(),
        startTime: '',
        endDate: new Date(Date.now()).toString(),
        endTime: '',
        distance: '',
        den: '',
        note: 1,
        images: ''
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
                        console.log(values)
                        setTimeout(() => {

                        }, 1000);
                    }}
                >
                    {({ values, setFieldValue }) =>
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
                                                        setFieldValue('name', event.currentTarget.value);
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
                                                    setFieldValue('difficulty', event.currentTarget.value);
                                                }}
                                            >
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
                                                        setFieldValue('country', event.currentTarget.value);
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
                                                onChange={(event) => {
                                                    setFieldValue('city', event.currentTarget.value);
                                                }}
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
                                                            setFieldValue('startDate', val);
                                                        }}
                                                    />
                                                </div>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <label>Heure de départ</label>
                                            <Input
                                                value={values?.startTime}
                                                type="time"
                                                component="input"
                                                onChange={(event) => {
                                                    setFieldValue('startTime', event.currentTarget.value);
                                                }}
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
                                                            setFieldValue('endDate', val);
                                                        }}
                                                    />
                                                </div>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <label>Heure d'arrivée</label>
                                            <Input
                                                value={values?.endTime}
                                                type="time"
                                                component="input"
                                                onChange={(event) => {
                                                    setFieldValue('endTime', event.currentTarget.value);
                                                }}
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
                                                <InputGroup>
                                                    <Input
                                                        value={values?.distance}
                                                        type="number"
                                                        component="input"
                                                        onChange={(event) => {
                                                            setFieldValue('distance', event.currentTarget.value);
                                                        }}
                                                    />
                                                    <InputGroupAddon addonType="append">
                                                        <InputGroupText>km</InputGroupText>
                                                    </InputGroupAddon>
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Dénivelé</label>
                                                <Input
                                                    value={values?.den}
                                                    type="text"
                                                    component="input"
                                                    onChange={(event) => {
                                                        setFieldValue('den', event.currentTarget.value);
                                                    }}
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
                                <Col md={6}>
                                    <Row>
                                        <Col md={12}>
                                            <h2 className={`${styles.tagTitle} p-0 m-0 mb-3`}>Note globale</h2>
                                        </Col>
                                        <Col md={12}>
                                            <Rating
                                                name="customized-icons"
                                                value={values?.note}
                                                onChange={(event, newValue) => {
                                                    console.log(newValue);
                                                    setFieldValue('note', newValue);
                                                }}
                                                getLabelText={(value: number) => customIcons[value].label}
                                                IconContainerComponent={IconContainer}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={6}>
                                    <Row>
                                        <Col md={12}>
                                            <h2 className={`${styles.tagTitle} p-0 m-0 mb-3`}>Upload images</h2>
                                        </Col>
                                        <Col md={12}>
                                        <FormGroup>
                                                <Input
                                                    value={values?.images}
                                                    type="file"
                                                    component="input"
                                                    // multiple
                                                    onChange={(event: any) => {
                                                        const files: Array<any> = Array.from(event.target.files);
                                                        const reader = new FileReader(); 
                                                        reader.readAsDataURL(files[0]);
                                                        reader.onload = function(upload: any) {
                                                            setFieldValue('image', upload?.target?.result);
                                                        };
                                                        
                                                        const data = new FormData();
                                                        const fileName: string = files[0].name;
                                                        data.append('file', files[0]);
                                                        console.log(fileName);
                                                        data.append('filename', fileName);
                                                    
                                                    }}
                                                />
                                            </FormGroup>
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