import { Link } from "react-router-dom";
import { Logo } from "../Atoms/Logo";
import { Nav } from "../Molecules/Nav";
import { LoginPanel } from "./LoginPanel";

export const Logout = () => {
  return (
    <section className="logout">
      <LoginPanel />
      <Nav />
      <Logo text={"Wylogowanie nastąpiło pomyślnie!"} />
      <div className="loginBox__btns">
        <Link to="/" className="login__links__button">
          <p>Strona główna</p>
        </Link>
      </div>
    </section>
  );
};
