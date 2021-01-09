import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../store/cache";

const Photos = () => {
  const { data } = useSelector((state) => state.cache);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);
  return (
    <ol>{data && data.map((item) => <li key={item.id}>{item.title}</li>)}</ol>
  );
};

export default Photos;
