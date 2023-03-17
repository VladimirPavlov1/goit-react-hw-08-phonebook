import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { register,logIn,logOut,refreshUser } from "./operations";

const initialState = {
    user: {name:null, email:null},
    isLoggedIn:null,
    isLoggedOut:null,
    isRefreshing:null,
};

const authSlice = createSlice({
    name:'auth',
    initialState,
    extraReducers:builder=>builder
        .addCase(refreshUser.pending,(state)=>{
            state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled,(state,action)=>{
            state.user = action.payload;
            state.isLoggedIn = true;
           
        })
       
    .addMatcher(
        isAnyOf(register.fulfilled,
                  logIn.fulfilled),(state,action)=>{
                    state.user = action.payload.user;
                    state.token  = action.payload.token;
                    state.isLoggedIn = true;
                })
    
    .addMatcher(
        isAnyOf(refreshUser.fulfilled,refreshUser.rejected),(state)=>{
            state.isRefreshing  =false;
        })
    
})

export const authReducer  = authSlice.reducer;