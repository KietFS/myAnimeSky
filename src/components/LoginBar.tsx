import React, {useEffect} from 'react'
import Bell from "../images/Bell.svg";
import Avt from "../images/Avatar.jpg";
import Vector from "../images/Vector.jpg"
import { auth,provider } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail, selectUserName, selectUserPhoto, setUserLogin, setSignOut } from '../userSlice';


const LoginBar = () => {
    const dispatch=  useDispatch();
    const userName=  useSelector(selectUserName);
    const userPhoto= useSelector(selectUserPhoto);


    useEffect(()=>{
        auth.onAuthStateChanged(async(user)=>{
            if (user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
            }
        })
    }, [])

    const signIn = ()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            let user = result.user;
            dispatch(setUserLogin({
                name: user?.displayName,
                email: user?.email,
                photo: user?.photoURL
            }))
        })
    }

    const signOut = () =>{
        auth.signOut()
        .then(()=>{
            dispatch(setSignOut());
        })
    }


    return (
        <div className ="flex float-right items-center">
            <div className="flex pr-6" >
                <img className="mr-6 cursor-pointer" src={Bell} />
                <img className="mr-6 cursor-pointer w-12 h-12 rounded-full border-gray-400 " src={`
                ${ !userName
                    ? Avt
                    : userPhoto}`} 
                onClick={signIn} 
                />
                <button className="logout-button" onClick={signOut}>Sign Out</button>
            </div>
        </div>
    )
}

export default LoginBar;
