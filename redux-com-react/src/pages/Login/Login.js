import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../../UserContext";

import LoginForm from "./LoginForm";
import PasswordLost from "./PasswordLost";
import PasswordReset from "./PasswordReset";
import SignupForm from "./SignupForm";

import styles from "./Login.module.css";
import NotFound from "../NotFound";
import Head from "../../components/Head";

const Login = () => {
  const { logged } = useContext(UserContext);

  if (logged) {
    return <Navigate to="/conta" />;
  } else {
    return (
      <section className={styles.wrapper}>
        <Head title="Login" />
        <div className={styles.forms}>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="criar" element={<SignupForm />} />
            <Route path="perdeu" element={<PasswordLost />} />
            <Route path="resetar" element={<PasswordReset />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </section>
    );
  }
};

export default Login;
