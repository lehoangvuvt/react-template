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
    login(state, action) {
      state.user = null;
      state.error = null;
      state.status = "loading";
    },
    loginSuccess(state, action) {
      state.user = action.payload;
      state.error = null;
      state.status = "success";
    },
    loginFailed(state, action) {
      state.user = null;
      state.error = action.payload;
      state.status = "failed";
    },
  },
});

const { actions, reducer } = userSlice;
export const { login, loginSuccess, loginFailed } = actions;
export default reducer;
