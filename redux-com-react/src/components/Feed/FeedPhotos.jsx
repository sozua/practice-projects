import React, { useEffect } from "react";
import FeedPhotosItem from "./FeedPhotosItem";

import Error from "../Error";
import Loading from "../Loading";

import useFetch from "../../hooks/useFetch";
import { PHOTOS_GET } from "../../api";

import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ setModalPhoto, user }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user });
      await request(url, options);
    }
    fetchPhotos();
  }, [request, user]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  return null;
};

export default FeedPhotos;
