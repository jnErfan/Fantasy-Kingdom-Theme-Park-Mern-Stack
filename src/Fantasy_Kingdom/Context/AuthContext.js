import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";

const AuthProvider = createContext();
const AuthContext = ({ children }) => {
  const authContainer = useFirebase();
  return (
    <AuthProvider.Provider value={authContainer}>
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthContext;
