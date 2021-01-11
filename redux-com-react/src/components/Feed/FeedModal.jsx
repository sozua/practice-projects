import { useEffect } from "react";

import Error from "../Error";
import Loading from "../Loading";

import styles from "./FeedModal.module.css";
import PhotoContent from "../Photo/PhotoContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../store/photo";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, loading, error } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhoto(photo.id));
  }, [photo, dispatch]);

  function handleOutsideClick(event) {
    if (event.currentTarget === event.target) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;
