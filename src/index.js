import React from 'react'
import ReactDOM from 'react-dom'
import AppManager from "./containers/AppManager";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/js/bootstrap.js';
import './style.css';
import 'rsuite/dist/styles/rsuite-default.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'semantic-ui-css/semantic.min.css'
import HelloWorld from "./hello";

ReactDOM.render(
    <AppManager/>,
    // <HelloWorld/>,
    document.getElementById('root')
);
