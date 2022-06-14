import { configureStore, combineReducers } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import rootSaga from "../saga/user"
import userSlice from "./slices/user"
import appSlice from "./slices/app"

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const reducer = combineReducers({
  user: userSlice,
  app: appSlice
})

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(middleware),
})

sagaMiddleware.run(rootSaga)

export default store
