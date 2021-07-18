import React from 'react'
import { FaSearch, FaSortAlphaDown } from 'react-icons/fa';
import { useState,useEffect } from 'react';
import users from "../store/userInfo";
import Lock from "../images/lock.svg";
import Delete from "../images/delete.svg";
import ReSearch from "../images/userdetailsearch.svg"
import Button from "@material-ui/core/Button"
import CardImg from "../images/CardImg.svg";
import { number } from 'yargs';
import { stringify } from 'querystring';
type user ={
    Id:number;
    Avt: string;
    Name: string;
    Email: string;
    FaceBook: string;
    Status: boolean;
    Comments: number;
    Animes: number;
    Episodes: number;
    FollowingAnimes: number;
    createDay: string;
    updateDay: string;
}

interface Props {
    Id:number
    Avt: string
    Name: string
    Email: string
    FaceBook: string
    Status: boolean
    Comments: number;
    Animes: number;
    Episodes: number;
    FollowingAnimes: number;
    createDay: string;
    updateDay: string;
}

const UserManage:React.FC = () => {
    const [bars, setBars]=useState(users);
    const [show,setShow]=useState(false);
    const [proper, setProper]=useState<Props>();
    
    console.log(proper);

    const UserCard:React.FC<Props> = (proper) => { 
    

        return (
            <div id="usercard-item" className={`${
                show===false
                ? "hidden"
                : ""
            }`}>
            <div className="usercard">
                    <h2 className="font-xl font-bold text-center mt-2">Thông tin chi tiết</h2>
                    <h3 className="font-xl font-bold text-left ml-4">Avatar</h3>
                    <img src={CardImg}  className="userimg ml-36 "/>
                <div className="">
                    <h3 className="font-xl font-bold text-left ml-4">Thông tin cá nhân</h3>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Tên:</h4>
                        <h4 className="font-xl text-left ml-20">{proper?.Name}</h4>
                    </div>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Email:</h4>
                        <h4 className="font-xl text-left ml-16">{proper?.Email}</h4>
                    </div>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Facebook:</h4>
                        <h4 className="font-xl text-left ml-10">{proper?.FaceBook}</h4>
                    </div>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Trạng thái</h4>
                        <h4 className={`${
                            proper.Status==true
                            ?"font-xl text-left font-semibold ml-10 text-green-500"
                            :"font-xl text-left font-semibold ml-10 text-red-500"
                        }`}>{`${
                            proper==true
                            ?"Đang hoạt động"
                            :"Đã bị khóa"
                        }`}</h4>
                    </div>
                    </div>
                    <div className="">
                    <h3 className="font-xl font-bold text-left mt-4 ml-4">Chi tiết</h3>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Số comment</h4>
                        <h4 className="font-xl text-left ml-20">{proper?.Comments}</h4>
                    </div>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Số bộ Anime đã xem:</h4>
                        <h4 className="font-xl text-left ml-4">{proper?.Animes}</h4>
                    </div>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Số tập đã xem</h4>
                        <h4 className="font-xl text-left ml-16">  {proper?.Episodes}</h4>
                    </div>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Số Anime theo dõi:</h4>
                        <h4 className="font-xl text-left ml-8">{proper?.FollowingAnimes}</h4>
                    </div>
                    <div className="mt-2 ml-4">
                        <div className="flex mt-2">
                            <h4 className="font-xl text-left ">Ngày tạo</h4>
                            <h4 className="font-xl text-left ml-20">{proper?.createDay}</h4>
                        </div>
                        <div className="flex mt-2">
                            <h4 className="font-xl text-left ">Ngày cập nhật</h4>
                            <h4 className="font-xl text-left ml-10">{proper?.updateDay}</h4>
                        </div>
                    </div>
                    </div>
    
                    <div className="mt-10 pl-2 pb-2 pr-2 flex justify-between">
                    <Button variant="contained" color="secondary" onClick={()=>{
                        setShow(false);
                        deleteBar(proper?.Id as number);}}>Xóa tài khoản</Button>
                    <Button variant="contained" onClick={()=>setShow(false)}>Đóng</Button>
                    <Button variant="contained" onClick={()=>lockUser(proper?.Id, proper?.Status)} >Khóa tài khoản</Button>
                    </div>
            </div>
            </div>
        )
    }




    function deleteBar(Id:number){
        console.log(users);
        let returnIndex:number;
        users.map((user) => {
            if (user.Id===Id)
            {
                returnIndex=users.indexOf(user);
                users.splice(returnIndex, 1);
            }
        })
        setBars([...users]);
    }

    function lockUser(Id:number, Status:boolean)
    {
        let returnIndexOfLock:number;
        users.map((user)=>{
            if (user.Id===Id){
                user.Status=!Status;
            }
        })
        setBars([...users]);

    }

    useEffect(()=>{

    },[bars]);



        return (
        <>
        <UserCard Id={ proper?.Id as number } Avt={proper?.Avt as string} 
        Email={proper?.Email as string} FaceBook={proper?.FaceBook as string} 
        Status={proper?.Status as boolean} Comments={proper?.Comments as number}
        Name={proper?.Name as string} Animes={proper?.Animes as number}
        Episodes={proper?.Episodes as number} FollowingAnimes={proper?.FollowingAnimes as number}
        createDay={proper?.createDay as string} updateDay={proper?.updateDay as string}
                    />
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
            <div key={bar.Id}  id={bar.Id.toString()} className="flex justify-between mt-5
            py-3 px-6 bg-white rounded-xl">
            <img src={bar.Avt} alt="#" />
            <h3 className="mt-4 text-left w-48 text-sm">{bar.Email}</h3>
            <h3 className="mt-4 text-left w-48 text-sm hidden">{bar.Name}</h3>
            <h3 className="mt-4 mr-14 text-sm">{bar.updateDay}</h3>
            <h3 className="mt-4 mr-10 text-sm">{bar.createDay}</h3>
            <h3  className={`
                mt-4 text-sm
                ${bar.Status===true
                    ? "text-green-500 font-semibold mr-12"
                    : "text-red-500 font-semibold mr-20"
                }`}>
                {`•
                 ${bar.Status===true
                    ?"Đang hoạt động"
                    :"Đã bị khóa"
                 }
                `}
            </h3>
            <div className="flex items-center relative right-0">
                <img src={ReSearch} className="cursor-pointer"  
                onClick={()=>{
                    setShow(true);
                    setProper(bar);
                    }}  />
                <img src={Lock} className="cursor-pointer" onClick={()=>lockUser(bar.Id, bar.Status)} />
                <img src={Delete} className="cursor-pointer" onClick={()=>deleteBar(bar.Id)} />
            </div>
        </div>
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