import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
  status: "idle",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = null
      state.error = null;
      state.status = "loading";
    },
    setUserSuccess(state, action) {
      state.user = action.payload;
      state.error = null;
      state.status = "success";
    },
    setUserFailed(state, action) {
      state.user = null;
      state.error = action.payload;
      state.status = "failed";
    },
  }
});

const { actions, reducer } = userSlice;
export const { setUser, setUserSuccess, setUserFailed } = actions;
export default reducer;
