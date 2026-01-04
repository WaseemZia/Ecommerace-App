import { createSlice } from "@reduxjs/toolkit"

export type CounterState={
    data:number
}
const initialState:CounterState={
    data:42
}

export const counterSlice=createSlice(
    {
        name:'counter',
        initialState,
        reducers:{
            increment:(state,action)=>{
                state.data+=action.payload
            },
            decrement:(state,action)=>{
                state.data-=action.payload
            }
        }
    }
);
 export const {increment,decrement}=counterSlice.actions;
export function incrementLegacy(amount=1)
{
 return {
    type:'Increment',
    payload:amount
 }
}
export function decrementLegacy(amount=1)
{
 return {
    type:'Decrement',
    payload:amount
 }
}
export default function counterReducer(state=initialState,action:{type:string,payload:number})
{
    switch (action.type) {
        case 'Increment':
            return {
                ...state,
                data:state.data+action.payload
            }
         case'Decrement':
         return{
            ...state,
            data:state.data-action.payload
         }
        default:
       return state
    }
}