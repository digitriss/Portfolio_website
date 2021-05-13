import { Nav } from "./Molecules/Nav";
import { LoginPanel } from "./LoginPanel";

export const HomeHeader = () => {
  return (
    <>
      <header className="header">
        <LoginPanel />
        <Nav />
      </header>
    </>
  );
};
