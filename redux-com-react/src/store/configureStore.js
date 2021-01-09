import { combineReducers, configureStore } from "@reduxjs/toolkit";
import date from "./date";

const combinedReducers = combineReducers({ date });

const store = configureStore({ reducer: combinedReducers });

export default store;
