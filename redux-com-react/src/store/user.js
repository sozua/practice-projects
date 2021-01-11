import { GET_USER } from "../api";
import createAsyncSlice from "./createAsyncSlice";
import { fetchToken, resetTokenState } from "./token";

const user = createAsyncSlice({
  name: "user",
  fetchConfig: (token) => GET_USER(token),
});

export const fetchUser = user.asyncAction;
const { resetState: resetUserState, fetchError } = user.actions;

export const userLogin = (user) => async (dispatch) => {
  const { payload } = await dispatch(fetchToken(user)); // O Dispatch retorna a action com o type e o payload
  if (payload.token) {
    await dispatch(fetchUser(payload.token));
    window.localStorage.setItem("token", payload.token);
  }
};

export const userLoggout = () => async (dispatch) => {
  dispatch(resetUserState());
  dispatch(resetTokenState());
  window.localStorage.removeItem("token");
};

export const autoLogin = () => async (dispatch, getState) => {
  const { token } = getState();
  if (token?.data?.token) {
    const { type } = await dispatch(fetchUser(token.data.token));
    if (type === fetchError.type) dispatch(userLoggout());
  }
};

export default user.reducer;
