import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "../src/store/store";
import {HashRouter} from  "react-router-dom"

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

