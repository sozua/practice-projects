import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import contador from "./contador";
import modal from "./modal";
import logger from "./middlewares/logger";

const defaultMiddleware = getDefaultMiddleware();
const middleware = [...defaultMiddleware, logger];

const combinedReducers = combineReducers({ contador, modal });

const store = configureStore({ reducer: combinedReducers, middleware });

export default store;
