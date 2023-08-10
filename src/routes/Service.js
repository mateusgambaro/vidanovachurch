import Navbar from "../components/Navbar";
import RoutesHero from "../components/RoutesHero";
import Footer from "../components/Footer";
import aposentadoria from "../assets/aposentadoria.jpg"
import Services from "src/components/Services";

function Service() {
  return (
    <>
      <Navbar />
      <RoutesHero
        cName="route-mid"
        routeImg={aposentadoria}
        title="Serviços"
        btnClass="hide"
      />
      <Services />
      <Footer />
    </>
  );
}

export default Service;
