import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaSortAlphaDown } from 'react-icons/fa';
import { useState } from 'react';
import animes from '../store/animesInfo';
import Lock from "../images/lock.svg";
import Delete from "../images/delete.svg";
import ReSearch from "../images/userdetailsearch.svg"
import FirstImg from "../images/1.svg";
import SecondImg from "../images/2.svg"
import {Button} from "@material-ui/core";
import CardImg from "../images/CardImg.svg";

interface Props{
    Id: number;
    Name: string;
    japaneseName: string;
    Description: string;
    Thumbnail: string;
    Status: boolean,
    Wallpaper: string;
    Author: string;
    Episodes: number;
    amoutEpisodes: number;
    Ratings:number;
    Comments: number;
    Views: Number;
    createBy:string;
    updateBy: string;
    createAt: string;
    updateAt: string;
}





const AnimeManage = () => {

    const [animeBars, setAnimeBar]=useState(animes);
    const [proper, setProper]=useState<Props>();
    const [show,setShow]=useState(false);
    const [showConfirmBoard,setShowConfirmBoard]=useState(false);
    const [showConfirmLockBoard,  setShowConfirmLockBoard]=useState(false);
    const[keyword, setKeyword] = useState("");

    const filterNames=animes.filter(
        (anime)=>
        anime.Name.toLowerCase().includes(keyword))
        
        const onInputChange = (e:React.FormEvent<HTMLInputElement>)=>{
            e.preventDefault();
            setKeyword(e.currentTarget.value.toLowerCase());
            if (e.currentTarget.value.toLowerCase())
                setAnimeBar([...filterNames]);
            else
                setAnimeBar(animes);
        }

        const searchClick = ()=>{

            console.log(animeBars);
        }

    const UserCard:React.FC<Props> = (proper) => { 
        return (
            <div id="usercard-item" className={`${
                show===false
                ? "hidden"
                : ""
            }`}>
            <div className="usercard">
                    <h2 className="font-xl font-bold text-center mt-2">Thông tin chi tiết</h2>
                    <h3 className="font-xl font-bold text-left ml-4">Thumbnail</h3>
                    <img src={CardImg}  className="userimg ml-36 "/>
                <div className="">
                    <h3 className="font-xl font-bold text-left ml-4">Thông tin cá nhân</h3>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Tên:</h4>
                        <h4 className="font-xl text-left ml-20">{proper?.Name}</h4>
                    </div>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Tác giả:</h4>
                        <h4 className="font-xl text-left ml-14">{proper?.Author}</h4>
                    </div>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Trạng thái</h4>
                        <h4 className={`${
                            proper.Status===true
                            ?"font-xl text-left font-semibold ml-10 text-green-500"
                            :"font-xl text-left font-semibold ml-10 text-yellow-500"
                        }`}>{`${
                            proper.Status===true
                            ?"Hoàn thành"
                            :"Đang cập nhật"
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
                        <h4 className="font-xl text-left ">Số lượt Views:</h4>
                        <h4 className="font-xl text-left ml-16 pl-1">{proper?.Views}</h4>
                    </div>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Số tập đã cập nhật</h4>
                        <h4 className="font-xl text-left ml-8 pl-1">  {proper?.Episodes}</h4>
                    </div>
                    <div className="flex mt-2 ml-4">
                        <h4 className="font-xl text-left ">Tổng số tập:</h4>
                        <h4 className="font-xl text-left ml-20 pl-1">{proper?.amoutEpisodes}</h4>
                    </div>
                    <div className="mt-2 ml-4">
                        <div className="flex mt-2">
                            <h4 className="font-xl text-left ">Người tạo:</h4>
                            <h4 className="font-xl text-left ml-20 pl-1">{proper?.createBy}</h4>
                        </div>
                        <div className="flex mt-2">
                            <h4 className="font-xl text-left ">Người cập nhật:</h4>
                            <h4 className="font-xl text-left ml-6 pl-5">{proper?.updateBy}</h4>
                        </div>
                    </div>
                    </div>
    
                    <div className="mt-10 pl-2 pb-2 pr-2 flex justify-between">
                    <Button variant="contained" color="secondary" onClick={()=>{
                        deleteBar(proper?.Id);
                        setShow(false);
                        }}>Xóa Anime</Button>
                    <div className="flex">
                    <div className="mr-2 "><Button variant="contained" onClick={()=>lockUser(proper?.Id, proper?.Status)} >Khóa Anime</Button></div>
                    <Button variant="contained" onClick={()=>setShow(false)}>Đóng</Button> 
                    </div>
                    </div>
            </div>
            </div>
        )
    }

    const ConfirmBoard:React.FC<Props> = (proper)=>{
        return (

            <div className={`${
                showConfirmBoard===false
                ? "hidden"
                : ""
            }`}>
     
                <div className="confirmboard-animepage" >
                    <h2 className="font-xl font-bold">Xác nhận xóa</h2>
                    <p className="text-xs text-gray-500 mt-1"> Bạn có chắc rằng muốn xóa Anime {proper.Name as string} ?</p>
                    <div className="float-right mt-20 flex">
                        <Button variant="contained" onClick={()=>setShowConfirmBoard(false)}>Hủy Bỏ</Button>
                        <div className="ml-2"><Button variant="contained" color="secondary" onClick={()=>{deleteBar(proper?.Id); 
                            setShowConfirmBoard(false)}}>Đồng ý</Button></div>
                    </div>
                </div>
            </div>
        )
    }

    const ConfirmLockBoard:React.FC<Props> = (proper)=>{
        return (

            <div className={`${
                showConfirmLockBoard===false
                ? "hidden"
                : ""
            }`}>
     
                <div className="confirmboard-animepage" >
                    <h2 className="font-xl font-bold">Xác nhận  {`${proper.Status===true ? "khóa" : "gỡ khóa"}`} Anime</h2>
                    <p className="text-xs text-gray-500 mt-1"> Bạn có chắc rằng muốn {`${proper.Status===true ? "khóa" : "gỡ khóa"}`} Anime {proper.Name as string} ?</p>
                    <div className="float-right mt-20 mb-12 flex">
                        <Button variant="contained" onClick={()=>setShowConfirmLockBoard(false)}>Hủy Bỏ</Button>
                        <div className="ml-2"><Button variant="contained" color="secondary" onClick={()=>{lockUser(proper?.Id, proper?.Status); 
                            setShowConfirmLockBoard(false)}}>Đồng ý</Button></div>
                    </div>
                </div>
            </div>
        )
    }



    function deleteBar(Id:number){
        let returnIndex:number;
        animes.map((anime) => {
            if (anime.Id===Id)
            {
                returnIndex=animes.indexOf(anime);
                animes.splice(returnIndex, 1);
            }
        })
        setAnimeBar([...animes]);
    }

    function lockUser(Id:number, Status:boolean)
    {
        let returnIndexOfLock:number;
        animes.map((anime)=>{
            if (anime.Id===Id){
                anime.Status=(!Status);
            }
        })
        setAnimeBar([...animes]);
    }


    function sorted(){
        animes.sort((a,b)=>(a.Name > b.Name) ? 1 : -1);
        setAnimeBar([...animes]);
      }





    return (
        <>
        <UserCard Id={ proper?.Id as number } Thumbnail={proper?.Thumbnail as string} 
        japaneseName={proper?.japaneseName as string} Description={proper?.Description as string} 
        Status={proper?.Status as boolean} Comments={proper?.Comments as number}
        Views={proper?.Views as number} amoutEpisodes={proper?.amoutEpisodes as number}
        Episodes={proper?.Episodes as number} createAt={proper?.createAt as string}
        createBy={proper?.createBy as string} updateAt={proper?.updateAt as string} updateBy={proper?.updateBy as string}
        Ratings={proper?.Ratings as number} Name={proper?.Name as string} Author={proper?.Author as string} Wallpaper={proper?.Wallpaper as string} 
                    />
        <ConfirmBoard Id={ proper?.Id as number } Thumbnail={proper?.Thumbnail as string} 
        japaneseName={proper?.japaneseName as string} Description={proper?.Description as string} 
        Status={proper?.Status as boolean} Comments={proper?.Comments as number}
        Views={proper?.Views as number} amoutEpisodes={proper?.amoutEpisodes as number}
        Episodes={proper?.Episodes as number} createAt={proper?.createAt as string}
        createBy={proper?.createBy as string} updateAt={proper?.updateAt as string} updateBy={proper?.updateBy as string}
        Ratings={proper?.Ratings as number} Name={proper?.Name as string} Author={proper?.Author as string} Wallpaper={proper?.Wallpaper as string} 
         />

        <ConfirmLockBoard Id={ proper?.Id as number } Thumbnail={proper?.Thumbnail as string}
        japaneseName={proper?.japaneseName as string} Description={proper?.Description as string} 
        Status={proper?.Status as boolean} Comments={proper?.Comments as number}
        Views={proper?.Views as number} amoutEpisodes={proper?.amoutEpisodes as number}
        Episodes={proper?.Episodes as number} createAt={proper?.createAt as string}
        createBy={proper?.createBy as string} updateAt={proper?.updateAt as string} updateBy={proper?.updateBy as string}
        Ratings={proper?.Ratings as number} Name={proper?.Name as string} Author={proper?.Author as string} Wallpaper={proper?.Wallpaper as string}
        />


        <section className="px-10">
            <div className="flex justify-between items-center mt-16">
                <h1 className="text-3xl font-semibold">Danh sách Anime</h1>
                <div className="flex items-center justify-center">
                    <input className="search-bar" placeholder="Tìm kiếm theo tên Anime" type="text" onChange={onInputChange}></input>
                    <FaSearch className="search-icon" />
                </div>
            </div>

            <div className="mt-10">
                <button className="flex items-center bg-gray-100 pl-2 pr-20 py-2 rounded" onClick={()=>sorted()}>
                    <FaSortAlphaDown className="text-lg" />
                    <h3 className="font-semibold text-lg ml-5">Sắp xếp</h3>
                </button>
            </div>


            <div className="mt-10 shadow-box">
                <header className="flex items-center justify-between bg-gray-900 px-6 py-5 rounded-b-none rounded-t-xl">
                    <h3 className="text-white">Thumbnail</h3>
                    <h3 className="text-white">Tên</h3>
                    <h3 className="text-white">Số tập</h3>
                    <h3 className="text-white">Trạng thái</h3>
                    <h3 className="text-white">Hành động</h3>
                </header>

                {animeBars.map((animeBar)=>{
                    return (
                        <div key={animeBar.Id}  className="flex justify-between mt-5
                        py-3 px-6 bg-white rounded-xl">
                            <img src={animeBar.Thumbnail} alt="#" />
                            <h3 className="mt-4 text-left w-56 ml-4 text-sm">{animeBar.Name}</h3>
                            <h3 className="mt-4 text-center w-48 mr-12 text-sm">{animeBar.Episodes}/{animeBar.amoutEpisodes}</h3>
                            <h3  className={`
                            mt-4 text-sm
                            ${animeBar.Status===false
                            ? "text-yellow-500 font-semibold mr-32 pr-2"
                            : "text-green-500 font-semibold mr-32 pr-6"
                            }`}>
                            {`•
                             ${animeBar.Status===false
                            ?"Đang cập nhật"
                            :"Hoàn thành"
                             }
                            `}
                            </h3>
                            <div className="flex items-center relative right-0">
                                <img className="cursor-pointer" src={ReSearch} alt ="/" onClick={()=>{
                                setShow(true);
                                setProper(animeBar);
                                }}  />
                                <img className="cursor-pointer" src={Lock} alt ="/" 
                                 onClick={()=>{
                                    setShowConfirmLockBoard(true);
                                    setProper(animeBar);}}
                                />
                                <img className="cursor-pointer" src={Delete} alt="/"
                                 onClick={()=>{
                                    setShowConfirmBoard(true);
                                    setProper(animeBar);
                                    }} 
                                 /> 
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

export default AnimeManage
