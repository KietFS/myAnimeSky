import React, { ChangeEvent } from 'react';
import  HomeIcon  from '../../images/Home-icon.svg';
import Users from '../../images/Users.svg';
import Playlist from '../../images/Playlist.svg';
import Connect from '../../images/Conect.svg';
import Settings from '../../images/Settings.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { number } from 'yargs';
import { EventEmitter } from 'stream';


const SideBar = () => {

  const [sidebar, setSidebar]=useState<Number>(0);
  
  useEffect(()=>{
    if (sidebar===0){
      if (window.location.pathname==="/")
        setSidebar(1);
      else if (window.location.pathname==="/userpage")
        setSidebar(2);
      else if (window.location.pathname==="/animepage")
        setSidebar(3);
    }

  },[window.location.pathname]);



  return (
    <div className="my-sidebar px-6">
      <ul className="nav-list mt-36 pt-7 items-center content-center">
      <NavLink to="/"><div  className={`inner-icon ${sidebar===1 ? "sidebar-effect": ""} `} onClick={()=>{setSidebar(1);setSidebar(1)}}><li className={`list-none my-5  cursor-pointer ${sidebar===1 ? "after-click-sidebar": ""}`}> <img className="nav-item"  src={HomeIcon}/></li></div></NavLink>
      <NavLink to="/userpage"><div className={`inner-icon ${sidebar===2 ? "sidebar-effect": ""} `} onClick={()=>{setSidebar(2);setSidebar(2)}} ><li className={`list-none my-5  cursor-pointer ${sidebar===2 ? "after-click-sidebar": ""}`}> <img  className="nav-item" src={Users}/> </li></div></NavLink>
      <NavLink to="/animepage"><div className={`inner-icon ${sidebar===3 ? "sidebar-effect": ""} `} onClick={()=>setSidebar(3)}><li className={`list-none my-5  cursor-pointer ${sidebar===3 ? "after-click-sidebar": ""}`}> <img  className="nav-item" src={Playlist}/></li></div></NavLink> 
      <div className={`inner-icon ${sidebar===4 ? "sidebar-effect": ""} `} onClick={()=>setSidebar(4)}><li className={`list-none my-5  cursor-pointer ${sidebar===4 ? "after-click-sidebar": ""}`}> <img  className="nav-item" src={Connect}/> </li></div>
      <div className={`inner-icon ${sidebar===5 ? "sidebar-effect": ""} `} onClick={()=>setSidebar(5)}><li className={`list-none my-5  cursor-pointer ${sidebar===5 ? "after-click-sidebar": ""}`}> <img className="nav-item" src={Settings}/></li></div>
      </ul>
    </div>
  )
}

export default SideBar
