import { Nav } from "../Molecules/Nav";
import { Logo } from "../Atoms/Logo";
export const Form = () => {
  return (
    <>
      <section className="form">
        <Nav />
        <Logo text={"Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM"} />
        <h2>Wystarczą cztery proste kroki:</h2>
        <ul>
          <li>
            <h3>1</h3>
            Wybiesz rzeczy
          </li>{" "}
          <li>
            <h3>2</h3>Spakuj je w worki
          </li>{" "}
          <li>
            <h3>3</h3>Wybierz fundację
          </li>
          <li>
            <h3>4</h3>Zamów kuriera
          </li>
        </ul>
      </section>
    </>
  );
};
