import React from "react";
import { useSelector } from "react-redux";

import styles from "../styles/Feed.module.css";

const PhotoList = () => {
  const { list } = useSelector((state) => state?.feed);

  return (
    <div className={styles.feedWrapper}>
      {list &&
        list.map((item) => (
          <div className={styles.feedItem} key={`${item.id} - ${item.title}`}>
            <img src={item.src} alt={`${item.title} by ${item.author}`} />
            <span className={styles.feedText}>{item.title}</span>
            <span className={styles.feedViews}>{item.acessos}</span>
          </div>
        ))}
    </div>
  );
};

export default PhotoList;
