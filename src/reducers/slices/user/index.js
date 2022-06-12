import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const login = createAsyncThunk(
    "user/login",
    async () => {
        const user = { name: 'lehoangvuvt' }
        return user
    }
)

const initialState = {
    user: null,
    status: 'idle'
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'success'
                state.user = action.payload
            })
            .addCase(login.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

const { actions, reducer } = userSlice
export const { setUser } = actions
export default reducer