import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Nav } from "./Molecules/Nav";
import { Logo } from "./Atoms/Logo";
import { auth } from "../context/Context";

export const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSumbit = (e) => {
    e.preventDEfault();
  };

  return (
    <>
      <section className="register">
        <Nav />
        <Logo text={"Zarejestruj się"} />
        <form className="register__form" onSubmit={handleSumbit}>
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
          <label>Powtórz hasło</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <div className="register__links">
          <Link to="/login" className="register__links__button">
            <p>Zaloguj się</p>
          </Link>
          <Link to="/" className="register__links__button">
            <p>Załóż konto</p>
          </Link>
        </div>
      </section>
    </>
  );
};
