import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggout } from "../store/login";

import styles from "../styles/Header.module.css";

const Header = () => {
  const state = useSelector((state) => state?.login);
  const dispatch = useDispatch();

  function loggoutUser(event) {
    event.preventDefault();
    dispatch(loggout());
  }

  return (
    <div className={styles.headerWrapper}>
      {state?.user?.data?.username ? (
        <>
          <h2>Olá, {state?.user?.data?.username}</h2>
          <button onClick={loggoutUser}>Sair</button>
        </>
      ) : (
        <h2>Mini Dogs</h2>
      )}
    </div>
  );
};

export default Header;
