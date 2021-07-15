import React from 'react'
import { FaSearch, FaSortAlphaDown } from 'react-icons/fa';
import { useState } from 'react';
import users from "../store/userInfo";
import user from "../store/userInfo"
import Lock from "../images/lock.svg";
import Delete from "../images/delete.svg";
const UserManage:React.FC = () => {
    const [bars, setBars]=useState(users);
    return (    
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

            <div className="mt-10">
                <header className="flex items-center justify-between bg-gray-900 px-6 py-5 rounded-xl">
                    <h3 className="text-white">Avatar</h3>
                    <h3 className="text-white">Tài khoản</h3>
                    <h3 className="text-white">Vào lần cuối</h3>
                    <h3 className="text-white">Ngày tạo</h3>
                    <h3 className="text-white">Trạng thái</h3>
                    <h3 className="text-white">Hành động</h3>
                </header>
            </div>

            <div className="mt-10">
                {bars.map((bar)=>{
                    return (
                        <div key={bar.id} className="flex justify-between mt-5
                        py-3 px-6 bg-white rounded-xl">
                            <img src={bar.image} alt="#" />
                            <h3 className="mt-4 text-left w-48 text-sm">{bar.email}</h3>
                            <h3 className="mt-4 mr-16 text-sm">{bar.updateAt}</h3>
                            <h3 className="mt-4 mr-16 text-sm">{bar.createAt}</h3>
                            <h3 className={`
                                mt-4 text-sm
                                ${ bar.status===true
                                    ? "text-green mr-16"
                                    : "text-red-500 mr-24"
                                }`}>
                                {`•
                                 ${bar.status===true
                                    ?"Đang hoạt động"
                                    :"Đã bị khóa"
                                 }
                                `}
                            </h3>
                            <div className="flex items-center relative right-0">
                                <img src={Lock} className="cursor-pointer" />
                                <img src={Delete} className="cursor-pointer" />
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="flex float-right mt-20">
            <button className="ml-4 px-4 py-3 rounded-xl bg-gray-800 text-white hover:bg-gray-500 hover:text-black">1</button>
            <button className="ml-4 px-4 py-3 rounded-xl bg-gray-800 text-white hover:bg-gray-500 hover:text-black">2</button>
            <button className="ml-4 px-4 py-3 rounded-xl bg-gray-800 text-white hover:bg-gray-500 hover:text-black">3</button>
            </div>
        </section>
    )
}

export default UserManage
