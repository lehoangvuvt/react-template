import { configureStore, combineReducers } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import rootSaga from "../saga/user"
import userSlice from "./slices/user"

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const reducer = combineReducers({
  user: userSlice,
})

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(middleware),
})

sagaMiddleware.run(rootSaga)

export default store
