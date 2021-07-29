import React from 'react';
import  HomeIcon  from '../../images/Home-icon.svg';
import Users from '../../images/Users.svg';
import Playlist from '../../images/Playlist.svg';
import Connect from '../../images/Conect.svg';
import Settings from '../../images/Settings.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { NavLink } from 'react-router-dom';


const SideBar = () => {

  return (
    <div className="my-sidebar px-6">
      <ul className="nav-list mt-36 pt-7 items-center content-center">
      <Link to="/"><div  className="inner-icon"><li className="list-none my-5  cursor-pointer"> <img className="nav-item"  src={HomeIcon}/></li></div></Link>
      <Link to="/userpage"><div className="inner-icon" ><li className="list-none my-5  cursor-pointer"> <img  className="nav-item" src={Users}/> </li></div></Link>
    <Link to="/animepage"><div className="inner-icon"><li className="list-none my-5  cursor-pointer"> <img  className="nav-item" src={Playlist}/></li></div></Link> 
        <div className="inner-icon"><li className="list-none my-5  cursor-pointer"> <img  className="nav-item" src={Connect}/> </li></div>
        <div className="inner-icon"><li className="list-none my-5  cursor-pointer"> <img className="nav-item" src={Settings}/></li></div>
      </ul>
    </div>
  )
}

export default SideBar
