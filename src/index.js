import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <HashRouter>
        <App /> 
    </HashRouter>,
    
    document.getElementById('root'));


serviceWorker.unregister();
