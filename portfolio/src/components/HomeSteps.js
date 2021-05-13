import { Link } from "react-router-dom";
import { Logo } from "./Atoms/Logo";
import { Button } from "./Atoms/Button";
import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";

export const HomeSteps = () => {
  return (
    <>
      <section className="home-steps" id="steps">
        <Logo text={"Wystraczą cztery proste kroki"} />
        <div className="home-steps__container">
          <div className="home-steps__main">
            <div className="home-steps__wrap">
              <img src={Icon1} />
              <h4>Wybiesz rzeczy</h4>
              <div className="line"></div>
              <p>ubrania, zabawki, sprzęt i inne</p>
            </div>
            <div className="home-steps__wrap">
              <img src={Icon2} />
              <h4>Spakuj je</h4>
              <div className="line"></div>
              <p>skorzystaj z worków na śmieci</p>
            </div>
            <div className="home-steps__wrap">
              <img src={Icon3} />
              <h4>
                Zdecyduj komu <br />
                chcesz pomóc
              </h4>
              <div className="line"></div>
              <p>wybierz zaufane miejsce</p>
            </div>
            <div className="home-steps__wrap">
              <img src={Icon4} />
              <h4>Zamów kuriera</h4>
              <div className="line"></div>
              <p>kurier przyjdzie w dogodnym momencie</p>
            </div>
          </div>
        </div>
        <Link className="loginElement" to="/login">
          <Button text={"Oddaj rzeczy"} />
        </Link>
      </section>
    </>
  );
};
