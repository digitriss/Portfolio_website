import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
export const LoginPanel = () => {
  //spytaj firebase czy uzytkownik jest zalogowany
  const user = auth.currentUser;
  console.log("current user", user);
  return (
    <>
      {user !== null ? (
        <div>
          <p>{user.email}</p>
          <p>Wyloguj się</p>
        </div>
      ) : (
        <ul className="header__login" id="login">
          <Link className="loginElement" to="/login">
            <li>Zaloguj się</li>
          </Link>
          <Link className="loginElement" to="/signup">
            <li>Zarejestruj się</li>
          </Link>
        </ul>
      )}
    </>
  );
};
