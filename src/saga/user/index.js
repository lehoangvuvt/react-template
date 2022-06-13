import axios from "axios";
import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import {
  setUser,
  setUserFailed,
  setUserSuccess,
} from "../../reducers/slices/user";
import UserServices from "../../services/api/userServices";

export function* fetchUser(action) {
  try {
    const { username, password } = action.payload;
    const response = yield UserServices.login(username, password);
    yield put(setUserSuccess(response.user));
  } catch (err) {
    yield put(setUserFailed(err));
  }
}

export default function* saga() {
  yield takeEvery(setUser().type, fetchUser);
}
