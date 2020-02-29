import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// UI Library Antd
import 'antd/dist/antd.css';

import { BrowserRouter as Router } from "react-router-dom";

import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";
//Redux - Store
import { Provider } from 'react-redux';
// Reducers
import {reducer} from "./store/reducers/index";


const store = createStore(reducer, applyMiddleware(thunk))

const rootElement = document.getElementById('root');

ReactDOM.render(
    //setting up redux store & provider
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    rootElement
);
