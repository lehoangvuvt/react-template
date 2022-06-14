import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authRoutes: ['/', '/home']
}

const appSlice = createSlice({
    name: "appSlice",
    initialState,
    reducers: {
        addAuthRoute(state, action) {
            state.authRoutes.push(action.payload)
        }
    }
})

const { actions, reducer } = appSlice
export const { addAuthRoute } = actions
export default reducer