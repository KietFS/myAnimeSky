import React from 'react';
import SideBar from './components/SideBar';
import Homepage from "./components/Homepage";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return ( 
    <div className="app-container">
    <Router>
        <SideBar />
        <Switch>
            <Route path="/" exact>
                <Homepage />
            </Route>
        </Switch>
    </Router>
    </div>
   
  );
}

export default App;
