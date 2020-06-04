import React from 'react';
import ForgotPassword from '../forgotPassword';
import SignIn from './signin';
import { Route, Switch } from 'react-router-dom';

const LoginPage = () => {
  return (
    <Switch>
      <Route path="/signin" exact component={SignIn} />;
      <Route path="/forgot-password" component={ForgotPassword} />;
    </Switch>
  )
}

export default LoginPage;