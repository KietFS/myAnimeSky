import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from  "react-router-dom"
import firebase from "./firebase";
import store from "./state/index";
import { Provider } from 'react-redux';
import 'bulma/css/bulma.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <HashRouter>
    <App />
    </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

