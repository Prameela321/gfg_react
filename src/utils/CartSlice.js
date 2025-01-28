import { createSlice } from "@reduxjs/toolkit";

const CartSlice =  createSlice({
    name : 'cart',
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state,action)=>{
              console.log("actions",action)
              state.items.push(action.payload)
        },
        removeItem : (state,action)=>{
            state.items.pop();
        }
    }
})

export const { addItem, removeItem } = CartSlice.actions;
export default  CartSlice.reducer;