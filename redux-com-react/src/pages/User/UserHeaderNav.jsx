import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { ReactComponent as MinhasFotosSvg } from "../../assets/feed.svg";
import { ReactComponent as EstatisticasSvg } from "../../assets/estatisticas.svg";
import { ReactComponent as AdicionarFotoSvg } from "../../assets/adicionar.svg";
import { ReactComponent as SairSvg } from "../../assets/sair.svg";

import styles from "./UserHeaderNav.module.css";
import useMedia from "../../hooks/useMedia";
import { useDispatch } from "react-redux";
import { userLoggout } from "../../store/user";

const UserHeaderNav = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActived
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActived
        }`}
      >
        <NavLink to="/conta" end activeClassName={styles.active}>
          <MinhasFotosSvg />
          {mobile && "Minhas fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas" end activeClassName={styles.active}>
          <EstatisticasSvg />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar" end activeClassName={styles.active}>
          <AdicionarFotoSvg />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={() => dispatch(userLoggout())}>
          <SairSvg />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
