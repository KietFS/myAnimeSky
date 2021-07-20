import thumbnail1 from "../images/thumbnail.svg"
import img1 from "../images/AvtImg1.svg"
import FirstImg from "../images/1.svg";
import SecondImg from "../images/2.svg";

export type anime = {
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

const animes:anime[]=[
    {
        Id:1,
        Name: "The Promised Neverland Season 2",
        japaneseName: "Kuroiwa Medaka ni Watashi no Kawaii ga Tsuujinai",
        Description: "Aventure, Harem, 16+",
        Thumbnail: thumbnail1,
        Status: false,
        Wallpaper: img1,
        Author: 'Singeki Sakai',
        Episodes: 8,
        amoutEpisodes: 12,
        Ratings: 4,
        Comments: 145,
        Views: 11867,
        createBy: 'Dung Nguyen',
        updateBy: 'Tuan Kiet',
        createAt: '3 ngày trước',
        updateAt: '5 ngày trước'
    }
    ,
    {
        Id:2,
        Name: "Fullmetal Alchemist: Brotherhood",
        japaneseName: "Hagane no Renkinjutsushi: Fullmetal Alchemist",
        Description: "Action, Military, Adventure, Comedy, Drama, Magic, Fantasy, Shounen",
        Thumbnail: thumbnail1,
        Status: false,
        Wallpaper: FirstImg,
        Author: 'Hiromu Arakawa',
        Episodes: 14,
        amoutEpisodes: 25,
        Ratings: 5,
        Comments: 200,
        Views: 964,
        createBy: 'Dung Nguyen',
        updateBy: 'Tuan Kiet',
        createAt: '3 ngày trước',
        updateAt: '5 ngày trước'
    },
    {
        Id:3,
        Name: "Steins;Gate",
        japaneseName: "STEINS;GATE",
        Description: " Sci-Fi, Psychological, Drama, Thriller",
        Thumbnail: FirstImg,
        Status: false,
        Wallpaper: FirstImg,
        Author: 'Hiromu Arakawa',
        Episodes: 6,
        amoutEpisodes: 28,
        Ratings: 4,
        Comments: 132,
        Views: 1437,
        createBy: 'Dung Nguyen',
        updateBy: 'Tuan Kiet',
        createAt: '3 ngày trước',
        updateAt: '5 ngày trước'
    },
    {
        Id:4,
        Name: "Newton's Flower Buds Webtoon",
        japaneseName: "Newton's Flower Buds Webtoon",
        Description: "Adventure, Comedy, Drama, Magic, Fantasy",
        Thumbnail:  FirstImg,
        Status: false,
        Wallpaper: thumbnail1,
        Author: 'Hiromu Arakawa',
        Episodes: 24,
        amoutEpisodes: 25,
        Ratings: 5,
        Comments: 63,
        Views: 9235,
        createBy: 'Baro Gia',
        updateBy: 'Tuan Kiet',
        createAt: '10 tháng trước',
        updateAt: '1 ngày trước'
    },
    {
        Id:5,
        Name: "Darker Than Black",
        japaneseName: "Hagane no Renkinjutsushi: Fullmetal Alchemist",
        Description: "Action, Military, Adventure, Comedy, Drama, Magic, Fantasy, Shounen",
        Thumbnail: SecondImg,
        Status: true,
        Wallpaper: SecondImg,
        Author: 'Senju Kurikawa',
        Episodes: 10,
        amoutEpisodes: 10,
        Ratings: 3,
        Comments: 95,
        Views: 1967,
        createBy: 'Tuan Kiet',
        updateBy: 'Tuan Kiet',
        createAt: '6 tháng trước',
        updateAt: '3 ngày trước'
    },
    {
        Id:6,
        Name: "Gintama Season 4",
        japaneseName: "Gintama ",
        Description: "Action, Comedy, Historical, Parody, Samurai, Sci-Fi, Shounen",
        Thumbnail: FirstImg,
        Status: false,
        Wallpaper: img1,
        Author: 'Hiromu Arakawa',
        Episodes: 293,
        amoutEpisodes: 340,
        Ratings: 4,
        Comments: 145,
        Views: 11867,
        createBy: 'Dung Nguyen',
        updateBy: 'Tuan Kiet',
        createAt: '10 tháng trước',
        updateAt: '5 ngày trước'
    },
    {
        Id:7,
        Name: "Fruits Basket: The Final",
        japaneseName: "Fruits Basket: The Final",
        Description: "Slice of Life, Comedy, Supernatural, Drama, Romance, Shoujo",
        Thumbnail: thumbnail1,
        Status: true,
        Wallpaper: img1,
        Author: 'Hiromu Arakawa',
        Episodes: 13,
        amoutEpisodes: 13,
        Ratings: 5,
        Comments: 156,
        Views: 1967,
        createBy: 'Dung Nguyen',
        updateBy: 'Tuan Kiet',
        createAt: '3 ngày trước',
        updateAt: '1 tháng trước'
    },
    {
        Id:8,
        Name: "A Silent Voice",
        japaneseName: "Koe no Katachi",
        Description: "Drama, School, Shounen",
        Thumbnail: SecondImg,
        Status: true,
        Wallpaper: img1,
        Author: 'Hiromu Arakawa',
        Episodes: 1,
        amoutEpisodes: 1,
        Ratings: 5,
        Comments: 193,
        Views: 2507,
        createBy: 'Baro Gia',
        updateBy: 'Baro Gia',
        createAt: '3 ngày trước',
        updateAt: '3 ngày trước'
    },
    {
        Id:9,
        Name: "Your Name",
        japaneseName: "Kimi no Na wa.",
        Description: "Romance, Supernatural, School, Drama",
        Thumbnail: thumbnail1,
        Status: true,
        Wallpaper: img1,
        Author: 'Shinomiya, Yoshitoshi',
        Episodes: 1,
        amoutEpisodes: 1,
        Ratings: 5,
        Comments: 1,
        Views: 1,
        createBy: 'Tuan Kiet',
        updateBy: 'Tuan Kiet',
        createAt: '1 tháng trước',
        updateAt: '1 tháng trước'
    },
    {
        Id:10,
        Name: "Death Note",
        japaneseName: "Death Note",
        Description: " Mystery, Police, Psychological, Supernatural, Thriller, Shounen",
        Thumbnail: FirstImg,
        Status: false,
        Wallpaper: img1,
        Author: 'Araki, Tetsurou',
        Episodes: 36,
        amoutEpisodes: 37,
        Ratings: 4,
        Comments: 159,
        Views: 12917,
        createBy: 'Dung Nguyen',
        updateBy: 'Dung Nguyen',
        createAt: '2 tháng trước',
        updateAt: '1 ngày trước'
    },
]

export default animes;