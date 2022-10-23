import {configureStore} from '@reduxjs/toolkit'
import LanguageSlice from './LanguageSlice'

export default configureStore({
    reducer:{
        languageChanger:LanguageSlice
    }
})