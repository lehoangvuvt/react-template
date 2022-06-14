import axios from "axios";
import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import {
  login,
  loginSuccess,
  loginFailed,
  logout,
  logoutSuccess
} from "../../reducers/slices/user";
import UserServices from "../../services/api/userServices";

export function* handleLogin(action) {
  try {
    const { username, password } = action.payload;
    const response = yield UserServices.login(username, password);
    yield localStorage.setItem("userData", JSON.stringify(response.user))
    yield put(loginSuccess(response.user));
  } catch (err) {
    yield put(loginFailed("Error"));
  }
}

export function* handleLogout() {
  yield localStorage.removeItem("userData");
  yield put(logoutSuccess());
}

export default function* saga() {
  yield takeEvery(login().type, handleLogin);
  yield takeEvery(logout().type, handleLogout);
}
