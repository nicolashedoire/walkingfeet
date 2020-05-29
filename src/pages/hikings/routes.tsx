import React from 'react';
import Hikings from './hikings';
import HikingDetails from './hikingDetails';
import { Route, Switch } from 'react-router-dom';

const HikingsPage = () => {
    return (
        <Switch>
            <Route path="/hikings" exact component={Hikings} />;
            <Route path="/hikings/:id" component={HikingDetails} />;
        </Switch>
    )
}

export default HikingsPage;