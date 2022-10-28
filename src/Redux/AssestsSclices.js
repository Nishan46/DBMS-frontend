import { createSlice } from "@reduxjs/toolkit";

export const AssestSlices = createSlice({
    name:'Assests',
    initialState:{
        is_load:false,
        access_token:'',
    },
    reducers:{
        setLoad: (state,action) =>{
            state.is_load = action.payload
        },
        newAccess: (state,action) =>{
            state.access_token = action.payload
        }
    }
})

export const {setLoad , newAccess} = AssestSlices.actions;
export default AssestSlices.reducer;