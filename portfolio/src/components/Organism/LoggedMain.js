import { Nav } from "../Molecules/Nav";
import { Logo } from "../Atoms/Logo";

export const LoggedMain = () => {
  return (
    <>
      <Nav />
      <Logo text={"Oddaj rzeczy których już nie chcesz potrzebującym"} />
      <h2>Wystarczą cztery proste kroki</h2>
      <ul>
        <li>
          <span>1</span>Wubierz rzeczy
        </li>
        <li>
          <span>2</span>Spakuj je w worki
        </li>
        <li>
          <span>3</span>Wybierz fundację
        </li>
        <li>
          <span>4</span>Zamów kuriera
        </li>
      </ul>
    </>
  );
};
