import { useState } from "react";
import Photos from "./components/Photos";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <button onClick={() => setToggle((oldToggle) => !oldToggle)}>
        Toggle
      </button>
      {toggle && <Photos />}
    </>
  );
}

export default App;
