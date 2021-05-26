import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Logo } from "../Atoms/Logo";
import { Nav } from "../Molecules/Nav";
import { auth } from "../../firebase/firebase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSumit: ", handleSubmit);
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        if (err.code === "auth/invalid-email") {
          setErrors((p) => ({ ...p, email: "Email jest nieprawidłowy" }));
        }
        if (err.code === "auth/wrong-password") {
          setErrors((p) => ({ ...p, password: "Hasło jest nieprawidłowe" }));
        }
      });
  };
  return (
    <>
      <section className="login">
        <Nav />
        <Logo text={"Zaloguj się"} />
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="login__form">
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="login__form__errors">{errors.email}</p>
            <label>Hasło</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="login__form__errors">{errors.password}</p>
          </div>
          <div className="login__links">
            <button className="login__links__button" type="sumbit">
              Zaloguj się
            </button>
            <Link to="/signup" className="login__links__button">
              <p>Załóż konto</p>
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};
