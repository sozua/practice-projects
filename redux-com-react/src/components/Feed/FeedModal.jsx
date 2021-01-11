import { useEffect } from "react";

import Error from "../Error";
import Loading from "../Loading";

import styles from "./FeedModal.module.css";
import PhotoContent from "../Photo/PhotoContent";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/ui";

const FeedModal = ({ photo }) => {
  const { data, loading, error } = useSelector((state) => state.photo);
  const { modal } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  function handleOutsideClick(event) {
    if (event.currentTarget === event.target) dispatch(closeModal());
  }

  useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  if (!modal) return null;

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;
