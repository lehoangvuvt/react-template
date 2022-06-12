import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/user";


const reducer = combineReducers({
    user: userSlice
})

const store = configureStore({
    reducer,
})

export default store