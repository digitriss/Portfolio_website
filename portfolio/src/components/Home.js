import { HomeHeader } from "./HomeHeader";
import { HomeThreeColumns } from "./HomeThreeColumns";
import { Welcome } from "./Welcome";
import { HomeSteps } from "./HomeSteps";
import { AboutUs } from "./AboutUs";
import { WhoWeHelp } from "./WhoWeHelp";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <>
      <section className="welcome">
        <HomeHeader />
        <Welcome />
      </section>
      <HomeThreeColumns />
      <HomeSteps />
      <AboutUs />
      <WhoWeHelp />
      <Contact />
      <Footer />
    </>
  );
};
