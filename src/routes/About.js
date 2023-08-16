import Navbar from "../components/Navbar";
import RoutesHero from "../components/RoutesHero";
import Office from "../components/Office";
import Footer from "../components/Footer";
import Equipe from "../assets/time.webp";
import Destination from "src/components/Destination";

function About() {
  return (
    <>
      <Navbar />
      <RoutesHero
        cName="route-mid"
        routeImg={Equipe}
        title="Conheça nossa equipe e escritório"
        btnClass="hide"
      />
      <Destination />
      <Office />
      <Footer />
    </>
  );
}

export default About;
