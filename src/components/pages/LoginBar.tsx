import React, {useEffect} from 'react'
import Bell from "../../images/Bell.svg";
import Avt from "../../images/Avatar.jpg";
import Vector from "../../images/Vector.jpg"
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { signout } from '../../state/actions/authActions';
import { useSelector } from 'react-redux';
import { RootState } from '../../state';

const LoginBar = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { authenticated } = useSelector((state: RootState) => state.auth);
  
    const logoutClickHandler = () => {
      dispatch(signout());
    }
  
    
    return (
        <div className ="flex float-right items-center">
            <div className="flex pr-6 items-center" >
                <img className="mr-6 cursor-pointer" src={Bell} />
                <Avatar className="mr-6 cursor-pointer" src="https://avatars.githubusercontent.com/u/72301026?s=400&u=ef8aaf5a9602c549f03905b4ad0fd8facbbc56c4&v=4" />
           <button className="logout-button" onClick={logoutClickHandler}>Sign Out</button>
            </div>
        </div>
    )
}

export default LoginBar;
