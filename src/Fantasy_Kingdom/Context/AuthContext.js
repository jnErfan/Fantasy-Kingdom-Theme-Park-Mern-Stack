import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";
// Context Api
export const AuthProvider = createContext();
const AuthContext = ({ children }) => {
  const authContext = useFirebase();
  return (
    <AuthProvider.Provider value={authContext}>
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthContext;
