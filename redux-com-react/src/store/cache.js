import createAsyncSlice from "./helper/createAsyncSlice";

const slice = createAsyncSlice({
  name: "cache",
  fetchConfig: () => ({
    url:
      "https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=10&_user=0",
    options: {
      method: "GET",
      cache: "no-store",
    },
  }),
});

export const getOverFiveKg = (state) =>
  state.cache.data?.filter(({ peso }) => peso >= 5);

export const fetchPhotos = slice.asyncAction;

export default slice.reducer;
