import { Link } from "react-router-dom";
import { Logo } from "../Atoms/Logo";
import { Button } from "../Atoms/Button";

export const HomeMain = () => {
  return (
    <>
      <div className="welcome__main">
        <div className="welcome__container">
          <Logo
            text={" Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce"}
          />
          <div className="welcome__buttons">
            <Link to="/login">
              <Button text={"Oddaj rzeczy"} />
            </Link>
            <Link to="/login">
              <Button text={"Zorganizuj zbiórkę"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
