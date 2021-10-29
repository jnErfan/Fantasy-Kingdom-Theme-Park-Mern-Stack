import FirebaseInitialize from "../Firebase/FirebaseInitialize";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

FirebaseInitialize();

const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  const googleLogin = () => {
    setError("");
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
      setIsLoading(false);
    });
  }, [auth]);

  return {
    user,
    error,
    isLoading,
    googleLogin,
    setUser,
    logOut,
  };
};

export default useFirebase;
