import React from 'react'
import Summary from "./Summary";
import AnimeList from "./AnimeList";
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../../state';
import { useEffect } from 'react';
import SideBar from './SideBar';
import { setSuccess } from '../../state/actions/authActions';
import Message from '../UI/Message';
const Homepage:React.FC = () => {

    const { user, needVerification, success } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
  
    useEffect(() => {
      if(success) {
        dispatch(setSuccess(''));
      }
    }, [success, dispatch]);

    return (
        <>
        <SideBar />
        <div className="main-container">
            <div className="container middle">
                <Summary />
            </div>
            <div className="container right">
                <AnimeList />
            </div>
        </div>
        </>

    )
}

export default Homepage
