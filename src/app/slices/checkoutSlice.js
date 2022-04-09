import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({

    name : "checkout",
    initialState : {
        items : [],
        user : {},
        shipping : {},
        step: 1,
    },

    reducers: {

        stepOne : (state, action) => {
            state.step = 1;
            state.items = action.payload;
        },

    }
})

export const { stepOne } = checkoutSlice.actions;
export default checkoutSlice.reducer;