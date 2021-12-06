import React, { useState, createContext, useEffect } from "react";
import {
  getSessionStorage,
  setSessionStorage,
} from "../utils/SessionStorageManagement";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const defaultState = false;
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    getSessionStorage("isAuthenticated", defaultState)
  );

  useEffect(() => {
    setSessionStorage("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={[isAuthenticated, setIsAuthenticated]}>
      {props.children}
    </AuthContext.Provider>
  );
};
