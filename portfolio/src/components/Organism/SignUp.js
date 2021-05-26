import { useState, useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Nav } from "../Molecules/Nav";
import { Logo } from "../Atoms/Logo";
import { auth } from "../../firebase/firebase";
import { useHistory } from "react-router-dom";
import { validateForm } from "../API/validation";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    passwordConfError: "",
  });
  const [existAccount, setExistAccount] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = validateForm(
      setErrors,
      email,
      password,
      passwordConf,
      errors
    );

    if (result) {
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          setErrors({
            emailError: "",
            passwordError: "",
            passwordConfError: "",
          });
          console.log("server response", res);
          history.push("/");
        })
        .catch((err) => {
          if (err.code === "auth/email-already-in-use") {
            setExistAccount("Konto już istnieje");
            setErrors({
              emailError: "",
              passwordError: "",
              passwordConfError: "",
            });
          }
          console.log("error", err, email, password);
        });
    } else {
      console.log("False");
    }
  };

  return (
    <>
      <section className="signup">
        <Nav />
        <Logo text={"Zarejestruj się"} />
        <form className="signup__form" onSubmit={(e) => handleSubmit(e)}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="signup__form__errors">{errors.emailError}</p>
          <p className="signup__form__errors">{existAccount}</p>
          <label>Hasło</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="signup__form__errors"> {errors.passwordError}</p>
          <label>Powtórz hasło</label>
          <input
            type="password"
            name="passwordConf"
            onChange={(e) => setPasswordConf(e.target.value)}
          />
          <p className="signup__form__errors">{errors.passwordConfError}</p>
          <div className="signup__links">
            <Link to="/signup" className="login__links__button">
              Zaloguj się
            </Link>
            <button className="signup__links__button" type="sumbit">
              Załóż konto
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
