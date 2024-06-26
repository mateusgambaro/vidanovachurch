import Navbar from "../components/Navbar";
import FundoBG from "../assets/church.jpeg";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import RoutesHero from "src/components/RoutesHero";

function Contact() {
  return (
    <>
      <Navbar />
      <RoutesHero
        cName="route-mid"
        routeImg={FundoBG}
        title="Contato"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
