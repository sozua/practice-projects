import { createSlice } from "@reduxjs/toolkit";

const slicer = createSlice({
  name: "login",
  initialState: {
    token: {
      loading: false,
      data: null,
      error: null,
    },
    user: {
      loading: false,
      data: null,
      error: null,
    },
  },
  reducers: {
    fetchUserStarted(state) {
      state.user.loading = true;
    },
    fetchUserSuccess(state, action) {
      state.user.loading = false;
      state.user.data = action.payload;
      state.user.error = null;
    },
    fetchUserError(state, action) {
      state.user.loading = false;
      state.user.data = null;
      state.user.error = action.payload;
    },
    fetchTokenStarted(state) {
      state.token.loading = true;
    },
    fetchTokenSuccess(state, action) {
      state.token.loading = false;
      state.token.data = action.payload;
      state.token.error = null;
    },
    fetchTokenError(state, action) {
      state.token.loading = false;
      state.token.data = null;
      state.token.error = action.payload;
    },
  },
});

const {
  fetchTokenError,
  fetchTokenSuccess,
  fetchTokenStarted,
  fetchUserError,
  fetchUserSuccess,
  fetchUserStarted,
} = slicer.actions;

export const fetchToken = (user) => async (dispatch) => {
  try {
    dispatch(fetchTokenStarted());
    const response = await fetch(
      "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    return dispatch(fetchTokenSuccess(data));
  } catch (error) {
    return dispatch(fetchTokenError(error.message));
  }
};

export const fetchUser = (token) => async (dispatch) => {
  try {
    dispatch(fetchUserStarted());
    const response = await fetch("https://dogsapi.origamid.dev/json/api/user", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    return dispatch(fetchUserSuccess(data));
  } catch (error) {
    return dispatch(fetchUserError(error.message));
  }
};

export const login = (user) => async (dispatch) => {
  try {
    const { payload } = await dispatch(fetchToken(user));
    if (payload.token !== undefined) await dispatch(fetchUser(payload.token));
  } catch {}
};

export default slicer.reducer;
