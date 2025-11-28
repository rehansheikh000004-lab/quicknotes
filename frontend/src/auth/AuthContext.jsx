// src/auth/AuthContext.jsx
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("qn_user")); } catch { return null; }
  });

  const [token, setToken] = useState(() => localStorage.getItem("qn_token") || null);

  useEffect(() => {
    if (token) localStorage.setItem("qn_token", token); else localStorage.removeItem("qn_token");
  }, [token]);

  useEffect(() => {
    if (user) localStorage.setItem("qn_user", JSON.stringify(user)); else localStorage.removeItem("qn_user");
  }, [user]);

  const login = (u, t) => { setUser(u); setToken(t); };
  const logout = () => { setUser(null); setToken(null); };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
