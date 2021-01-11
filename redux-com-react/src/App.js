import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login/Login";

import "./App.css";
import User from "./pages/User/User";
import ProtectedRoute from "./components/ProtectedRoute";
import Photo from "./pages/Photo";
import UserProfile from "./pages/User/UserProfile";
import NotFound from "./pages/NotFound";
import { autoLogin } from "./store/user";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/perfil/:user" element={<UserProfile />} />
            <Route path="/foto/:id" element={<Photo />} />
            <ProtectedRoute path="/conta/*" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
