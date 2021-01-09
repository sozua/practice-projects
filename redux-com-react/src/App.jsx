import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { autoLogin } from "./store/login";
import "./styles/global.css";
import Form from "./component/Form";
import Feed from "./component/Feed";

function App() {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.login?.user);

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  if (loading) return <>Carregando...</>;

  if (data) {
    return <Feed />;
  } else {
    return <Form />;
  }
}

export default App;
