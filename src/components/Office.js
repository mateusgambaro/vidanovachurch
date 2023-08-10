import "./OfficeDataStyles.css";
import OfficeData from "./OfficeData";
import iconeDS from '../assets/icone_ds.jpg'

function Office() {
  const images = [iconeDS, iconeDS, iconeDS];
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
