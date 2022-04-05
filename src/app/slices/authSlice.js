import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import authService from "../../services/auth.service";

// Retrieve user if exists from localstorage. 
const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk("auth/register", async({ name, lastname, email, password, confirmPassword }) => {

    try {

        const response = await authService.register(name, lastname, email, password, confirmPassword);
        return response.data

    } catch (error) {
        console.log(error);
    }

})

export const login = createAsyncThunk("auth/login", async( { email, password }, {rejectWithValue} ) => {
   
    try {
        const response = await axios.post("http://elvestidordejulietta.test/api/v1/user/login", {
            email,
            password
            });
        console.log(response.data)
        return {
            user: response.data
        }
    } catch (error) {
        console.log(error);
        return rejectWithValue('Ooops, it failed to login');
    }
})

export const logout = createAsyncThunk("auth/logout", () => {

    authService.logout();
})

const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null }


const authSlice = createSlice({
    name : "auth",
    initialState,
    extraReducers : {
        [register.fulfilled] : (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        [register.rejected] : (state, action) => {
            state.isLoggedIn  = false;
        },
        [login.fulfilled] : (state, action) => {
           
            state.user = action.payload.user;
            state.isLoggedIn = true;
        },

        [login.rejected] : (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },

        [logout.fulfilled] : (state, action) => {
            state.user = null;
            state.isLoggedIn = false;
        }

    }
})

const { reducer } = authSlice;
export default reducer;


