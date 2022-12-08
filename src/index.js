import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Main from "./Main";
import "./style/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter>
    <Main />
  </HashRouter>,
  document.getElementById("root")
);

// pwa
serviceWorker.register();



