import "./OfficeDataStyles.css";
import OfficeData from "./OfficeData";
import entradalogo from "../assets/entradalogo.jpg";
import entrada_esc from "../assets/entrada_esc.jpg";
import salaespera from "../assets/salaespera.jpg";
import escritorio1 from "../assets/escritorio1.jpg";
import cafe_esc from "../assets/cafe_esc.jpg";
import escritorio3 from "../assets/escritorio3.jpg";
import escritorio4 from "../assets/escritorio4.jpg";
import salareuniao from "../assets/salareuniao.jpg";
import reuniao2_esc from "../assets/reuniao2_esc.jpg";

function Office() {
  const images = [
    entradalogo,
    entrada_esc,
    salaespera,
    escritorio1,
    cafe_esc,
    escritorio3,
    escritorio4,
    salareuniao,
    reuniao2_esc
  ];
  return (
    <div className="office">
      <hr class="rounded" />
      <h1 style={{ marginBottom: "10px" }}>Escritório</h1>
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
