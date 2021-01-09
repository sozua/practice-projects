import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, getOverFiveKg } from "../store/cache";

const Photos = () => {
  const data = useSelector(getOverFiveKg);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);
  return (
    <ol>
      {data &&
        data.map((photo) => (
          <li key={photo.id}>
            {photo.title} | {photo.peso}
          </li>
        ))}
    </ol>
  );
};

export default Photos;
