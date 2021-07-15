import React from 'react';

type Props={
    Img: string;
    Name: string;
    Views: number;
}
const AddictedUsers:React.FC<Props> = ({Img,Name,Views}) => {
    return (
        <div>
            <div className="mb-6 flex">
                <img className="mr-3" src={Img} />
                <div className="ml-2">
                    <h3 className="font-bold">{Name}</h3>
                    <p className="w-32 text-gray-400">Đã xem {Views} tập</p>
                </div>
            </div>
        </div>
    )
}

export default AddictedUsers
