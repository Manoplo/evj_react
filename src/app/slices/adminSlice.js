import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";
import axios from "axios";

// Retrieves admin if exists from sessionStorage.
const admin = JSON.parse(sessionStorage.getItem("admin"));



export const login = createAsyncThunk("admin/login", async( { email, password }, {rejectWithValue} ) => {
   
    try {
        const response = await axios.post("http://167.99.221.113/api/v1/admin/login", {
            email,
            password
            });
        if(response.data.accessToken){
            sessionStorage.setItem("admin", JSON.stringify(response.data));
        }
        return {
            admin: response.data
        }
    } catch (error) {
        
        return rejectWithValue(error.response.data);
    }
})

export const logout = createAsyncThunk("admin/logout", () => {
        authService.adminLogout();
})

const initialState = admin ? { isLoggedIn: true, admin, errors: {} } : { isLoggedIn: false, admin: null, errors: {} };

const adminSlice = createSlice({
    name : "admin",
    initialState,
    
    extraReducers: {
        [login.fulfilled] : (state, action) => {
           
            state.admin = action.payload.admin;
            state.isLoggedIn = true;
        },

        [login.rejected] : (state, action) => {
            
            state.isLoggedIn = false;
            state.admin = null;
            state.errors = action.payload;
        },

        [logout.fulfilled] : (state, action) => {
            state.admin = null;
            state.isLoggedIn = false;
            state.errors = {};
        }
    },
});

const { reducer} = adminSlice;
export default reducer;

