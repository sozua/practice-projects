import React, { useEffect, useState } from "react";

import styles from "../styles/Feed.module.css";

const Feed = ({ page }) => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      const data = await fetch(
        `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
        {
          method: "GET",
          cache: "no-store",
        }
      );
      if (data.ok) {
        const json = await data.json();
        setFeed(json);
      }
    };
    fetchFeed(page);
  }, [page]);

  return (
    <div className={styles.feedWrapper}>
      {feed &&
        feed.map((item) => (
          <div className={styles.feedItem} key={`${item.id} - ${item.title}`}>
            <img src={item.src} alt={`${item.title} by ${item.author}`} />
            <span className={styles.feedText}>{item.title}</span>
            <span className={styles.feedViews}>{item.acessos}</span>
          </div>
        ))}
    </div>
  );
};

export default Feed;
