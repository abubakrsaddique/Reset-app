import React, { createContext, useState, useContext } from "react";
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (credentials) => {
    if (credentials.username === "demo" && credentials.password === "demo") {
      setIsLoggedIn(true);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const authValues = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};
