import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import login from "./login";
// import logger from "./middlewares/logger";
import localStorage from "./middlewares/localStorage";

const defaultMiddleware = getDefaultMiddleware();
const middleware = [...defaultMiddleware, localStorage];

const combinedReducers = combineReducers({ login });

const store = configureStore({ reducer: combinedReducers, middleware });

export default store;
