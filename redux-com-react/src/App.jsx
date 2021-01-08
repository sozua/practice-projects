import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./store/login";

function App() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(login({ username, password }));
  }

  return (
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
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
