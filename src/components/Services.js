import "./ServiceStyles.css";
import handShake from "../assets/hand-shake.svg";
import contract from "../assets/contract.svg";
import auction from "../assets/auction.svg";
import scalesOfJustice from "../assets/scales-of-justice.svg";
import growth from "../assets/growth.svg";
import portfolio from "../assets/portfolio.svg";
import ServicesData from "./ServicesData";
import { serviceMessages } from "src/messages/services";

function Services() {
  const retirement = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.retirement}`;
  const foresight = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.foresight}`;
  const processMessage = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.process}`;
  const diagnostic = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.diagnostic}`;
  const lifeReview = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.lifeReview}`;
  const administrationPieces = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.administrationPieces}`;

  return (
    <div className="service">
      <div className="servicecard">
        <ServicesData
          image={contract}
          heading="Planejamento Previdenciário"
          text="Estudo detalhado do histórico previdenciário, com análise de pendências no Cadastro Nacional de Informações Sociais (CNIS), hipóteses de aposentadoria e simulações de contribuições futuras."
          secondText="O Planejamento Previdenciário permite identificar o melhor momento para requerer a aposentadoria e qual estratégia seguir para receber o benefício de maior valor. "
          btnClass="show"
          buttonText="Realizar planejamento"
          url={retirement}
        />
        <ServicesData
          image={handShake}
          heading="Aposentadorias e Benefícios Previdenciários"
          text="Requerimento e acompanhamento individualizado do benefício, junto ao sistema exclusivo para advogados (Meu INSS Digital)."
          btnClass="show"
          buttonText="Realizar o requerimento"
          url={foresight}
        />
        <ServicesData
          image={auction}
          heading="Benefícios por Incapacidade"
          text="Benefício para quem se encontra incapacitado de forma temporária ou permanente para o trabalho. "
          secondText="Análise de documentação médica aliada ao requerimento do benefício e agendamento de perícias."
          btnClass="show"
          buttonText="Possuo o benefício?"
          url={processMessage}
        />
        <ServicesData
          image={scalesOfJustice}
          heading="Revisão de Benefícios"
          text="Analisamos o seu processo previdenciário (administrativo ou judicial) para identificar se possui direito de revisão e aumentar o benefício."
          btnClass="show"
          buttonText="Realizar revisão"
          url={diagnostic}
        />
        <ServicesData
          image={growth}
          heading="Revisão da Vida Toda"
          text="A Revisão da Vida toda é devida para aqueles que tiveram contribuições anteriores à julho de 1994 e que se aposentaram antes da reforma da previdência."
          secondText="Neste caso, realiza-se um estudo para identificar se aplicação da Revisão da Vida Toda aumentará a renda mensal do seu benefício previdenciário."
          btnClass="show"
          buttonText="Tenho direito?"
          url={lifeReview}
        />
        <ServicesData
          image={portfolio}
          heading="Benefício Assistencial"
          text="Benefício de um salário-mínimo devido à pessoa com deficiência e ao idoso com 65 anos ou mais, que comprovem não possuir condições de prover o próprio sustento."
          secondText="Requerimento, análise e agendamento de perícias medicas e avaliações sociais pelo sistema exclusivo do advogado (Meu INSS digital)."
          btnClass="show"
          buttonText="Analisar"
          url={administrationPieces}
        />
      </div>
      <div className="office">
        <hr class="rounded" />
        <h1 style={{ marginBottom: "10px" }}>Como trabalhamos</h1>
        <p>Nosso time é composto por pessoas excelentes e dedicadas.</p>
        <div className="officecard">
          {/* {images.map((img, index) => (
            <OfficeData image={img} key={index} />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Services;
