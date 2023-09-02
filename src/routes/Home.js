import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Footer from "../components/Footer";
import Trip from "src/components/Trip";
import logoentrada from "../assets/churchpeople.jpeg";
import { contactMessages } from "src/messages/contact";

function Home() {
const whatsAppAPI = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${contactMessages.helloMessage}`;  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero"
        coverImg={logoentrada}
        title="Um lugar para pertencer"
        subtitle="É tempo de renovação"
        btnClass="show"
        buttonText="Horários de culto"
        url={whatsAppAPI}
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
