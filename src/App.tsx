import React from "react";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import ForgotPassword from './pages/forgotPassword';
import Signup from './pages/signup';
import Hikings from './pages/hikings';
import HikingDetails from './pages/hikings/hikingDetails';
import "./App.scss";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />;
    <Route path="/dashboard" exact component={Dashboard} />;
    <Route path="/hikings" exact component={Hikings} />;
    <Route path="/hikings/:id" exact component={HikingDetails} />;
    <Route path="/signup" component={Signup} />;
    <Route path="/login" component={Login} />;
    <Route path="/forgot-password" component={ForgotPassword} />;
  </Switch>
);

function App() {
  return (
    <Router>
    <Routes />
  </Router>
  );
}

export default App;
