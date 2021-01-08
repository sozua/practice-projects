import React, { useEffect, useState } from "react";

import styles from "../styles/Feed.module.css";

const Feed = () => {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchFeed() {
      const data = await fetch(
        `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
        {
          method: "GET",
          cache: "no-store",
        }
      );
      const json = await data.json();
      setFeed(json);
    }
    fetchFeed(page);
  }, [page]);
  return (
    <div className={styles.feedWrapper}>
      <div className={styles.feedItem}>
        {feed.map((item) => (
          <>
            <img src={item.src} alt={`${item.title} by ${item.author}`} />
            <span className={styles.feedText}>{item.title}</span>
            <span className={styles.feedViews}>{item.acessos}</span>
          </>
        ))}
      </div>
    </div>
  );
};

export default Feed;
