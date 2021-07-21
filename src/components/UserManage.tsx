import React from 'react'
import { FaSearch, FaSortAlphaDown } from 'react-icons/fa';
import { useState,useEffect } from 'react';
import users from "../store/userInfo";
import Lock from "../images/lock.svg";
import Delete from "../images/delete.svg";
import ReSearch from "../images/userdetailsearch.svg"
import Button from "@material-ui/core/Button"
import CardImg from "../images/CardImg.jpg";
import { number } from 'yargs';
import { stringify } from 'querystring';
import { Bar } from 'react-chartjs-2';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { Card } from '@material-ui/core';


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



interface newProps {
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
    const [showConfirmBoard,setShowConfirmBoard]=useState(false);
    const [showConfirmLockBoard,  setShowConfirmLockBoard]=useState(false);
    const[keyword, setKeyword] = useState("");
    const filterNames=users.filter(
        (user)=>
        user.Name.toLowerCase().includes(keyword))
        
        const onInputChange = (e:React.FormEvent<HTMLInputElement>)=>{
            e.preventDefault();
            setKeyword(e.currentTarget.value.toLowerCase());
            if (e.currentTarget.value.toLowerCase())
                setBars([...filterNames]);
            else
                setBars(users);
        }

        const searchClick = ()=>{

            console.log(bars);
        }

    const handleOpenConfirmBoard = () => {
      setShowConfirmBoard(true);
    };
  
    const handleClosingConfirmBoard = () => {
      setShowConfirmBoard(false);
    };

    const handleOpenConfirmLockBoard = () => {
        setShowConfirmLockBoard(true);
    };
    
      const handleClosingConfirmLockBoard = () => {
        setShowConfirmLockBoard(false);
    };
    const handleOpen = () => {
        setShow(true);
    };
    
      const handleClosing = () => {
        setShow(false);
    };


    const UserCard:React.FC<Props> = (proper) => { 
        return (
            <div>
              <Dialog
                open={show}
                onClose={handleClosing}
                fullWidth
                maxWidth="xs"
              >
                <DialogTitle style={{ cursor: 'move', textAlign:'center' }} id="draggable-dialog-title">
                  Thông tin chi tiết
                </DialogTitle>
                <DialogContent>
                    <h2 className="font-bold text-left text-lg">Avatar</h2>
                        <img className="cardimage" src={CardImg} alt="/" />
                    <h2 className="font-bold text-left text-lg mt-4">Thông tin cá nhân</h2>
                    <div className="flex justify-between" >
                        <h3 className="text-left font-semibold mt-2 text-md">Tên: </h3>
                        <h3 className="text-left font-semibold mt-2 text-md">{proper?.Name as string}</h3>
                    </div>
                    <div className="flex justify-between" >
                        <h3 className="text-left font-semibold mt-2 text-md">Email: </h3>
                        <h3 className="text-left font-semibold mt-2 text-md">{proper?.Email as string}</h3>
                    </div>
                    <div className="flex justify-between" >
                        <h3 className="text-left font-semibold mt-2 text-md">FaceBook: </h3>
                        <h3 className="text-left font-semibold mt-2 text-md">{proper?.FaceBook as string}</h3>
                    </div>
                    <div className="flex justify-between" >
                        <h3 className="text-left font-semibold mt-2 text-md">Trạng thái: </h3>
                        <h3 className={`${proper.Status===true ? "text-left font-semibold mt-2 text-md text-green-500" : "text-left font-semibold mt-2 text-md text-red-500"}`}
                        >{`${proper.Status===true ? "Đang hoạt động" : "Đã bị khóa"}`}</h3>
                    </div>

                    <h2 className="font-bold text-left text-lg mt-6">Chi tiết</h2>
                    <div className="flex justify-between" >
                        <h3 className="text-left font-semibold mt-2 text-md">Số comment: </h3>
                        <h3 className="text-left font-semibold mt-2 text-md">{proper?.Comments as number}</h3>
                    </div>
                    <div className="flex justify-between" >
                        <h3 className="text-left font-semibold mt-2 text-md">Số bộ anime đã xem: </h3>
                        <h3 className="text-left font-semibold mt-2 text-md">{proper?.Animes as number}</h3>
                    </div>
                    <div className="flex justify-between" >
                        <h3 className="text-left font-semibold mt-2 text-md">Số tập đã xem: </h3>
                        <h3 className="text-left font-semibold mt-2 text-md">{proper?.Episodes as number}</h3>
                    </div>
                    <div className="flex justify-between" >
                        <h3 className="text-left font-semibold mt-2 text-md">Số anime đang theo dõi: </h3>
                        <h3 className="text-left font-semibold mt-2 text-md">{proper?.FollowingAnimes as number}</h3>
                    </div>
                </DialogContent>
                <div className="mt-6">
                <DialogActions>
                <div className="mr-12">
                <Button autoFocus onClick={()=>{deleteBar(proper?.Id as number); handleClosing()}}color="secondary" variant="contained">
                   Xóa tài khoản
                  </Button>
                  </div>
                    
                  <Button autoFocus onClick={handleClosing} color="default" variant="contained">
                    Đóng
                  </Button>
                  <Button onClick={()=>{lockUser(proper?.Id as number, proper?.Status); handleClosing()}}  color="default" variant="contained">
                    Khóa tài khoản
                  </Button>
                </DialogActions>
                </div>
              </Dialog>
            </div>
          );
    }


