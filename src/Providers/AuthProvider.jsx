import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const axiosPublic = UseAxiosPublic();
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

  // <---------------- forget password ----------------->
  const forgetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // <----------------- Sign Out ---------------------->
  const logOut = () => {
    return signOut(auth);
  };

  //   <---------------------------------Observer -------------------------->
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = currentUser.email;
        axiosPublic.post("jwt", { userInfo }).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
      console.log("auth", currentUser);
    });
    return () => {
      return unSubscribe;
    };
  }, [axiosPublic]);

  //    <------------------------------- Auth Values to sent ------------------------------->
  const authInfo = {
    user,
    loading,
    setLoading,
    signUpUser,
    signIn,
    logOut,
    signInGoogle,
    updateUserProfile,
    forgetPass,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
