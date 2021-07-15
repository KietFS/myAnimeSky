import React from 'react'
import { FaSearch, FaSortAlphaDown } from 'react-icons/fa';
import { useState,useEffect } from 'react';
import users from "../store/userInfo";
import Lock from "../images/lock.svg";
import Delete from "../images/delete.svg";
import ReSearch from "../images/userdetailsearch.svg"
import UserBar from './UserBar';


const UserManage:React.FC = () => {
    const [bars, setBars]=useState(users);
        return (
        <>
        <section className="px-10">
            <div className="flex justify-between items-center mt-16">
                <h1 className="text-3xl font-semibold">Người dùng</h1>
                <div className="flex items-center justify-center">
                    <input className="search-bar" placeholder="Tìm kiếm" type="text"></input>
                    <FaSearch className="search-icon" />
                </div>
            </div>

            <div className="mt-10">
                <button className="flex items-center bg-gray-100 pl-2 pr-20 py-2 rounded ">
                    <FaSortAlphaDown className="text-lg" />
                    <h3 className="font-semibold text-lg ml-5">Sắp xếp</h3>
                </button>
            </div>
            
            <div className="mt-10 shadow-box">
                <header className="flex items-center justify-between bg-gray-900 px-6 py-5 rounded-xl">
                    <h3 className="text-white">Avatar</h3>
                    <h3 className="text-white">Tài khoản</h3>
                    <h3 className="text-white">Vào lần cuối</h3>
                    <h3 className="text-white">Ngày tạo</h3>
                    <h3 className="text-white">Trạng thái</h3>
                    <h3 className="text-white">Hành động</h3>
                </header>
                {bars.map((bar)=>{
                    return (   
                        <UserBar Id={bar.Id} Name={bar.Name} Avt={bar.Avt} Email={bar.Email}
                         updateDay={bar.updateDay} createDay={bar.createDay}
                          Status={bar.Status}  Animes={bar.Animes}
                          FollowingAnimes={bar.FollowingAnimes} FaceBook={bar.FaceBook}
                          Episodes={bar.Episodes} Comments={bar.Comments}
                          />
                    )
                })}
            </div>
            <div className="flex float-right mt-20">
            <button className="slideButton ml-4 px-4 py-3 rounded-xl">1</button>
            <button className="slideButton ml-4 px-4 py-3 rounded-xl">2</button>
            <button className="slideButton ml-4 px-4 py-3 rounded-xl">3</button>
            </div>
    </section>
    </>
    )
}

export default UserManage
