import React from 'react'


type Props={
    Img: string;
    Name: string;
    Like: number;
    Cmt: number;
}


const TypicalUsers:React.FC<Props> = ({Img, Name, Like, Cmt}) => {
    return (
        <div className="mb-6">
            <div className="flex">
                <img className="" src={Img} />
                <div className="ml-2">
                    <h3 className="font-bold">{Name}</h3>
                    <div className="flex">
                        <p className="w-16 text-gray-400">{Like} likes</p>
                        <p className="px-1 text-gray-400">•</p>
                        <p className="w-32 text-gray-400">{Cmt} comments</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypicalUsers
