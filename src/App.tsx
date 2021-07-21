import React from 'react';
import SideBar from './components/SideBar';
import Homepage from "./components/Homepage";
import AnimesPage from './components/AnimesPage';
import "./index.css";
import { UserPage } from './components/UserPage';
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
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Switch>
            <Route path="/userpage">
                <UserPage />
            </Route>
            <Route path="/animepage">
                <AnimesPage />
            </Route>
        </Switch>
    </Router>
    </div>
   
  );
}

export default App;
