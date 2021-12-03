import { createSlice } from "@reduxjs/toolkit";
import { userInteface } from "../types/userTypes";


interface userI  {
  user: userInteface,
  loader: boolean,
  error: string | null,
}

const initialState: userI = {
  user: {username: '', email: '', password: ''},
  loader: false,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUserPending: (state, action)=> {
      state.loader = true
    },
    registersUserFullfilled: (state, action) => {
      state.user = action.payload;
      state.loader = false;
      state.error = null;
    },
    registerUserRejected: (state, action) =>{
      state.error = action.payload
      state.loader = false;
    },
    loginUserPending: (state, action) => {
      state.loader = true
    },
    loginUserFullfilled: (state, action) => {
      state.loader = false;
      state.error = null;
      state.user = action.payload
    }, 
    loginUserRejected: (state, action) => {
      state.error = action.payload;
      state.loader = false
    }
  }
})


export default userSlice.reducer;
export const { actions: userActions} = userSlice
