import React, { useEffect, useState } from "react";
import { PASSWORD_RESET } from "../../api";

import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";

import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";
import Error from "../../components/Error";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  const password = useForm();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Resete sua senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando</Button>
        ) : (
          <Button>Resetar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default PasswordReset;
