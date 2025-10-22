import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleRegister = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(result.user);
      return result;
    } catch (error) {
      switch (error.code) {
        case "auth/user-disabled":
          alert("Your account has been disabled. Please contact support.");
          break;
        case "auth/popup-closed-by-user":
          alert("Sign-in cancelled. Please try again.");
          break;
        case "auth/network-request-failed":
          alert("Network error. Check your connection and try again.");
          break;
        case "auth/email-already-in-use":
          alert(
            "This email is already registered. Please log in or use a different email."
          );
          break;
        default:
          alert(error.message);
          break;
      }
      return false;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = { user, setUser, loading, handleSignout, handleRegister };
  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
