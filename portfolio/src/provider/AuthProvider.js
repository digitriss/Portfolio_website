// import { createContext, useState, useEffect } from "react";
// import { auth } from "../firebase/firebase";

// export const firebaseAuth = createContext();

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState();
//   const [errors, setErrors] = useState([])

//   const signup = (email, password) =>
//     auth.createUserWithEmailAndPassword(email, password);

//   const sigin = (email, password) =>{
//     auth.signInWithEmailAndPassword(email, password)
//     .then( async res => {
//        console.log(res)
//         })
//         .catch(err => {
//           setErrors(prev => ([...prev, err.message]))
//         })
//       },

//   const value = { currentUser, signup, login, logout };

//   return (
//     <firebaseAuth.Provider value={value}>{children}</firebaseAuth.Provider>
//   );
// };
