import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';


/**
 * Configure the redux store passing the reducers
 */
export default configureStore({
    reducer : {
        cart : cartReducer,
        auth : authReducer
    }
})