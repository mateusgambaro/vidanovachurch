import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Footer from "../components/Footer";
import Trip from "src/components/Trip";
import meninas from "../assets/diassola.webp";
import logoentrada from "../assets/entradalogo.webp";
import { contactMessages } from "src/messages/contact";

function Home() {
  const whatsAppAPI = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${contactMessages.helloMessage}`
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero"
        heroImg={meninas}
        coverImg={logoentrada}
        title="Cuidamos da sua Aposentadoria do início ao fim"
        text="Atendimento para"
        btnClass="show"
        buttonText="Entre em contato"
        url={whatsAppAPI}
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
