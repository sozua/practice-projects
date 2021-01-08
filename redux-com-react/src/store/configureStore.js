import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import contador from "./contador";
import modal from "./modal";
import login from "./login";
// import logger from "./middlewares/logger";

const defaultMiddleware = getDefaultMiddleware();
const middleware = [...defaultMiddleware];

const combinedReducers = combineReducers({ contador, modal, login });

const store = configureStore({ reducer: combinedReducers, middleware });

export default store;
