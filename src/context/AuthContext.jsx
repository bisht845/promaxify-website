import React, { createContext, useContext, useState, useEffect } from "react";
import { checkAuth } from "../services/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("promaxify_admin_token");
    if (!token) {
      setLoading(false);
      return;
    }
    checkAuth()
      .then((res) => {
        if (res.success && res.data?.user) {
          setAdmin(res.data.user);
        } else {
          localStorage.removeItem("promaxify_admin_token");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const login = (token, user) => {
    localStorage.setItem("promaxify_admin_token", token);
    setAdmin(user);
  };

  const logout = () => {
    localStorage.removeItem("promaxify_admin_token");
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);