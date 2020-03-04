import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";

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
      {     
      localStorage.getItem('token') ? <Redirect to={`/dashboard/${localStorage.getItem('id')}`} /> : null
      }

      
      <Nav />
    

      <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Register}  />


      <PrivateRoute exact path={'/dashboard/:id'} component={Dashboard} {...props}/>
      <PrivateRoute exact path="/addplant" component={AddPlant} />

      {/* <PrivateRoute exact path='/plant' component={PlantCard} /> */}
      
      <PrivateRoute exact path='/edit-plant/:id' render={(props) => <UpdatePlant {...props}/>} />
      </Switch>
    </main>
  );
}
