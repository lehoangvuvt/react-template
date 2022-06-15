import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: false,
  status: "idle",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    resetLoginState(state, action) {
      state.user = null;
      state.error = false;
      state.status = "idle";
    },
    login(state, action) {
      state.user = null;
      state.error = false;
      state.status = "login-loading";
    },
    loginSuccess(state, action) {
      state.user = action.payload;
      state.error = false;
      state.status = "login-success";
    },
    loginFailed(state, action) {
      state.user = null;
      state.error = action.payload;
      state.status = "login-failed";
    },
    logout(state, action) {
      state.status = "logout-loading";
    },
    logoutSuccess(state) {
      state.user = null;
      state.error = false;
      state.status = "logout-success";
    },
  },
});

const { actions, reducer } = userSlice;
export const { login, loginSuccess, loginFailed, logout, logoutSuccess, resetLoginState } = actions;
export default reducer;
