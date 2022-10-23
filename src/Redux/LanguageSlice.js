import { createSlice } from "@reduxjs/toolkit";

export const LanguageSlice = createSlice({
    name:'langugesChange',
    initialState:{
        selected_language:'English'
    },
    reducers:{
        setLanguage: (state,action) =>{
            if (action.payload === 'English')
            {
                state.selected_language = 'සිංහල'
            }
            else
            {
                state.selected_language = 'English'
            }
        }
    }
})

export const {setLanguage} = LanguageSlice.actions;
export default LanguageSlice.reducer;