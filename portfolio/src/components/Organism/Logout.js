import { Link } from "react-router-dom";

export const Logout = () => {
  return (
    <section id="logout__page">
      <div className="logout__box">
        <h1>Wylogowanie nastąpiło pomyślnie!</h1>
        <div className="loginBox__btns">
          <button>
            <Link to="/">Strona główna</Link>
          </button>
        </div>
      </div>
    </section>
  );
};
