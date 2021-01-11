import { PHOTOS_GET } from "../api";
import createAsyncSlice from "./createAsyncSlice";

const feed = createAsyncSlice({
  name: "feed",
  initialState: {
    list: [],
    page: 1,
    infinite: true,
  },
  reducers: {
    addPhotos(state, action) {
      state.list.push(...action.payload);
      if (action.payload.length === 0) {
        state.infinite = false;
      }
    },
    addPage(state) {
      state.page++;
    },
    resetState(state) {
      state.list = [];
      state.infinite = true;
      state.page = 1;
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
  fetchConfig: ({ page, total, user }) => PHOTOS_GET({ page, total, user }),
});

export const fetchFeed = feed.asyncAction;
export const { addPhotos, addPage, resetState: resetFeedState } = feed.actions;

export const loadNewPhotos = ({ total = 6, user }) => async (
  dispatch,
  getState
) => {
  const { feed } = getState();
  dispatch(addPage());
  const { payload } = await dispatch(
    fetchFeed({ page: feed.page, total, user })
  );
  dispatch(addPhotos(payload));
};

export default feed.reducer;
