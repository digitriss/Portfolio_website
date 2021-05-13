import { useState } from "react";
import { Link } from "react-router-dom";

export const LoginPanel = () => {
  const [login, setLogin] = useState(false);

  return (
    <>
      <ul className="header__login" id="login">
        <Link className="loginElement" to="/login">
          <li>Zaloguj się</li>
        </Link>
        <Link className="loginElement" to="/register">
          <li>Zarejestruj się</li>
        </Link>
      </ul>
    </>
  );
};
