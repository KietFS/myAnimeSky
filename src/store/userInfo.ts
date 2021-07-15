import img1 from "../images/AvtImg1.svg";
import img2 from "../images/AvtImg2.svg";

export type user ={
    Id:number;
    Avt: string;
    Name: string;
    Email: string;
    FaceBook: string;
    Status: boolean;
    Comments: number;
    Animes: number;
    Episodes: number;
    FollowingAnimes: number;
    createDay: string;
    updateDay: string;
}



const users:user[]=[
    {
        Id: 1,
        Avt: img1,
        Name: 'Dung Nguyen',
        Email: 'dungnguyen20802@gmail.com',
        FaceBook: 'Dũng Nguyễn',
        Status: true,
        Comments:143,
        Animes: 10,
        Episodes: 239,
        FollowingAnimes: 5,
        createDay:"1 tháng trước",
        updateDay:"5 ngày trước",
    },

    {
        Id: 2,
        Avt: img2,
        Name: 'Tuấn Kiệt',
        Email: 'kietmakietna@gmail.com',
        FaceBook: 'Tuấn Kiệt',
        Status: true,
        Comments:101,
        Animes: 14,
        Episodes: 194,
        FollowingAnimes: 10,
        createDay:"2 tháng trước",
        updateDay:"3 ngày trước",
    },

    {
        Id: 3,
        Avt: img2,
        Name: 'Gia Bảo',
        Email: 'barokool@gmail.com',
        FaceBook: 'Baro Gia',
        Status: false,
        Comments:59,
        Animes: 21,
        Episodes: 576,
        FollowingAnimes: 4,
        createDay:"6 tháng trước",
        updateDay:"1 ngày trước",
    },
    {
        Id: 4,
        Avt: img1,
        Name: 'John Doe',
        Email: 'johnmtfkg@gmail.com',
        FaceBook: 'Văn Đại',
        Status: false,
        Comments:3,
        Animes: 12,
        Episodes: 12,
        FollowingAnimes: 3,
        createDay:"2 ngày trước",
        updateDay:"3 giờ trước",
    },
    {
        Id:5,
        Avt: img2,
        Name: 'Tiến Đạt',
        Email: 'datnguyen2403@gmail.com',
        FaceBook: 'Đạt Nguyễn',
        Status: true,
        Comments:83,
        Animes: 6,
        Episodes: 96,
        FollowingAnimes: 12,
        createDay:"10 tháng trước",
        updateDay:"4 ngày trước",
    },
    {
        Id: 6,
        Avt: img1,
        Name: 'Le Hai',
        Email: 'haribeocute@gmail.com',
        FaceBook: 'Hải Lê',
        Status: false,
        Comments:301,
        Animes: 5,
        Episodes: 40,
        FollowingAnimes: 2,
        createDay:"1 tháng trước",
        updateDay:"2 ngày trước",
    },
    {
        Id: 7,
        Avt: img1,
        Name: 'Hưng Kelvin',
        Email: 'hungdoan1234@gmail.com',
        FaceBook: 'Chấn Hưng',
        Status: true,
        Comments:20,
        Animes: 17,
        Episodes: 303,
        FollowingAnimes: 8,
        createDay:"6 tháng trước",
        updateDay:"1 tuần trước",
    },
    {
        Id: 8,
        Avt: img1,
        Name: 'TS Jinky',
        Email: 'sieutran@gmail.com',
        FaceBook: 'Sieu Tran',
        Status: true,
        Comments:20,
        Animes: 17,
        Episodes: 107,
        FollowingAnimes: 8,
        createDay:"1 năm trước",
        updateDay:"2 ngày trước",
    },
    {
        Id: 9,
        Avt: img2,
        Name: 'Hắc',
        Email: 'vanhienlehcmute@gmail.com',
        FaceBook: 'Văn Hiền Lê',
        Status: false,
        Comments:122,
        Animes: 9,
        Episodes: 111,
        FollowingAnimes: 4,
        createDay:"5 tháng trước",
        updateDay:"3 ngày trước",
    },
    {
        Id: 10,
        Avt: img2,
        Name: 'FoG_wibu',
        Email: 'nhatanh140302@gmail.com',
        FaceBook: 'Nhat Anh',
        Status: true,
        Comments:9,
        Animes: 23,
        Episodes: 386,
        FollowingAnimes: 8,
        createDay:"7 tháng trước",
        updateDay:"1 ngày trước",
    },
   
    
]

export default users;