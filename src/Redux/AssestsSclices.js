import { createSlice } from "@reduxjs/toolkit";

export const AssestSlices = createSlice({
    name:'Assests',
    initialState:{
        is_load:false,
        access_token:'',
        is_categories:false
    },
    reducers:{
        setLoad: (state,action) =>{
            state.is_load = action.payload
        },
        newAccess: (state,action) =>{
            state.access_token = action.payload
        },
        visibleCategories:(state , action) =>{
            state.is_categories = action.payload
        }
    }
})

export const {setLoad , newAccess , visibleCategories} = AssestSlices.actions;
export default AssestSlices.reducer;