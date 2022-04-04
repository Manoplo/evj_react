import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice';


/**
 * Configure the redux store passing the reducers
 */
export default configureStore({
    reducer : {
        cart : cartReducer,
        user : userReducer
    }
})