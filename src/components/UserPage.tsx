import React from 'react'
import UserManage from "./UserManage";
import UserList from "./UserList";
export const UserPage = () => {
    return (
        <div className="main-container">
            <div className="container middle">
                <UserManage />
            </div>
            
            <div className="container right">
                <UserList />
            </div>
        </div>
    )
}