   const  ConfirmBoard:React.FC<Props> = (proper) => {
        return (
          <div>
            <Dialog
              open={showConfirmBoard}
              onClose={handleClosingConfirmLockBoard}
              fullWidth
            >
              <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                Xác nhận xóa
              </DialogTitle>
              <DialogContent>
                <DialogContentText className="text-sm text-gray-500">
                  Bạn có chắc rằng muốn xóa người dùng {proper?.Name} ?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClosingConfirmBoard} color="default" variant="contained">
                  Hủy bỏ
                </Button>
                <Button onClick={()=>{deleteBar(proper?.Id as number); handleClosingConfirmBoard()}} color="secondary" variant="contained">
                  Đồng ý
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      }

    const ConfirmLockBoard:React.FC<Props> = (proper)=>{
        return (
            <div>
              <Dialog
                open={showConfirmLockBoard}
                onClose={handleClosingConfirmBoard}
                fullWidth
              >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                  Xác nhận xóa
                </DialogTitle>
                <DialogContent>
                  <DialogContentText className="text-sm text-gray-500">
                    Bạn có chắc rằng muốn {`${proper?.Status===true ? "khóa " : "gỡ khóa "}`} người dùng {proper?.Name} ?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClosingConfirmLockBoard} color="default" variant="contained">
                    Hủy bỏ
                  </Button>
                  <Button onClick={()=>{lockUser(proper?.Id as number, proper?.Status); handleClosingConfirmLockBoard()}} color="secondary" variant="contained">
                    Đồng ý
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          );
    }





    function deleteBar(Id:number){
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
                user.Status=(!Status);
            }
        })
        setBars([...users]);
    }


    function sorted(){
        users.sort((a,b)=>(a.Name > b.Name) ? 1 : -1);
        setBars([...users]);
      }
        return (
        <>
        <UserCard Id={ proper?.Id as number } Avt={proper?.Avt as string} 
        Email={proper?.Email as string} FaceBook={proper?.FaceBook as string} 
        Status={proper?.Status as boolean} Comments={proper?.Comments as number}
        Name={proper?.Name as string} Animes={proper?.Animes as number}
        Episodes={proper?.Episodes as number} FollowingAnimes={proper?.FollowingAnimes as number}
        createDay={proper?.createDay as string} updateDay={proper?.updateDay as string}
                    />
        <ConfirmBoard Id={ proper?.Id as number } Avt={proper?.Avt as string} 
        Email={proper?.Email as string} FaceBook={proper?.FaceBook as string} 
        Status={proper?.Status as boolean} Comments={proper?.Comments as number}
        Name={proper?.Name as string} Animes={proper?.Animes as number}
        Episodes={proper?.Episodes as number} FollowingAnimes={proper?.FollowingAnimes as number}
        createDay={proper?.createDay as string} updateDay={proper?.updateDay as string}
         />

        <ConfirmLockBoard Id={ proper?.Id as number } Avt={proper?.Avt as string} 
        Email={proper?.Email as string} FaceBook={proper?.FaceBook as string} 
        Status={proper?.Status as boolean} Comments={proper?.Comments as number}
        Name={proper?.Name as string} Animes={proper?.Animes as number}
        Episodes={proper?.Episodes as number} FollowingAnimes={proper?.FollowingAnimes as number}
        createDay={proper?.createDay as string} updateDay={proper?.updateDay as string} />




        <section className="px-10">
            <div className="flex justify-between items-center mt-16">
                <h1 className="text-3xl font-semibold">Người dùng</h1>
                <div className="flex items-center justify-center">
                    <input className="search-bar" placeholder="Tìm kiếm theo tên" type="text" onChange={onInputChange}></input>
                    <FaSearch className="search-icon cursor-pointer" onClick={()=>searchClick} />
                </div>
            </div>

            <div className="mt-10">
                <button className="flex items-center bg-gray-100 pl-2 pr-20 py-2 rounded " onClick={()=>sorted()}>
                    <FaSortAlphaDown className="text-lg" />
                    <h3 className="font-semibold text-lg ml-5">Sắp xếp</h3>
                </button>
            </div>
            
            <div className="mt-10 shadow-box">
                <header className="flex items-center justify-between bg-gray-900 px-6 py-5 rounded-b-none rounded-t-xl">
                    <h3 className="text-white">Avatar</h3>
                    <h3 className="text-white">Tài khoản</h3>
                    <h3 className="text-white">Vào lần cuối</h3>
                    <h3 className="text-white">Ngày tạo</h3>
                    <h3 className="text-white">Trạng thái</h3>
                    <h3 className="text-white">Hành động</h3>
                </header>
                {bars.map((bar)=>{

                    return (   
            <div key={bar.Id}  className="flex justify-between mt-5
            py-3 px-3 bg-white rounded-xl">
            <div className="flex w-52 mr-2"> 
                <img src={bar.Avt} alt="#" className="inline mr-4" />
                <h3 className="mt-4 text-left text-sm">{bar.Email}</h3>
            </div>
            <div className="flex ml-4">
            <h3 className="mt-4 text-sm text-left w-32 ">{bar.updateDay}</h3>
            <h3 className="mt-4 text-sm text-left ml-4 w-32  ">{bar.createDay}</h3>
            <h3  className={`
                mt-4 text-sm
                ${bar.Status===true
                    ? "text-green-500 text-left w-36 ml-4  font-semibold "
                    : "text-red-500 text-left w-36 ml-4 font-semibold"
                }`}>
                {`•
                 ${bar.Status===true
                    ?"Đang hoạt động"
                    :"Đã bị khóa"
                 }
                `}
            </h3>
            </div>
            <div className="flex items-center relative right-0">
                <img src={ReSearch} className="cursor-pointer" alt="/" 
                onClick={()=>{
                    setShow(true);
                    setProper(bar);
                    }}  />
                <img src={Lock} className="cursor-pointer" alt="/" onClick={()=>{
                    setShowConfirmLockBoard(true);
                    setProper(bar);}} />
                <img src={Delete} className="cursor-pointer" alt="/" onClick={()=>{
                    handleOpenConfirmBoard();
                    setProper(bar);
                    }} />
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