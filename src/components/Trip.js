import "./TripStyles.css";
import TripData from "./TripData";
import handShake from "../assets/hand-shake.png";
import contract from "../assets/contract.png";
import auction from "../assets/auction.png";
import { serviceMessages } from "src/messages/services";

function Trip() {
  const retirement = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.retirement}`
  const foresight = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.foresight}`
  const processMessage = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.process}`

  return (
    <div className="trip">
      <h1 style={{ marginBottom: "10px" }}>Serviços</h1>
      <p>Como podemos te ajudar?</p>
      <div className="tripcard">
        <TripData
          image={contract}
          heading="Aposentadoria"
          text="Organizamos e preparamos sua pré-aposentadoria, com objetivo de auxiliar na sua busca por uma aposentadoria rápida e com o melhor benefício possível"
          btnClass="show"
          buttonText="Quero me aposentar"
          url={retirement}
        />
        <TripData
          image={handShake}
          heading="Consulta Previdenciária"
          text="Serviço voltado para você que precisa conhecer o seu caso ou descobrir uma solução especializada para seu problema. Realizamos esse atendimento em todo Brasil e exterior."
          btnClass="show"
          buttonText="Consultar previdência"
          url={foresight}
        />
        <TripData
          image={auction}
          heading="Processo Judicial          "
          text="Realizamos todo seu processo, desde cálculos, processo administrativo, judicial, até o imposto de renda. Este é um serviço para você que não quer se incomodar com nada."
          btnClass="show"
          buttonText="Processar alguém"
          url={processMessage}
        />
      </div>
      <a href='/service' className="looking-link">Procurando mais?</a>
    </div>
  );
}

export default Trip;
