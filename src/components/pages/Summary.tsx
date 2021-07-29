import React from 'react'
import "../../index.css";
import {FaSearch} from "react-icons/fa";
import PlayButton from "../../images/playButton.jpg";
import AmountUsers from "../../images/amountUsers.jpg";
import AccessTime from "../../images/acessTimes.jpg";
import Rating from "../../images/rating.jpg";
import BarChart from './BarChart';
import AnimeInfo from "./AnimeInfo";
import FirstImg from "../../images/1.jpg";
import SecondImg from "../../images/2.jpg";
const Summary = () => {
    return (
        <section className="px-10">
            <div className="flex justify-between items-center mt-16">
                <h1 className="text-3xl font-semibold">Tổng Quan</h1>
                <div className="flex items-center justify-center">
                    <input className="search-bar" placeholder="Tìm kiếm" type="text"></input>
                    <FaSearch className="search-icon" />
                </div>
            </div>
            <div className="statics mt-10 grid grid-cols-4">
                <div className="static-children">
                    <img src={PlayButton} alt="/" />
                    <p className="py-5">Tổng số <br></br>bộ Anime</p>
                    <h2 className="font-extrabold">105</h2>
                </div>
                <div className="static-children">
                    <img src={AmountUsers} alt="/" />
                    <p className="py-5">Tổng số <br></br>người dùng</p>
                    <h2 className="font-extrabold">23</h2>
                </div>
                <div className="static-children">
                    <img src={AccessTime} alt="/" />
                    <p className="py-5">Tổng số <br></br>lượt đánh giá </p>
                    <h2 className="font-extrabold">214</h2>
                </div>
                <div className="static-children">
                    <img src={Rating} alt="/" />
                    <p className="py-5">Tổng số <br></br>lượt đánh giá</p>
                    <h2 className="font-extrabold">214</h2>
                </div>

            </div>
            <div className="mt-20">
                <div className="bar-content flex justify-between items-center pb-10">
                    <h1 className="text-3xl font-semibold">1051 Lượt truy cập</h1>
                    <p className="text-sm text-gray-500">30 ngày qua</p>
                </div>
                <BarChart />
            </div>

            <div className="mt-20">
                <div className="bar-content flex justify-between items-center pb-10">
                    <h1 className="text-3xl font-semibold">Anime nổi bật </h1>
                    <p className="text-sm text-gray-500">TUẦN QUA</p>
                </div>
                <AnimeInfo Img={FirstImg} AnimeName="Newton's Flower Buds Webtoon" VoteTime={123} CommentTime={23} Views={4133} />
                <AnimeInfo Img={SecondImg} AnimeName="Newton's Flower Buds Webtoon" VoteTime={103} CommentTime={13} Views={3092} />
                <AnimeInfo Img={FirstImg} AnimeName="Newton's Flower Buds Webtoon" VoteTime={89} CommentTime={10} Views={2300} />
                <AnimeInfo Img={SecondImg} AnimeName="Newton's Flower Buds Webtoon" VoteTime={55} CommentTime={9} Views={1032} />
                <AnimeInfo Img={FirstImg} AnimeName="Newton's Flower Buds Webtoon" VoteTime={21} CommentTime={8} Views={983} />
            </div>

        </section>
    )
}

export default Summary
