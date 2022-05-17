import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import authService from "../../services/auth.service";

// Retrieve user if exists from localstorage. 
const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk("auth/register", async({ name, lastname, email, password, confirmPassword }, {rejectWithValue}) => {

    try {

        const response = await axios.post("http://167.99.221.113/api/v1/user/register", {
            name,
            lastname,
            email,
            password,
            confirmPassword
        })
      
        return response.data

    } catch (error) {
        
        return rejectWithValue(error.response.data);
    }

})

export const login = createAsyncThunk("auth/login", async( { email, password }, {rejectWithValue} ) => {
   
    try {
        const response = await axios.post("http://167.99.221.113/api/v1/user/login", {
            email,
            password
            });
        if(response.data.accessToken){
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return {
            user: response.data
        }
    } catch (error) {
        
        return rejectWithValue(error.response.data);
    }
})

export const logout = createAsyncThunk("auth/logout", () => {

    authService.logout();
})

const initialState = user ? { isLoggedIn: true, user, errors: {} } : { isLoggedIn: false, user: null, errors: {} };


const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers: {
        clearErrors (state) {
            state.errors = {};
        }
    },
    extraReducers : {
        [register.fulfilled] : (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        [register.rejected] : (state, action) => {
            state.errors = action.payload;
            state.isLoggedIn  = false;

        },
        [login.fulfilled] : (state, action) => {
           
            state.user = action.payload.user;
            state.isLoggedIn = true;
        },

        [login.rejected] : (state, action) => {
            
            state.isLoggedIn = false;
            state.user = null;
            state.errors = action.payload;
        },

        [logout.fulfilled] : (state, action) => {
            state.user = null;
            state.isLoggedIn = false;
            state.errors = {};
        }

    }
})

const { reducer } = authSlice;
export const { clearErrors } = authSlice.actions;
export default reducer;


