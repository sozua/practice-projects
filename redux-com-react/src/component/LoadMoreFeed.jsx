import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNewPhotos } from "../store/feed";

import styles from "../styles/LoadMoreFeed.module.css";

const LoadMoreFeed = () => {
  const dispatch = useDispatch();
  const { pages, infinite } = useSelector((state) => state.feed);

  function handleClick() {
    dispatch(loadNewPhotos(pages + 1));
  }

  if (infinite)
    return (
      <button className={styles.loadMore} onClick={handleClick}>
        <span>+</span>
      </button>
    );

  return null;
};

export default LoadMoreFeed;
