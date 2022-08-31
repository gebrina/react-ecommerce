import { createSlice } from "@reduxjs/toolkit";

export interface cartState{
    cartNumber:number;
     cheekoutData:any;
}
const initialState:cartState = {
    cartNumber:0,
    cheekoutData:[{
        index:0,
        price:0,
        count:0, 
    }]
}
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        increment:(state, {payload})=>{
         state.cartNumber += 1;
        },
        decrement:(state)=>{
            if(state.cartNumber>1){
                state.cartNumber -=1;
            }else{
                state.cartNumber=0;
            }
        },
        setCheackoutData:(state,{payload})=>{
            
            console.log(payload);
        }
    }

})

export const {increment,setCheackoutData, decrement} = cartSlice.actions;

export default cartSlice.reducer;