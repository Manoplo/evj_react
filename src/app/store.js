import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import checkoutReducer from './slices/checkoutSlice';
import adminReducer from './slices/adminSlice';


/**
 * Configure the redux store passing the reducers
 */
export default configureStore({
    reducer : {
        cart : cartReducer,
        auth : authReducer,
        checkout : checkoutReducer,
        admin : adminReducer
    }
})