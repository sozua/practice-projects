import React from "react";
import { useSelector } from "react-redux";

import styles from "../styles/Header.module.css";

const Header = () => {
  const state = useSelector((state) => state?.login);
  return (
    <div className={styles.headerWrapper}>
      {state?.user?.data?.username ? (
        <h2>Olá, {state?.user?.data?.username}</h2>
      ) : (
        <h2>Mini Dogs</h2>
      )}
    </div>
  );
};

export default Header;
