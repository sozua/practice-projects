import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNewPhotos } from "../store/feed";
import LoadMoreFeed from "./LoadMoreFeed";
import PhotoList from "./PhotoList";

const Feed = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.login?.user);

  useEffect(() => {
    dispatch(loadNewPhotos(1));
  }, [dispatch]);

  if (data)
    return (
      <>
        <PhotoList />
        <LoadMoreFeed />
      </>
    );
  return null;
};

export default Feed;
