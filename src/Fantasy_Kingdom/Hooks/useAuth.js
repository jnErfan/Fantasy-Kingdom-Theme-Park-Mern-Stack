import { useContext } from "react";
import { AuthProvider } from "../Context/AuthContext";

// Context Api Use
const useAuth = () => {
  return useContext(AuthProvider);
};

export default useAuth;
