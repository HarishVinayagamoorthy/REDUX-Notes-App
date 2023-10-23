import { configureStore } from "@reduxjs/toolkit";
import notesReducer  from "./notesSlice";


export default configureStore({
 reducer:{
    notes:notesReducer
 }


})