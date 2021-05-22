import { HomeHeader } from "./HomeHeader";
import { HomeThreeColumns } from "./HomeThreeColumns";
import { Welcome } from "./HomeMain";
import { HomeSteps } from "./HomeSteps";
import { AboutUs } from "./AboutUs";
import { WhoWeHelp } from "./WhoWeHelp";
import { Contact } from "./Contact";
import { Footer } from "../Molecules/Footer";
import { HomeWelcome } from "./HomeWelcome";

export const Home = () => {
  return (
    <>
      <HomeWelcome />
      <HomeThreeColumns />
      <HomeSteps />
      <AboutUs />
      <WhoWeHelp />
      <Contact />
      <Footer />
    </>
  );
};
