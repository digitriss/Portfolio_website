import React, { useState, useEffect } from "react";
import { auth } from "../firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState();

  // const singup = (password, email) => {
  //   return auth.createUserWithEmailAndPassword(email, password);
  // };
  // useEffect(() => {}, []);
  // auth.onAuthStateChanged((user) => setCurrentUser(user));
  // const value = { currentUser };

  return <AuthContext.Provider value={"test"}>{children}</AuthContext.Provider>;
};
