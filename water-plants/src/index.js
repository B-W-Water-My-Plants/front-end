import React from 'react';
import ReactDOM from 'react-dom';

//Redux
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
// import thunk from 'redux-thunk';

import './index.css';
import App from './App';


const rootElement = document.getElementById('root');

ReactDOM.render(
    //setting up redux store & provider

    <App />, 
    
    rootElement);

