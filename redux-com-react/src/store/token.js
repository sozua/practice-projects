import { TOKEN_POST } from "../api";
import createAsyncSlice from "./createAsyncSlice";

const token = createAsyncSlice({
  name: "token",
  fetchConfig: (user) => TOKEN_POST(user),
});

export const fetchToken = token.asyncAction;

export default token.reducer;
