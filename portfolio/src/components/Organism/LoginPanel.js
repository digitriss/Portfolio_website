import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase/firebase";
export const LoginPanel = () => {
  const history = useHistory();
  //spytaj firebase czy uzytkownik jest zalogowany
  const user = auth.currentUser;
  console.log("current user", user);
  const logout = () => {
    auth.signOut();
    history.push("/logout");
  };
  return (
    <>
      {user !== null ? (
        <div>
          <p>{user.email}</p>
          <p onClick={logout}>Wyloguj się</p>
          {/* <Link to="/logout">
            <p>Wyloguj się</p>
          </Link> */}
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
