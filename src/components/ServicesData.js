import { FaWhatsapp } from "react-icons/fa";
import "./TripStyles.css";

function ServicesData(props) {
  return (
    <div className="s-card">
      <div className="s-image">
        <img src={props.image} alt="service" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <a className={props.btnClass} href={props.url}>
        <FaWhatsapp className="whatsapp-icon" /> {props.buttonText}
      </a>
    </div>
  );
}

export default ServicesData;
