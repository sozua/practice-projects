import createAsyncSlice from "./helper/createAsyncSlice";

const feed = createAsyncSlice({
  name: "feed",
  initialState: {
    list: [],
    pages: 0,
    infinite: true,
  },
  reducers: {
    addPhotos(state, action) {
      if (action.payload.length) {
        state.list.push(...action.payload);
        state.pages++;
      } else {
        state.infinite = false;
      }
    },
    removePhotos(state) {
      state.pages = 0;
      state.infinite = true;
      state.list = [];
      state.data = null;
    },
  },
  fetchConfig: (page = 1) => ({
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  }),
});

export const { addPhotos, removePhotos } = feed.actions;

export const fetchFeed = feed.asyncAction;

export const loadNewPhotos = (page = 1) => async (dispatch) => {
  const { payload } = await dispatch(fetchFeed(page));
  dispatch(addPhotos(payload));
};

export default feed.reducer;
