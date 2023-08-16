import Navbar from "../components/Navbar";
import RoutesHero from "../components/RoutesHero";
import Footer from "../components/Footer";
import servicos from "../assets/servicos.webp"
import Services from "src/components/Services";

function Service() {
  return (
    <>
      <Navbar />
      <RoutesHero
        cName="route-mid"
        routeImg={servicos}
        title="Serviços"
        btnClass="hide"
      />
      <Services />
      <Footer />
    </>
  );
}

export default Service;
