import React from "react";
import "./HomeHeroStyles.css";
import Typed from "typed.js";
import { FaWhatsapp } from "react-icons/fa";

function HomeHero(props) {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        "<strong>Planejamento Previdenciário</strong>",
        "<strong>Aposentadoria</strong>",
        "<strong>Beneficio Assistencial</strong>",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <div className="hero-background">
      <img
        src={props.coverImg}
        alt="Background Cover"
        className="background-image"
        loading="lazy" 
      />
      <div className={props.cName}>
        <div className="hero-content">
          <div className="hero-text">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <div className="typed-title-container">
              <span className="static-text">{props.text}</span>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <span className="typed-title" ref={el} />
              </div>
            </div>
            <a className={props.btnClass} href={props.url}>
              <FaWhatsapp className="whatsapp-icon" /> {props.buttonText}
            </a>
          </div>
          <div className="hero-image-container">
            <img src={props.heroImg} alt="heroImg" className="heroImg" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
