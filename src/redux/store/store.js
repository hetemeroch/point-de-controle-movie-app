import { configureStore } from "@reduxjs/toolkit";
import ListMovieSlice from '../reducer/reducer';

const Store = configureStore({
    reducer : {
        Add : ListMovieSlice
    }
    
})

export default Store