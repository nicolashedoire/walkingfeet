import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { useParams } from 'react-router-dom';
import hikingsSlice, {
    getHikingByIdAction,
    getHikingData,
} from '../../ducks/hiking';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Rating, { IconContainerProps } from "@material-ui/lab/Rating";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import styles from './styles.module.scss'


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
    console.log(props)
    return <span {...other}>{customIcons[value].icon}</span>;
}

export default function HikingDetails() {
    const history = useHistory();
    const hiking = useSelector(getHikingData);
    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(getHikingByIdAction(id));
    }, []);

    return (
        <Layout filters={false}>
            <div className={`mt-4 ${styles.hikingDetails}`}>
                <div>
                    <Button onClick={() => history.push('/hikings')}>Retour</Button>
                    {
                        hiking ? <div className="mt-4">
                            <h1><span className="mr-4">{hiking.name}</span>
                                <Rating
                                    name="customized-icons"
                                    value={hiking?.note}
                                    getLabelText={(value: number) => customIcons[value].label}
                                    IconContainerComponent={IconContainer}
                                />
                            </h1>
                            <p>{hiking.description}</p>
                            <p>Durée : {hiking.duration}</p>
                            <p>Distance : {hiking.distance} km</p>
                            <p>Difficulté : {hiking.difficulty}</p>
                            <p>Ville : {hiking.city}</p>
                            <p>Pays : {hiking.country}</p>
                            <p>Commentaires : {hiking.comment}</p>
                            <p>Randonnée familiale : {hiking.family ? 'Oui' : 'Non'}</p>
                            <p>Type de chemin : {hiking.type}</p>
                        </div> : null
                    }
                </div>
                <div className="mt-4">
                    <img src="/images/header2.jpg" width="550" alt="randonnée" title="randonnée" />
                </div>
            </div>
        </Layout>
    )
}