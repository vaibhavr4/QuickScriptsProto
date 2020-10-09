import React from 'react'
import ReactDOM from 'react-dom'
import AppManager from "./containers/AppManager";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/js/bootstrap.js';
import './style.css';
import 'rsuite/dist/styles/rsuite-default.css';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
    <AppManager/>,
    document.getElementById('root')
);