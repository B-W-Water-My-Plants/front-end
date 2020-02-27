import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

//Redux
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
// import thunk from 'redux-thunk';

import './index.css';
import App from './App';


const rootElement = document.getElementById('root');

ReactDOM.render(
    //setting up redux store & provider

    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
