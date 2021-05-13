import { HashLink as Link } from "react-router-hash-link";

export const Nav = () => {
  return (
    <>
      <nav>
        <ul className="nav">
          {" "}
          <li>
            <Link to="/" className="nav__element">
              Start
            </Link>
          </li>
          <li>
            <Link
              to="/#steps"
              className="nav__element"
              smooth={true}
              duration={1000}
            >
              O co chodzi?
            </Link>
          </li>
          <li>
            <Link
              to="/#about-us"
              className="nav__element"
              smooth={true}
              duration={1000}
            >
              O nas
            </Link>
          </li>
          <li>
            <Link
              to="/#who-we-help"
              className="nav__element"
              smooth={true}
              duration={1000}
            >
              Fundacje i organizacje
            </Link>
          </li>
          <li>
            <Link
              to="/#contact"
              className="nav__element"
              smooth={true}
              duration={1000}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
