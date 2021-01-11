import { PHOTO_GET } from "../api";

const FETCH_PHOTO_STARTED = "photo/fetchStarted";
const FETCH_PHOTO_SUCCESS = "photo/fetchSuccess";
const FETCH_PHOTO_ERROR = "photo/fetchError";

const fetchPhotoStart = () => ({ type: FETCH_PHOTO_STARTED });
const fetchPhotoSuccess = (data) => ({
  type: FETCH_PHOTO_SUCCESS,
  payload: data,
});
const fetchPhotoError = (data) => ({
  type: FETCH_PHOTO_ERROR,
  payload: data,
});

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTO_STARTED:
      return { ...state, loading: true, data: null, error: null };
    case FETCH_PHOTO_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_PHOTO_ERROR:
      return { ...state, loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};

export const fetchPhoto = (id) => async (dispatch) => {
  try {
    dispatch(fetchPhotoStart());
    const { url, options } = PHOTO_GET(id);
    const response = await fetch(url, options);
    const json = await response.json();
    if (!response.ok) throw new Error(json.message);
    dispatch(fetchPhotoSuccess(json));
  } catch (error) {
    dispatch(fetchPhotoError(error.message));
  }
};

export default reducer;
