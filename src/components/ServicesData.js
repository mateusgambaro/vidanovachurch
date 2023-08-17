import { FaWhatsapp } from "react-icons/fa";
import "./ServiceStyles.css";

function ServicesData(props) {
  return (
    <div className="s-card">
      <div className="s-image">
        <img src={props.image} alt="service" />
      </div>
      <div className="texts">
      <h4 style={{textAlign: 'center'}}>{props.heading}</h4>
        <p style={{marginBottom: '10px'}}>{props.text}</p>
        <p>{props.secondText}</p>
      </div>
      <a className={props.btnClass} href={props.url}>
        <FaWhatsapp className="whatsapp-icon" /> {props.buttonText}
      </a>
    </div>
  );
}

export default ServicesData;
