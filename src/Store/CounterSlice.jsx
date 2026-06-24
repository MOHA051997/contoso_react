import { createSlice } from "@reduxjs/toolkit";
import { instructors, offices, cours, departments,users } from '../data/db';

const state={
    instructors: instructors,
    offices: offices,
    cours : cours,
    departments: departments,
    users:users
}

export const CounterSlice =createSlice({
    name: 'counter',
    initialState:state, 
        reducers:{
             ADD_INST(state, action) {},
        EDIT_INST(state, action) { },
        DEL_INST(state, action) { },
        }   
});
export const {ADD_INST,EDIT_INST,DEL_INST}=CounterSlice.actions;
export default CounterSlice.reducer;