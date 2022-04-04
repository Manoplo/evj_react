
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            id: "",
            name: "",
            surname: "",
            email: "",
            userToken : "",
        },
        isLoggedIn: false,

    },

    reducers: {
        setUser: (state, action) => {
            const { id, name, surname, email, userToken } = action.payload;
            state.user.id = id;
            state.user.name = name;
            state.user.surname = surname;
            state.user.email = email;
            state.user.userToken = userToken;
            state.isLoggedIn = true;
        }, 

        clearUser: (state, action) => {
            state.user.id = "";
            state.user.name = "";
            state.user.surname = "";
            state.user.email = "";
            state.user.userToken = "";
            state.isLoggedIn = false;
        },
    }



});

export const isLogged = state => state.user.isLoggedIn;
export const selectUser = state => state.user.user;
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
