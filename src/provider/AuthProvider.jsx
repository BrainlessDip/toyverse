import { signOut } from "firebase/auth";
import React, { createContext, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const value = { user, setUser, handleSignout };
  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
