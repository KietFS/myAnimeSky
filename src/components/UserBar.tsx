import React from 'react'
import Lock from "../images/lock.svg";
import Delete from "../images/delete.svg";
import ReSearch from "../images/userdetailsearch.svg"
import { Bar } from 'react-chartjs-2';
import CardImg from "../images/CardImg.svg";
import {Button} from "@material-ui/core";
import {useState} from "react";
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

type Props={
    Id?:number;
    Avt?: string;
    Name?: string;
    Email?: string;
    FaceBook?: string;
    Status?: boolean;
    Comments?: number;
    Animes?: number;
    Episodes?: number;
    FollowingAnimes?: number;
    createDay?: string;
    updateDay?: string;
}



const UserBar:React.FC<user> = ({Id, Avt, Name,  Email, FaceBook,  Status, Comments, Animes, Episodes, FollowingAnimes,  createDay,updateDay}) => {

    const [show,setShow]=useState(false);
    const [proper, setProper]=useState<user>({Id, Avt, Name,  Email, FaceBook,  Status, Comments, Animes, Episodes, FollowingAnimes,  createDay,updateDay});
    const UserCard:React.FC<Props> = (proper) => { 
        return (
            <div className={`${
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
                        <h4 className="font-xl text-left ml-20">{Name}</h4>
                    </div>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Email:</h4>
                        <h4 className="font-xl text-left ml-16">{Email}</h4>
                    </div>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Facebook:</h4>
                        <h4 className="font-xl text-left ml-10">{FaceBook}</h4>
                    </div>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Trạng thái</h4>
                        <h4 className={`${
                            Status==true
                            ?"font-xl text-left font-semibold ml-10 text-green-500"
                            :"font-xl text-left font-semibold ml-10 text-red-500"
                        }`}>{`${
                            Status==true
                            ?"Đang hoạt động"
                            :"Đã bị khóa"
                        }`}</h4>
                    </div>
                    </div>
                    <div className="">
                    <h3 className="font-xl font-bold text-left mt-4 ml-4">Chi tiết</h3>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Số comment</h4>
                        <h4 className="font-xl text-left ml-20">{Comments}</h4>
                    </div>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Số bộ Anime đã xem:</h4>
                        <h4 className="font-xl text-left ml-4">{Animes}</h4>
                    </div>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Số tập đã xem</h4>
                        <h4 className="font-xl text-left ml-16">  {Episodes}</h4>
                    </div>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Số Anime theo dõi:</h4>
                        <h4 className="font-xl text-left ml-8">{FollowingAnimes}</h4>
                    </div>
                    <div className="mt-2 ml-4">
                        <div className="flex mt-2">
                            <h4 className="font-xl text-left ">Ngày tạo</h4>
                            <h4 className="font-xl text-left ml-20">{createDay}</h4>
                        </div>
                        <div className="flex mt-2">
                            <h4 className="font-xl text-left ">Ngày cập nhật</h4>
                            <h4 className="font-xl text-left ml-10">{updateDay}</h4>
                        </div>
                    </div>
                    </div>
    
                    <div className="mt-10 pl-2 pb-2 pr-2 flex justify-between">
                    <Button variant="contained" color="secondary">Xóa tài khoản</Button>
                    <Button variant="contained" onClick={()=>setShow(false)}>Đóng</Button>
                    <Button variant="contained">Khóa tài khoản</Button>
                    </div>
            </div>
            </div>
        )
    }
        
    return (
        <div>
            <UserCard />
        <div key={Id} className="flex justify-between mt-5
        py-3 px-6 bg-white rounded-xl">
            <img src={Avt} alt="#" />
            <h3 className="mt-4 text-left w-48 text-sm">{Email}</h3>
            <h3 className="mt-4 text-left w-48 text-sm hidden">{Name}</h3>
            <h3 className="mt-4 mr-14 text-sm">{updateDay}</h3>
            <h3 className="mt-4 mr-10 text-sm">{createDay}</h3>
            <h3 className={`
                mt-4 text-sm
                ${Status===true
                    ? "text-green-500 font-semibold mr-12"
                    : "text-red-500 font-semibold mr-20"
                }`}>
                {`•
                 ${Status===true
                    ?"Đang hoạt động"
                    :"Đã bị khóa"
                 }
                `}
            </h3>
            <div className="flex items-center relative right-0">
                <img src={ReSearch} className="cursor-pointer" onClick={()=>{
                    setShow(true);
                    setProper({Id, Avt, Name,  Email, FaceBook,  Status, Comments, Animes, Episodes, FollowingAnimes,  createDay,updateDay});
                    }} />
                <img src={Lock} className="cursor-pointer"/>
                <img src={Delete} className="cursor-pointer"  />
            </div>
        </div>
        </div>
    );
}

export default UserBar
