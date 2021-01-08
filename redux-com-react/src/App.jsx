import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { somar } from "./store/contador";
import { autoLogin, login } from "./store/login";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const userData = state.login.user?.data;

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(login({ username, password }));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" style={{ display: "block" }}>
          Usuário
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <label htmlFor="password" style={{ display: "block" }}>
          Senha
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit">Enviar</button> <br />
      </form>
      <button onClick={() => dispatch(somar(5))}>Somar</button>
      <h2>
        {userData?.username} | {userData?.email}
      </h2>
    </>
  );
}

export default App;
