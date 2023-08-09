import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import RoutesHero from "src/components/RoutesHero";

function Contact() {
  return (
    <>
      <Navbar />
      <RoutesHero
        cName="route-mid"
        routeImg={AboutImg}
        title="Contato"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
