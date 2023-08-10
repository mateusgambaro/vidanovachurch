import { FaWhatsapp } from "react-icons/fa";
import "./TripStyles.css";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="trip" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <a className={props.btnClass} href={props.url}>
        <FaWhatsapp className="whatsapp-icon" /> {props.buttonText}
      </a>
    </div>
  );
}

export default TripData;
