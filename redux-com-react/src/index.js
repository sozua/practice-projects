import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import Header from "./component/Header";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <main>
        <Header />
        <App />
      </main>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
