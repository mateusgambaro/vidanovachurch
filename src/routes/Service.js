import Navbar from "../components/Navbar";
import RoutesHero from "../components/RoutesHero";
import Footer from "../components/Footer";
import servicos from "../assets/church.jpeg"
import Services from "src/components/Services";

function Service() {
  return (
    <>
      <Navbar />
      <RoutesHero
        cName="route-mid"
        routeImg={servicos}
        title="Unindo Empresários para o Sucesso e Prosperidade"
        btnClass="hide"
      />
      <Services />
      <Footer />
    </>
  );
}

export default Service;
