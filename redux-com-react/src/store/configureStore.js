import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import photo from "./photo";
import token from "./token";
import user from "./user";
import feed from "./feed";
import ui from "./ui";
import userPhotoPost from "./userPhotoPost";

const reducer = combineReducers({
  photo,
  token,
  user,
  feed,
  ui,
  userPhotoPost,
});
const middleware = [...getDefaultMiddleware()];
const store = configureStore({ reducer, middleware });

export default store;
