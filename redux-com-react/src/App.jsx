import { useState } from "react";
import { useDispatch } from "react-redux";
import { adicionarDatas } from "./store/date";

function App() {
  const [partida, setPartida] = useState("");
  const [retorno, setRetorno] = useState("");
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(adicionarDatas({ partida, retorno }));
  }

  return (
    <>
      <h2>Formulário com redux</h2>
      <form onSubmit={onSubmit}>
        <input
          type="date"
          placeholder="Partida"
          value={partida}
          onChange={({ target }) => setPartida(target.value)}
        />
        <input
          type="date"
          placeholder="Retorno"
          value={retorno}
          onChange={({ target }) => setRetorno(target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default App;
