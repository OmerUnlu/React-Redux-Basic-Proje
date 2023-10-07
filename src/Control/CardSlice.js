import {createSlice} from '@reduxjs/toolkit';
import CourseItems from '../CourseItems'

const initialState = {
    cartItems: CourseItems,
    quantity:1,
    total:0
}

const CardSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        clearAll:(state) => {
        state.cartItems = [];     
        },
        
        clearId: (state,action) => {
          state.cartItems =  state.cartItems.filter((item) => {
                return item.id !== action.payload
            })
        }, 
        
        increase: (state,action) => {
           const cardItem = state.cartItems.find((item) =>{return item.id === action.payload})
            cardItem.quantity += 1;
        },
        
        decrease: (state, action) => {
            const cartItem = state.cartItems.find(
              (item) => item.id === action.payload
            );
            if (cartItem.quantity <= 0) {
              cartItem.quantity = 0;
            } else {
              cartItem.quantity -= 1;
            }
        },

        setTotal: (state) =>{
            let allTotal = 0;
            let quantity=0;
            state.cartItems.forEach((item) => {
                 allTotal += item.price * item.quantity;
                 quantity += item.quantity;
            })  
            
            state.quantity = quantity;
            state.total = allTotal;
        },

        restartCard: (state) =>{
            state.cartItems = CourseItems
        },
},
});

export const {clearAll, clearId, increase, decrease, setTotal, restartCard} = CardSlice.actions;

export default CardSlice.reducer;