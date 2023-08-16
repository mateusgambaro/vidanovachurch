import "./TripStyles.css";
import TripData from "./TripData";
import handShake from "../assets/hand-shake.svg";
import contract from "../assets/contract.svg";
import auction from "../assets/auction.svg";
import { serviceMessages } from "src/messages/services";

function Trip() {
  const retirement = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.retirement}`;
  const foresight = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.foresight}`;
  const processMessage = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.process}`;

  return (
    <div className="trip">
      <h1 style={{ marginBottom: "10px" }}>Serviços</h1>
      <p>Como podemos te ajudar?</p>
      <div className="tripcard" style={{marginBottom: '40px'}}>
        <TripData
          image={contract}
          heading="Planejamento Previdenciário"
          text="Estudo detalhado do histórico previdenciário, com análise de pendências no Cadastro Nacional de Informações Sociais (CNIS), hipóteses de aposentadoria e simulações de contribuições futuras."
          secondText="O Planejamento Previdenciário permite identificar o melhor momento para requerer a aposentadoria e qual estratégia seguir para receber o benefício de maior valor. "
          btnClass="show"
          buttonText="Realizar planejamento"
          url={retirement}
        />
        <TripData
          image={handShake}
          heading="Aposentadorias e Benefícios Previdenciários"
          text="Requerimento e acompanhamento individualizado do benefício, junto ao sistema exclusivo para advogados (Meu INSS Digital)."
          btnClass="show"
          buttonText="Realizar o requerimento"
          url={foresight}
        />
        <TripData
          image={auction}
          heading="Benefícios por Incapacidade"
          text="Benefício para quem se encontra incapacitado de forma temporária ou permanente para o trabalho. "
          secondText="Análise de documentação médica aliada ao requerimento do benefício e agendamento de perícias."
          btnClass="show"
          buttonText="Possuo o benefício?"
          url={processMessage}
        />
      </div>
      <a href="/service" className="looking-link">
        Procurando mais?
      </a>
    </div>
  );
}

export default Trip;
