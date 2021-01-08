import { combineReducers } from "@reduxjs/toolkit";
import createAsyncSlice from "./helper/createAsyncSlice";
import getLocalStorage from "./helper/getLocalStorage";

const token = createAsyncSlice({
  name: "token",
  initialState: {
    data: {
      token: getLocalStorage("token", null),
    },
  },
  reducers: {
    fetchSuccess: {
      reducer(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      prepare(payload) {
        return {
          payload,
          meta: {
            localStorage: {
              key: "token",
              value: payload.token,
            },
          },
        };
      },
    },
    removeToken(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
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
  reducers: {
    removeUser(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});

const fetchToken = token.asyncAction;
const fetchUser = user.asyncAction;

const { removeToken } = token.actions;
const { removeUser } = user.actions;

const combinedReducers = combineReducers({
  token: token.reducer,
  user: user.reducer,
});

export const login = (user) => async (dispatch) => {
  try {
    const { payload } = await dispatch(fetchToken(user));
    if (payload.token !== undefined) await dispatch(fetchUser(payload.token));
  } catch {}
};

export const loggout = () => (dispatch) => {
  dispatch(removeToken());
  dispatch(removeUser());
  window.localStorage.setItem("token", null);
};

export const autoLogin = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.login.token.data;
  if (token) await dispatch(fetchUser(token));
};

export default combinedReducers;
