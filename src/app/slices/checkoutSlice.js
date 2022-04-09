import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({

    name : "checkout",
    initialState : {
        /* items : [], */
        user : {},
        shipping : {},
        step: 1,
    },

    reducers: {

        stepOne : (state, action) => {
            state.step = 1;
            /* state.items = action.payload; */
        },

        stepTwo: (state, action) => {
            state.user = action.payload.user;
            state.shipping = action.payload.shipping;
            state.step = 2;  
        },

        prevStep : (state, action) => {
            console.log('first')
            state.step = 1;
            
        }

    }
})

export const { stepOne, stepTwo, prevStep } = checkoutSlice.actions;
export default checkoutSlice.reducer;