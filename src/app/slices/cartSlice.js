import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({

    name : "cart",
    initialState : {
        items : []
    },

    reducers : {

        addItem : (state, action) => {
            const { id, name, price, image, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item) {
                item.quantity += quantity;
                item.price+= price;
            } else {
                state.items.push({
                    id,
                    name,
                    price,
                    image,
                    quantity : quantity
                });
            }
        }, 

        removeItem : (state, action) => {
            const { id } = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                item.price  -=  item.price / item.quantity;
                item.quantity -= 1;
            }
        }

    }

})
// returns any data from the state 
export const selectItems = state => state.cart.items;
// exports slice methods
export const { addItem, removeItem } = cartSlice.actions;
// exports the slice
export default cartSlice.reducer;