import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { autoLogin } from "./store/login";
import "./styles/global.css";
import Form from "./component/Form";
import Feed from "./component/Feed";

function App() {
  const [loading, setLoading] = useState(true);
  const [logged, setLogged] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.login);

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  useEffect(() => {
    const userLogged = state.user.data;
    const loading = state.user.loading;
    setLogged(userLogged);
    setLoading(loading);
  }, [state]);

  if (loading) return <>Carregando...</>;

  return <>{logged ? <Feed /> : <Form />}</>;
}

export default App;
