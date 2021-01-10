import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../UserContext";
import Error from "../../components/Error";

import styles from "./LoginForm.module.css";
import stylesBtn from "../../components/Forms/Button.module.css";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleLogin(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className={`animeLeft`}>
      <h1 className={`title`}>Login</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && "Dados incorretos."} />
      </form>
      <Link to="/login/perdeu" className={styles.perdeu}>
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link to="/login/criar" className={stylesBtn.button}>
          Criar conta
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;