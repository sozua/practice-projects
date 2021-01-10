import React, { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GET_USER, TOKEN_POST, TOKEN_VALIDATE_POST } from "./api";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [logged, setLogged] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();

    setData(json);
    setLogged(true);
  }

  const userLoggout = useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogged(false);

    window.localStorage.removeItem("token");

    navigate("/login");
  }, [navigate]);

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({
        username,
        password,
      });
      const tokenRes = await fetch(url, options);
      const { token } = await tokenRes.json();

      if (!token) throw new Error(`Error: ${token.statusText}`);
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (err) {
      setError(err.message);
      setLogged(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);

          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido");
          await getUser(token);
        } catch (err) {
          userLoggout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogged(false);
      }
    }
    autoLogin();
  }, [userLoggout]);

  return (
    <UserContext.Provider
      value={{ userLogin, data, userLoggout, logged, error, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
