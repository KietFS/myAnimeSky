import React from 'react'

type Props={
    Img: string;
    Title:string;
}


const MostViewsAnimes:React.FC<Props>= ({Img, Title}) => {
    return (
        <div>
            <div className="flex mt-3 px-3 rounded-md">
                <img src={Img} width={45} height={50} />
                <div className="ml-10">
                    <p className="text-sm font-bold">{Title}</p>
                    <p className="text-gray-500 text-sm mt-2">30 NGÀY QUA</p>
                </div>
            </div>
        </div>
    )
}

export default MostViewsAnimes
