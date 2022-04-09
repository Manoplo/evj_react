import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import checkoutReducer from './slices/checkoutSlice';


/**
 * Configure the redux store passing the reducers
 */
export default configureStore({
    reducer : {
        cart : cartReducer,
        auth : authReducer,
        checkout : checkoutReducer
    }
})