import React from 'react'
import UserManage from "./UserManage";
import UserList from "./UserList";
import SideBar from './SideBar';
import "../../index.css"
export const UserPage = () => {
    return (
        <>
        <SideBar />
        <div className="main-container">
            <div className="container middle">
                <UserManage />
            </div>
            <div className="container right">
                <UserList />
            </div>
        </div>
        </>
    )
}
