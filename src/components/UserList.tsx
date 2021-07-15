import React from 'react'
import Bell from "../images/Bell.svg";
import Avt from "../images/Avatart.svg";
import Vector from "../images/Vector.svg";
import Avt1 from "../images/AvtImg1.svg";
import Avt2 from "../images/AvtImg2.svg";
import TypicalUsers from "./TypicalUsers";
import AddictedUsers from "./AddictedUsers";
import LoginBar from './LoginBar';
const UserList = () => {
    return (
        <section className="pt-10">
            <LoginBar />

            <div className="px-10 mt-32">
                <div className="mt-8">
                    <h2 className="font-bold text-xl">Người dùng nổi bật</h2>
                    <p className="text-gray-500 font-bold text-xs mt-2 mb-12">30 NGÀY QUA</p>
                    <div className="mt-8">
                    <TypicalUsers Img={Avt1} Name="Pham Nguyen" Like={153} Cmt={39}  />
                    <TypicalUsers Img={Avt2} Name="Gnabry" Like={100} Cmt={10}  />
                    <TypicalUsers Img={Avt2} Name="Dababy"  Like={95} Cmt={40} />
                    <TypicalUsers Img={Avt1} Name="Dababy"  Like={50} Cmt={34} />
                    <TypicalUsers Img={Avt1} Name="Gnabry" Like={50} Cmt={33}  />
                    </div>
                </div>
            </div>

            <div className="px-10 mt-20">
                <div className="mt-8">
                    <h2 className="font-bold text-xl">Nghiện Anime</h2>
                    <p className="text-gray-500 font-bold text-xs mt-2 mb-12">30 NGÀY QUA</p>
                    <div className="mt-8">
                    <AddictedUsers Img={Avt1} Name="Pham Nguyen" Views={21}   />
                    <AddictedUsers Img={Avt1} Name="Dababy" Views={538}   />
                    <AddictedUsers Img={Avt1} Name="Gnabry"  Views={402}  />
                    <AddictedUsers Img={Avt2} Name="Gnabry" Views={321}  />
                    <AddictedUsers Img={Avt2} Name="Dababy" Views={98}  />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserList
