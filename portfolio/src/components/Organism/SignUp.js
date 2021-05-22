import { useState, useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Nav } from "../Molecules/Nav";
import { Logo } from "../Atoms/Logo";
import { auth } from "../../firebase/firebase";
import { useHistory } from "react-router-dom";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [error, setErrors] = useState("");
  const history = useHistory();

  const signup = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        console.log(res);
      })
      .catch((err) => {
        setErrors(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConf) {
      return setErrors("Hasła są różne");
    }
    console.log("handleSubmit");
    await signup();
    history.push("/");
  };

  return (
    <>
      <section className="register">
        <Nav />
        <Logo text={"Zarejestruj się"} />
        <form className="register__form" onSumbit={handleSubmit}>
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
          {error}
          <label>Powtórz hasło</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPasswordConf(e.target.value)}
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
