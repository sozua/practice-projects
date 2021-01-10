import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./UserContext";

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

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
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
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
