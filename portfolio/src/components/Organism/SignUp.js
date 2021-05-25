import { useState, useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Nav } from "../Molecules/Nav";
import { Logo } from "../Atoms/Logo";
import { auth } from "../../firebase/firebase";
import { useHistory } from "react-router-dom";
import { validationAuth } from "../API/validation";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      setErrors((prevState) => ({
        ...prevState,
        emailError: "Email jest nieprawidłowy",
      }));
    }
    if (password !== passwordConf) {
      setErrors((prevState) => ({
        ...prevState,
        passwordConfError: "Hasła są różne",
      }));
    }
    if (password.length < 6) {
      setErrors((prevState) => ({
        ...prevState,
        passwordError: "Hasło musi mieć conajmniej 6 znaków",
      }));
    }
    // nie wiem jak ten warunek powinien wygladac
    // if (
    //   !errors.emailError &&
    //   !errors.passwordError &&
    //   !errors.passwordConfError
    // ) {
    // }
    else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          setErrors({
            emailError: "",
            passwordError: "",
            passwordConfError: "",
          });
          console.log("server response", res);
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
          console.log("error", err);
        });
    }
  };

  return (
    <>
      <section className="registration">
        <Nav />
        <Logo text={"Zarejestruj się"} />
        <form className="registration__form" onSubmit={(e) => handleSubmit(e)}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{errors.emailError}</p>
          <p>{existAccount}</p>
          <label>Hasło</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p> {errors.passwordError}</p>
          <label>Powtórz hasło</label>
          <input
            type="password"
            name="passwordConf"
            onChange={(e) => setPasswordConf(e.target.value)}
          />
          <p> {errors.passwordConfError}</p>
          <button>Zarejestruj</button>
        </form>
        <div className="registration__links">
          <Link to="/login" className="register__links__button">
            <p>Zaloguj się</p>
          </Link>
          <Link to="/" className="registration__links__button">
            <p>Załóż konto</p>
          </Link>
        </div>
      </section>
    </>
  );
};

// const history = useHistory();

// const signup = (email, password) => {
//   auth
//     .createUserWithEmailAndPassword(email, password)
//     .then(async (res) => {
//       setErrors("");
//       console.log(res);
//     })
//     .catch((err) => {
//       if (err.code === "auth/email-already-in-use") {
//         setExistAccount("Konto już istnieje");
//       }
//     });
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const result = validationAuth(form);
//   result ? signup(form.email, form.password) : setErrors(result);
//   console.log(signup(form.email, form.password));
// };
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (!re.test(String(email).toLowerCase())) {
//     setErrors((p) => ({
//       ...p,
//       emailError: "Podany email jest nieprawidłowy",
//     }));
//     console.log(errors.emailError);
//   } else {
//     setErrors((p) => ({
//       ...p,
//       emailError: "",
//     }));
//   }
//   if (password.length < 6 && password === "") {
//     setErrors((p) => ({
//       ...p,
//       passwordError: "Hasło musi mieć co najmniej 6 znaków",
//     }));
//   } else {
//     setErrors((p) => ({
//       ...p,
//       passwordError: "",
//     }));
//   }
//   if (password !== passwordConf && passwordConf === "") {
//     setErrors((p) => ({ ...p, passwordConfError: "Hasła się różnią!" }));
//     console.log(errors, "errors");
//   } else {
//     setErrors((p) => ({ ...p, passwordConfError: "" }));
//   }
//   if (
//     errors.emailError === "" &&
//     errors.passwordError === "" &&
//     errors.passwordConfError === ""
//   ) {
//     await signup();
//     console.log(errors);
//   }
// };
