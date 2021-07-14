import React from 'react'
import Bell from "../images/Bell.svg";
import Avt from "../images/Avatar.svg";
import Vector from "../images/Vector.svg";
const LoginBar = () => {
    return (
        <div className="flex float-right items-center">
            <div className="flex pr-6">
                <img className="mr-6 cursor-pointer" src={Bell} />
                <img className="mr-6 cursor-pointer w-12 h-12 rounded-full border-gray-400" src={Avt} />
                <button className="logout-button">Log Out</button>

            </div>
        </div>
    )
}

export default LoginBar
