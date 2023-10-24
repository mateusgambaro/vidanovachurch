import { FaWhatsapp } from "react-icons/fa";
import "./ServiceStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function ServicesData(props) {
  return (
    <div className="s-card">
      <div className="s-image">
        <img src={props.image} alt="service" />
      </div>
      <div className="texts">
        <h4 style={{ textAlign: "center" }}>{props.heading}</h4>
        <p style={{ marginBottom: "10px" }}>{props.text}</p>
        <p>{props.secondText}</p>
        <p>{props.thirdText}</p>
        <p>{props.fourthText}</p>
        <p className="address">{props.address}</p>
      </div>
      <div className="social-icons">
        {props.website && (
          <a href={props.website} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGlobe} size="2x" />
          </a>
        )}

        {props.instagram && (
          <a href={props.instagram} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        )}

        {props.facebook && (
          <a href={props.facebook} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        )}
      </div>
      <a className={props.btnClass} href={props.url}>
        <FaWhatsapp className="whatsapp-icon" /> {props.buttonText}
      </a>
    </div>
  );
}

export default ServicesData;
