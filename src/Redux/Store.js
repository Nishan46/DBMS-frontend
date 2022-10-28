import {configureStore} from '@reduxjs/toolkit'
import LanguageSlice from './LanguageSlice'
import AssestsSlices from './AssestsSclices'

export default configureStore({
    reducer:{
        languageChanger:LanguageSlice,
        Assets_actions:AssestsSlices
    }
})