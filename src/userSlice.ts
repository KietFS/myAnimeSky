import { createSlice } from "@reduxjs/toolkit";


type stateType = {
    name: any;
    email: any;
    photo: any;
}

type GlobalState = {
    user:{
        name: any;
        email: any;
        photo: any;
    }
}
const initialState = {
    name:"",
    email:"",
    photo:"",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setUserLogin: (state:stateType, action)=>{
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        setSignOut: (state:stateType) => {
            state.name=null;
            state.email=null;
            state.photo=null;
        }
    }
})

export const { setUserLogin, setSignOut } = userSlice.actions;

export const selectUserName = (state:GlobalState)=> state.user.name;
export const selectUserEmail = (state:GlobalState)=> state.user.email;
export const selectUserPhoto = (state:GlobalState)=>state.user.photo;

export default userSlice.reducer;