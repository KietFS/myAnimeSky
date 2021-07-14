import React from 'react'
import "../index.css";
import Bell from "../images/Bell.svg";
import Avt from "../images/Avatart.svg";
import Vector from "../images/Vector.svg";
import Img1 from "../images/image_1.svg";
import LastUpdatedAnimes from "./LastUpdatedAnimes";
import MostViewsAnimed from "./MostViewsAnimes";
import FirstImg from "../images/1.svg";
import SecondImg from "../images/2.svg";
import LoginBar from './LoginBar';
const News = () => {
    return (
        <section className="pt-10">
            <LoginBar />
            <div className="mt-20">
                <img className="newsImg" src={Img1} />
            </div>
            <div className="px-10 mt-4">
                <div className="mt-8">
                    <h2 className="font-bold text-xl">Anime mới cập nhật</h2>
                    <p className="text-gray-500 text-sm mt-2">30 NGÀY QUA</p>
                    <div className="mt-8">
                        <LastUpdatedAnimes Img={FirstImg} Title="Newton's Flower Buds Webtoon" />
                        <LastUpdatedAnimes Img={SecondImg} Title="Ore no Imouto ga Konnani" />
                        <LastUpdatedAnimes Img={SecondImg} Title="Hozuki no Gekokujou..." />
                        <LastUpdatedAnimes Img={FirstImg} Title="Đối Phương Phải Tỏ Tình Trước" />
                    </div>
                </div>
            </div>

            <div className="px-10 mt-14">
                <div className="mt-8">
                    <h2 className="font-bold text-xl">Anime nhiều lượt xem</h2>
                    <p className="text-gray-500 text-sm mt-2">30 NGÀY QUA</p>
                    <div className="mt-8">
                        <MostViewsAnimed Img={SecondImg} Title="Newton's Flower Buds" />
                        <MostViewsAnimed Img={SecondImg} Title="Ore no Imouto ga Konnani" />
                        <MostViewsAnimed Img={SecondImg} Title="Honzuki no Gekokujou" />
                        <MostViewsAnimed Img={SecondImg} Title="Đối Phương Phải Tỏ Tình Trước" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News
