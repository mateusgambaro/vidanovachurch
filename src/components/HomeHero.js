import "./HomeHeroStyles.css";
// import Typed from "react-typed";
import { FaWhatsapp } from 'react-icons/fa';

function HomeHero(props) {
  return (
    <div className="hero-background">
      <img
        src={props.coverImg}
        alt="Background Cover"
        className="background-image"
      />
      <div className={props.cName}>
        <div className="hero-content">
          <div className="hero-text">
            <h1>{props.title}</h1>
            {/* <div className="typed-title-container">
              <span className="static-text">{props.text}</span>
              <Typed
                className="typed-title"
                strings={["INSS", "APOSENTADORIA", "PREVIDÊNCIA", "PROCESSOS"]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </div> */}
            <a className={props.btnClass} href={props.url}>
              <FaWhatsapp className="whatsapp-icon" />{" "}
              {props.buttonText}
            </a>
          </div>
          <div className="hero-image-container">
            <img src={props.heroImg} alt="heroImg" className="heroImg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
