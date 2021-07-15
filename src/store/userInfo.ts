import img1 from "../images/AvtImg1.svg";
import img2 from "../images/AvtImg2.svg";

export type user ={
    id: number;
    image: string;
    email: string;
    updateAt: string;
    status: boolean;
    createAt: string;
}

const users:user[]=[
    {
        id: 1,
        image:img1,
        email: "kietmakietna@gmail.com",
        updateAt:'2 ngày trước',
        status: false,
        createAt: "1 tháng trước",
    },
    {
        id:2,
        image: img1,
        email: 'tuankiet270802@gmail.com',
        updateAt: '5 ngày trước',
        status: false,
        createAt: '2 Tháng trước',
    },

    {
        id:3,
        image: img1,
        email: 'jonhdoe@gmail.com',
        updateAt: '1 tháng trước',
        status: true,
        createAt: '5 Tháng trước',
    },

    {
        id:4,
        image: img2,
        email: 'barokool@gmai.com',
        updateAt: '1 tuần trước',
        status: true,
        createAt: '3 Tháng trước', 
    },
    {
        id:5,
        image: img2,
        email: 'postmalone@gmail.com',
        updateAt: '6 ngày trước',
        status: true,
        createAt: '15 ngày trước',
    },
    {
        id:6,
        image: img2,
        email: 'rouzonemas@gmail.com',
        updateAt: '3 ngày trước',
        status: true,
        createAt: '2 Tháng trước',
    },
    {
        id:7,
        image: img2,
        email: 'pnguyenhaidang@gmail.com',
        updateAt: '5 ngày trước',
        status: true,
        createAt: '3 Tháng trước',
    },
    {
        id:8,
        image: img1,
        email: 'kietmakietn@gmai.com',
        updateAt: '2 ngày trước',
        status: false,
        createAt: '1 Tháng trước',
    },
    {
        id:9,
        image: img2,
        email: 'kietmakietn@gmai.com',
        updateAt: '2 ngày trước',
        status: true,
        createAt: '1 Tháng trước',
    },
    {
        id:10,
        image: img1,
        email: 'kietmakietn@gmai.com',
        updateAt: '2 ngày trước',
        status: false,
        createAt: '1 Tháng trước',
    },
    
]

export default users;