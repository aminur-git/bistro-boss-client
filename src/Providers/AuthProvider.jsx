import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   create user using email=password
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Sign in with mail and pass

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();

  //   Sign in with google
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // <------------------- Update User ------------------>
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // <----------------- Sign Out ---------------------->
  const logOut = () => {
    return signOut(auth)
      .then(() => {
        toast.warning("Sign-out successful.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  //   <---------------------------------Observer -------------------------->
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("auth", currentUser);
    });
    return () => {
      return unSubscribe;
    };
  }, []);

  //    <------------------------------- Auth Values to sent ------------------------------->
  const authInfo = {
    user,
    loading,
    signUpUser,
    signIn,
    logOut,
    signInGoogle,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
