import "./TripStyles.css";
import TripData from "./TripData";
import handShake from "../assets/hand-shake.png";
import auction from "../assets/auction.png";
import scalesOfJustice from "../assets/scales-of-justice.png";

function Trip() {
  return (
    <div className="trip">
      <h1 style={{ marginBottom: "10px" }}>Serviços</h1>
      <p>Como podemos te ajudar?</p>
      <div className="tripcard">
        <TripData
          image={handShake}
          heading="Aposentadoria"
          text="Organizamos e preparamos sua pré-aposentadoria, com objetivo de auxiliar na sua busca por uma aposentadoria rápida e com o melhor benefício possível"
          btnClass="show"
          buttonText="Quero me aposentar"
          url="/"
        />
        <TripData
          image={auction}
          heading="Consulta Previdenciária"
          text="Serviço voltado para você que precisa conhecer o seu caso ou descobrir uma solução especializada para seu problema. Realizamos esse atendimento em todo Brasil e exterior."
          btnClass="show"
          buttonText="Consultar previdência"
          url="/"
        />
        <TripData
          image={scalesOfJustice}
          heading="Processo Judicial          "
          text="Realizamos todo seu processo, desde cálculos, processo administrativo, judicial, até o imposto de renda. Este é um serviço para você que não quer se incomodar com nada."
          btnClass="show"
          buttonText="Processar alguém"
          url="/"
        />
      </div>
      <a href='/service' className="looking-link">Procurando mais?</a>
    </div>
  );
}

export default Trip;
