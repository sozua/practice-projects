import { GET_USER } from "../api";
import createAsyncSlice from "./createAsyncSlice";
import { fetchToken } from "./token";

const user = createAsyncSlice({
  name: "user",
  fetchConfig: (token) => GET_USER(token),
});

export const fetchUser = user.asyncAction;

export const userLogin = (user) => async (dispatch) => {
  const { payload } = await dispatch(fetchToken(user)); // O Dispatch retorna a action com o type e o payload
  if (payload.token) await dispatch(fetchUser(payload.token));
};

export default user.reducer;
