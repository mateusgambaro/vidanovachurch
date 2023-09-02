import { FaWhatsapp } from "react-icons/fa";
import "./ServiceStyles.css";

function TripData(props) {
  return (
    <div className="s-card">
      <div className="s-image">
        <img src={props.image} alt="trip" />
      </div>
      <div className="texts">
        <h4 style={{ textAlign: "center" }}>{props.heading}</h4>
        <p style={{ marginBottom: "10px", textIndent: "8px" }}>{props.text}</p>
        <p style={{ textIndent: "5px" }}>{props.secondText}</p>
      </div>
      {props.heading === "Vida Nova Business" && (
        <a href="/service" className="looking-link">
          Ver empresas parceiras
        </a>
      )}
    </div>
  );
}

export default TripData;
