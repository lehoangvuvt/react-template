import axios from "axios";
import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import {
  login,
  loginSuccess,
  loginFailed
} from "../../reducers/slices/user";
import UserServices from "../../services/api/userServices";

export function* handleLogin(action) {
  try {
    const { username, password } = action.payload;
    const response = yield UserServices.login(username, password);
    yield put(loginSuccess(response.user));
  } catch (err) {
    yield put(loginFailed(err));
  }
}

export default function* saga() {
  yield takeEvery(login().type, handleLogin);
}
