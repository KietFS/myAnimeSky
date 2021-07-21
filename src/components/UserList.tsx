import React from 'react'
import Bell from "../images/Bell.jpg";
import Avt from "../images/Avatart.jpg";
import Vector from "../images/Vector.jpg";
import Avt1 from "../images/AvtImg1.jpg";
import Avt2 from "../images/AvtImg2.jpg";
import TypicalUsers from "./TypicalUsers";
import AddictedUsers from "./AddictedUsers";
import LoginBar from './LoginBar';
import users from '../store/userInfo';
import {useState} from "react";


const newUser=users;
const arrayOfTypicalUsers=[...newUser]
const arrayOfAddictedUsers=[...newUser];
arrayOfTypicalUsers.sort((a,b)=>(a.Likes < b.Likes) ? 1 : (a.Comments<b.Comments) ? 1 : -1);
arrayOfAddictedUsers.sort((a,b)=>(a.Episodes < b.Episodes) ? 1 : -1)
const UserList = () => {
    const [typicalUsers, setTypicalUsers]=useState(arrayOfTypicalUsers);
    const [addictedUsers, setAddictedUsers]=useState(arrayOfAddictedUsers);
    let tempIndexTypicalUsers=0;
    let tempIndexAddictedUsers=0;
    return (
        <section className="pt-10">
            <LoginBar />

            <div className="px-10 mt-32">
                <div className="mt-8">
                    <h2 className="font-bold text-xl">Người dùng nổi bật</h2>
                    <p className="text-gray-500 font-bold text-xs mt-2 mb-12">30 NGÀY QUA</p>
                    <div className="mt-8">
                        {typicalUsers.map((typicalUser)=>{
                            if (tempIndexTypicalUsers<=3){
                                tempIndexTypicalUsers=tempIndexTypicalUsers+1;
                                return (
                                <TypicalUsers Img={typicalUser.Avt} Name={typicalUser.Name} Like={typicalUser.Likes} Cmt={typicalUser.Comments} />)
                            }
                        })}
                    </div>
                </div>
            </div>

            <div className="px-10 mt-20">
                <div className="mt-8">
                    <h2 className="font-bold text-xl">Nghiện Anime</h2>
                    <p className="text-gray-500 font-bold text-xs mt-2 mb-12">30 NGÀY QUA</p>
                    <div className="mt-8">
                    {addictedUsers.map((addictedUser)=>{
                            if (tempIndexAddictedUsers<=3){
                                tempIndexAddictedUsers=tempIndexAddictedUsers+1;
                                return (
                                <AddictedUsers Img={addictedUser.Avt} Name={addictedUser.Name} Views={addictedUser.Episodes}  />)
                            }
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserList
