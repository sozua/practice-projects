import { useDispatch, useSelector } from "react-redux";
import { incrementar, reduzir } from "./store/contador";
import { toggleModal } from "./store/modal";

function App() {
  const { contador, modal } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Total: {contador.total}</h1>
      <button onClick={() => dispatch(incrementar())}>Incrementar</button>
      <button onClick={() => dispatch(reduzir())}>Incrementar</button>
      <h2>Modal {modal ? "Aberto" : "Fechado"}</h2>
      <button onClick={() => dispatch(toggleModal())}>Toggle modal</button>
    </div>
  );
}

export default App;
