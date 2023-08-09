import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Footer from "../components/Footer";
import Trip from "src/components/Trip";
import testeImg from "../assets/teste.jpg";
import escritorio from "../assets/escritorio.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero"
        heroImg={testeImg}
        coverImg={escritorio}
        title="Cuidamos da sua Aposentadoria do início ao fim"
        text="Atendimento para"
        btnClass="show"
        buttonText="Entre em contato"
        url="/"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
