import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import styles from './styles.module.scss';
import { Button } from 'reactstrap';
import { hikings } from '../../config/data';
import { NavLink} from 'react-router-dom';
import citySlice, {
    getHikingsAction,
    getHikingsData,
  } from '../../ducks/hiking';
  import { useDispatch, useSelector } from 'react-redux';
  import { useHistory } from 'react-router-dom';

export default function Search(props: any) {
    const hikings = useSelector(getHikingsData);
    const dispatch = useDispatch();

    const search = props.location.search;
    let params = new URLSearchParams(search);
    let city = params.get('city');
    let country = params.get('country');
    let difficulty = params.get('difficulty');

    useEffect(() => {
        if(city !== null && country !== null && difficulty !== null){
            dispatch(getHikingsAction({city, country, difficulty}));
        }
    }, [])

    return (
        <Layout filters={true} city={city} country={country}>
            <div className="mt-4">
                <NavLink to="/signin">
                    <Button className="mr-4" color="primary">Ajouter une randonnée</Button>
                </NavLink>
            </div>
            <div className={`${styles.search} mt-4`}>
                {
                    hikings.map((hiking: any) => {
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