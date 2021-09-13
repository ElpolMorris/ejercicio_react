import React from 'react';
import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom"
import Login from './containers/login/Login';
import Main from './containers/main/Main';
import Register from './containers/register/Register';
import NotFound from './containers/not-found/NotFound';
import Dashboard from './containers/dashboard/Dashboard';
import NavLink from './components/navlink/NavLink';
function App() {
  return (
    <>
      <Router>
        <NavLink />
        <Switch>
          <Route path="/" exact>
            <Main title="Avisos de salida a la Montaña" subtitle="Registra tu salida y estaremos atentos a tu retorno"/>
          </Route>
          <Route path="/login">
            <Login title="Login"/>
          </Route>
          <Route path="/register">
            <Register title="Registro" />
          </Route>
          <Route path="/:username/dashboard">
            <Dashboard title="dashboard" />
          </Route>
          <Route path="*">
            <NotFound title="not-found" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
