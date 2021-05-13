import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Atoms/Logo";
import { Nav } from "./Molecules/Nav";
// import { useAuth } from "../context/Context";

//plik konfiguracyjny do regexa
//ten regex nie działa dobrze z mom mailem
// musze przełądowywac strne od poczatku jezeli zle wpisalał dane
export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const reg =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <>
      <section className="login">
        <Nav />
        <Logo text={"Zaloguj się"} />
        <form className="login__form">
          <label>Email</label>
          <input
            type="text"
            name="name"
            onChang={(e) => setName(e.target.value)}
          />
          <label>Hasło</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <div className="login__links">
          <Link to="/" className="login__links__button">
            <p>Zaloguj się</p>
          </Link>
          <Link to="/register" className="login__links__button">
            <p>Załóż konto</p>
          </Link>
        </div>
      </section>
    </>
  );
};
