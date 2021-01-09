import { combineReducers, configureStore } from "@reduxjs/toolkit";
import products from "./products";

const combinedReducers = combineReducers({ products });

const store = configureStore({ reducer: combinedReducers });

export default store;
