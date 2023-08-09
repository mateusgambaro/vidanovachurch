import "./OfficeDataStyles.css";
import OfficeData from "./OfficeData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Office() {
  const images = [Trip1, Trip2, Trip3];
  return (
    <div className="office">
      <hr class="rounded"/>
      <h1 style={{marginBottom: '10px'}}>Escritório</h1>
      <p>Conheça nosso espaço.</p>
      <div className="officecard">
        {images.map((img, index) => (
          <OfficeData image={img} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Office;
