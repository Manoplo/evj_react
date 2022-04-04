import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';


/**
 * Configure the redux store passing the reducers
 */
export default configureStore({
    reducer : {
        cart : cartReducer
    }
})