import Navbar from "../components/Navbar";
import RoutesHero from "../components/RoutesHero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import aposentadoria from "../assets/aposentadoria.jpg"

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
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
