import { Logo } from "./Atoms/Logo";
import Signature from "../assets/Signature.svg";

export const AboutUs = () => {
  return (
    <>
      <section className="about-us" id="about-us">
        <div className="about-us__container">
          <Logo text={"O nas"} />
          <div className="about-us__wrap">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, eius, ratione doloribus provident quo, suscipit
              explicabo tempore quos alias vitae sint est atque asperiores
              incidunt? Magni, maxime? Id, amet soluta.
            </p>
            <img src={Signature} />
          </div>
        </div>
        <div className="about-us__image"></div>
      </section>
    </>
  );
};
