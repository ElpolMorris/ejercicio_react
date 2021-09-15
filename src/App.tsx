import React, { useEffect } from 'react';
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
import PrivateRoute from './components/private-route/PrivateRoute';
import useStorage from "./hooks/use-storage/useStorage"
import { loginThunk } from './store/login/thunks';
import AdminDash from './containers/admin-dash/AdminDash';

function App() {

  const token = useStorage("accessToken")
  useEffect(() => {
    if(token){
      console.log(token)
    }
  }, [token])

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
            
          <PrivateRoute path="/dashboard" component={Dashboard}  />
          <PrivateRoute path="/admin" component={AdminDash}  />
          <Route path="*">
            <NotFound title="not-found" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
