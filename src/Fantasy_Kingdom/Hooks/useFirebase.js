import FirebaseInitialize from "../Firebase/FirebaseInitialize";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

FirebaseInitialize();

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
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

  // GitHub Sign In
  const githubSignIn = () => {
    setError("");
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider)
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Facebook Sign In
  const facebookSignIn = () => {
    setError("");
    setIsLoading(true);
    return signInWithPopup(auth, facebookProvider)
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
    githubSignIn,
    facebookSignIn,
    setUser,
    logOut,
  };
};

export default useFirebase;
