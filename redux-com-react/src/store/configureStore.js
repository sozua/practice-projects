import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cache from "./cache";

const combinedReducers = combineReducers({ cache });

const store = configureStore({ reducer: combinedReducers });

export default store;
