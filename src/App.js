import React from 'react';

import { Route, Switch, Redirect } from "react-router-dom";

import './App.css';

// Components

import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';

// Protected Route with token
import PrivateRoute from './utils/PrivateRoute';


export default function App(props) {
  return (
    <main>

        {/* This should redirect the user if they have their token already from loggin in. */}
      {     
      localStorage.getItem('token') ? <Redirect to="/dashboard" /> : null
      }

      <Nav />
    

      <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Register}  />


      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </main>
  );
}
