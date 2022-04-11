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
            if(state.step > 1) {
                state.step -= 1;
            }
            
        },

        checkoutStep : (state, action) => {
            state.step = 3;
        }


    }
})

export const { stepOne, stepTwo, prevStep, checkoutStep } = checkoutSlice.actions;
export default checkoutSlice.reducer;