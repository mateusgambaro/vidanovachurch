import Navbar from "../components/Navbar";
import RoutesHero from "../components/RoutesHero";
import Footer from "../components/Footer";
import Equipe from "../assets/departamento.jpeg";
import Destination from "src/components/Destination";

function About() {
  return (
    <>
      <Navbar />
      <RoutesHero
        cName="route-mid"
        routeImg={Equipe}
        title="Conheça nossos projetos e ações"
        btnClass="hide"
      />
      <Destination />
      <Footer />
    </>
  );
}

export default About;
