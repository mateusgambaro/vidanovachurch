import "./TripStyles.css";
import TripData from "./TripData";
import handShake from "../assets/hand-shake.svg";
import contract from "../assets/contract.svg";
import portfolio from "../assets/portfolio.svg";
import { serviceMessages } from "src/messages/services";

function Trip() {
  const retirement = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.retirement}`;
  const foresight = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.foresight}`;
  const assistanceBenefitsReview = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.assistanceBenefitsReview}`;

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
          url={foresight}
        />
        <TripData
          image={handShake}
          heading="Aposentadorias e Benefícios Previdenciários"
          text="Requerimento e acompanhamento individualizado do benefício, junto ao sistema exclusivo para advogados (Meu INSS Digital)."
          btnClass="show"
          buttonText="Quero me aposentar"
          url={retirement}
        />
        <TripData
           image={portfolio}
           heading="Benefício Assistencial"
           text="Benefício de um salário-mínimo devido à pessoa com deficiência e ao idoso com 65 anos ou mais, que comprovem não possuir condições de prover o próprio sustento."
           secondText="Requerimento, análise e agendamento de perícias medicas e avaliações sociais pelo sistema exclusivo do advogado (Meu INSS digital)."
           btnClass="show"
           buttonText="Tenho o benefício?"
           url={assistanceBenefitsReview}
        />
      </div>
      <a href="/service" className="looking-link">
        Procurando mais?
      </a>
    </div>
  );
}

export default Trip;
