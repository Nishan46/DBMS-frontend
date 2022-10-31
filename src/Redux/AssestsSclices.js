import { createSlice } from "@reduxjs/toolkit";

export const AssestSlices = createSlice({
    name:'Assests',
    initialState:{
        is_load:false,
        access_token:'',
        is_categories:false,
        current_category: 'main',
        photography_fields:{}
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
        },
        hasToEdit:(state, action) =>{
            state.current_category = action.payload
        },
        setPhotographyFields:(state,action)=>{
            state.photography_fields = action.payload
        }
    }
})

export const {setLoad , newAccess , visibleCategories , hasToEdit , setPhotographyFields} = AssestSlices.actions;
export default AssestSlices.reducer;