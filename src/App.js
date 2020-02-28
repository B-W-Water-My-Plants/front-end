import React from 'react';
import Header from "./components/Header.js";
import Login from "./components/Login.js";
import { Route, Link } from "react-router-dom";
import Register from "./components/Register.js";


import Nav from './components/Nav';

import './App.css';

export default function App() {
  return (
    <main>
      <Nav>
        <Link className="navLinks" to="/login">Login</Link>
        <Link className="navLinks" to="/signup">Sign Up</Link>
      </Nav>

      <Header />
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Register} />
    </main>
  );
}
