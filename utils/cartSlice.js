import { createSlice } from "@reduxjs/toolkit";

const InitialState = {items:[]}
const cartSlice = createSlice({
    initialState: InitialState,
    name: 'cart',
     reducers: {
        addItem: (state,action)=>{
            const isPresent = state.items?.find(item=>item.id==action.payload.id)
            if(!isPresent)
            state.items.push(action.payload)
        },
        removeItem: (state,action)=>{
            state.items = state.items.filter(item=>item.id!=action.payload)
        },
        cleanCart: (state)=>{
            state.items.splice(0)
        }
    }
   
   
})

export const {addItem,removeItem,cleanCart} = cartSlice.actions
export default cartSlice.reducer