import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../assets/dogs.svg";
import styles from "./Header.module.css";

const Header = () => {
  const { data } = useSelector((state) => state.user);

  return (
    <header className={styles.wrapper}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs - home" className={styles.logo}>
          <Dogs />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login}>
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
