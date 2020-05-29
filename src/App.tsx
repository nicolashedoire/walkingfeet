import React from "react";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import "./App.scss";


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />;
    <Route path="/dashboard" exact component={Dashboard} />;
    <Route path="/login" component={Login} />;
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
