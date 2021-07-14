import React from 'react'

type Props = {
    Img: string;
    AnimeName:string;
    VoteTime:number;
    CommentTime:number;
    Views: number;
    
}
const AnimeInfo:React.FC<Props> = ({Img, AnimeName, VoteTime, CommentTime, Views}) => {
    return (
        <div className="flex items-center justify-between h-16 ">
            <img src={Img} className="mx-7" />
            <h3 className="text-gray-500 font-extrabold">{AnimeName}</h3>
            <h4 className="text gray-500">{VoteTime} đánh giá</h4>
            <h4 className="text-gray-500">{CommentTime} lượt bình luận</h4>
            <h4 className="text-gray-500">{Views} lượt xem</h4>
        </div>
    )
}

export default AnimeInfo
