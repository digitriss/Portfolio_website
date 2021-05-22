import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Atoms/Logo";
import { Nav } from "../Molecules/Nav";
// import { auth } from "../../firebase";
// import { validation } from "../API/validation";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  return (
    <>
      <section className="login">
        <Nav />
        <Logo text={"Zaloguj się"} />
        <form className="login__form">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChang={(e) => setEmail(e.target.value)}
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
          <Link to="/signup" className="login__links__button">
            <p>Załóż konto</p>
          </Link>
        </div>
      </section>
    </>
  );
};
