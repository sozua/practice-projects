import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/login";
import styles from "../styles/Form.module.css";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(
      login({
        username,
        password,
      })
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <div>
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">Fazer login</button>
      </form>
    </>
  );
};

export default Form;
