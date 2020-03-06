import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

// Protected Route with token
import PrivateRoute from './utils/PrivateRoute';

// Components
import Login from "./components/Login.js";
import Register from "./components/Register.js";

import Nav from './components/Nav';
import Dashboard from './components/Dashboard';

import AddPlant from './components/AddPlant';
// import PlantCard from './components/PlantCard';
import UpdatePlant from './components/UpdatePlant';



export default function App(props) {

  
  
  return (
    <main>

        {/* This should redirect the user if they have their token already from loggin in. */}
      
      
      <Nav />
    

      <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Register}  />


      <PrivateRoute exact path='/dashboard/:id' component={Dashboard} {...props}/>
      <PrivateRoute exact path="/addplant" component={AddPlant} />

      {/* <PrivateRoute exact path='/plant/:id' component={Plant} /> */}
      
      <PrivateRoute exact path='/editplant/:id' component={UpdatePlant} />
      </Switch>
    </main>
  );
}
