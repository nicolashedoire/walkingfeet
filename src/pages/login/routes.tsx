import React from 'react';
import ForgotPassword from '../forgotPassword';
import Login from './login';
import { Route, Switch } from 'react-router-dom';

const LoginPage = () => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />;
      <Route path="/forgot-password" component={ForgotPassword} />;
    </Switch>
  )
}

export default LoginPage;