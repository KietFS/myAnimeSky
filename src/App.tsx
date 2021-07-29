import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import './index.css';

import Homepage from './components/pages/Homepage';
import SignIn from './components/pages/SignIn';
import PrivateRoute from './components/auth/PrivateRoute';
import PublicRoute from './components/auth/PublicRoute';
import Loader from './components/UI/Loader';
import firebase from "./firebase";
import { getUserById, setLoading, setNeedVerification } from './state/actions/authActions';
import { RootState } from './state';
import SignUp from './components/pages/SignUp';
import { UserPage } from './components/pages/UserPage';
import AnimesPage from './components/pages/AnimesPage';

const App: FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);
  
  // Check if user exists
  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if(user) {
        dispatch(setLoading(true));
        await dispatch(getUserById(user.uid));
        if(!user.emailVerified) {
          dispatch(setNeedVerification());
        }
      }
      dispatch(setLoading(false));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  if(loading) {
    return <Loader />;
  }

  return (
    <div className="app-container">
    <BrowserRouter>
    <PublicRoute path="/signin" component={SignIn} />
      <Switch>
        <PublicRoute path="/signup" component={SignUp} />
        <PrivateRoute path="/" component={Homepage} exact />
        <PrivateRoute path="/userpage" component={UserPage} exact />
        <PrivateRoute path="/animepage" component={AnimesPage} exact />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
