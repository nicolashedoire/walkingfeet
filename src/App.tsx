import React from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './config/store';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import SignIn from './pages/signin';
import ForgotPassword from './pages/forgotPassword';
import SignUp from './pages/signup';
import SignupSuccess from './pages/signup/signupSuccess';
import Hikings from './pages/hikings';
import HikingDetails from './pages/hikings/hikingDetails';
import HikingAdd from './pages/hikings/hikingsAdd';
import Terms from './pages/terms';
import Confidentiality from './pages/confidentiality';
import { jwtExist } from './services/oauth';
import "./App.scss";

const Routes = () => {
  const isLogged = jwtExist();

  const routes = [
    { path: '/', component: Home, isPublic: true, visibleWithToken: false, exact: true },
    { path: '/dashboard', component: Dashboard, isPublic: false, visibleWithToken: true, exact: true },
    { path: '/hikings', component: Hikings, isPublic: true, visibleWithToken: true, exact: true },
    { path: '/hikings/:id', component: HikingDetails, isPublic: true, visibleWithToken: true, exact: false },
    { path: '/hiking/add', component: HikingAdd, isPublic: true, visibleWithToken: true, exact: true },
    { path: '/terms', component: Terms, isPublic: true, visibleWithToken: true, exact: true },
    { path: '/confidentiality', component: Confidentiality, isPublic: true, visibleWithToken: true, exact: true },
    { path: '/signup', component: SignUp, isPublic: true, visibleWithToken: false, exact: true },
    { path: '/signup/success', component: SignupSuccess, isPublic: true, visibleWithToken: false, exact: true },
    { path: '/signin', component: SignIn, isPublic: true, visibleWithToken: false, exact: true },
    { path: '/forgot-password', component: ForgotPassword, isPublic: true, visibleWithToken: false, exact: true },
  ]

  return (<Switch>
    {
      isLogged ?
        <React.Fragment>
          {
          routes.map((route) => {
            if (route.isPublic && !route.visibleWithToken) {
              return <Route key={route.path} exact path={route.path}>
                {() => {
                  if(route.path === window.location.pathname){
                    return <Redirect to="/dashboard"/>
                  }}}
                </Route>
            }else {
              return route?.exact ? 
              <Route key={route.path} path={route.path} exact component={route.component} /> :
              <Route key={route.path} path={route.path} component={route.component} /> 
            }
          })}
          <Redirect to="/dashboard"/>
        </React.Fragment>
        :
        <React.Fragment>
          {
            routes.map(route => {
              if (route.visibleWithToken && !route.isPublic) {
                return <Route key={route.path} exact path={route.path}>
                  {() => {
                  if(route.path === window.location.pathname){
                    return <Redirect to="/"/>
                  }}}
                </Route>
              }else {
                return <Route key={route.path} path={route.path} exact component={route.component} />
              }
            })
          }
          <Redirect to="/"/>
        </React.Fragment>
    }
  </Switch>);
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
