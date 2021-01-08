import { combineReducers } from "@reduxjs/toolkit";
import createAsyncSlice from "./helper/createAsyncSlice";

const token = createAsyncSlice({
  name: "token",
  fetchConfig: (payload) => ({
    url: "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  }),
});

const user = createAsyncSlice({
  name: "user",
  fetchConfig: (token) => ({
    url: "https://dogsapi.origamid.dev/json/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  }),
});

const fetchToken = token.asyncAction;
const fetchUser = user.asyncAction;

const combinedReducers = combineReducers({
  token: token.reducer,
  user: user.reducer,
});

export default combinedReducers;

export const login = (user) => async (dispatch) => {
  try {
    const { payload } = await dispatch(fetchToken(user));
    if (payload.token !== undefined) await dispatch(fetchUser(payload.token));
  } catch {}
};
