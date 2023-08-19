import React, { useState, useEffect } from 'react';
import "./ServiceStyles.css";
import handShake from "../assets/hand-shake.svg";
import contract from "../assets/contract.svg";
import auction from "../assets/auction.svg";
import scalesOfJustice from "../assets/scales-of-justice.svg";
import growth from "../assets/growth.svg";
import portfolio from "../assets/portfolio.svg";
import publicserver from "../assets/publicserver.svg";
import processauction from "../assets/processauction.svg";
import loan from "../assets/loan.svg";
import lion from "../assets/lion.svg";
import ServicesData from "./ServicesData";
import { serviceMessages } from "src/messages/services";
import { LazyLoadImage } from "react-lazy-load-image-component";
import workGraph from '../assets/workgraph.png'
import workGraphMobile from '../assets/workgraphmobile.png'

function Services() {
  const retirement = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.retirement}`;
  const foresight = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.foresight}`;
  const processMessage = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.process}`;
  const illBenefit = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.illBenefit}`;
  const lifeReview = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.lifeReview}`;
  const benefitsReview = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.benefitsReview}`;
  const assistanceBenefitsReview = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.assistanceBenefitsReview}`;
  const foresightPublicPlanning = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.foresightPublicPlanning}`;
  const loanReview = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.loanReview}`;
  const IRMessage = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=${serviceMessages.IRMessage}`;

  const [currentImage, setCurrentImage] = useState(workGraph);

  useEffect(() => {
    const setImage = () => {
      if (window.innerWidth <= 600) {
        setCurrentImage(workGraphMobile);
      } else {
        setCurrentImage(workGraph);
      }
    };

    // Initial set
    setImage();

    // Add an event listener to handle window resize
    window.addEventListener('resize', setImage);

    // Cleanup the listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', setImage);
    };
  }, []);
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
          url={foresight}
        />
        <ServicesData
          image={handShake}
          heading="Aposentadorias e Benefícios Previdenciários"
          text="Análise, organização e solicitação de documentos, petição administrativa, requerimento e acompanhamento individualizado do processo, junto ao sistema exclusivo para advogados (Meu INSS Digital)."
          secondText="Também é indicado para quem já requereu o pedido junto ao INSS, mas deseja contar com uma assistência jurídica especializada."
          btnClass="show"
          buttonText="Quero me aposentar"
          url={retirement}
        />
        <ServicesData
          image={auction}
          heading="Benefícios por Incapacidade"
          text="Benefício para quem se encontra incapacitado de forma temporária ou permanente para o trabalho. "
          secondText="Análise de documentação médica aliada ao requerimento do benefício e agendamento de perícias."
          btnClass="show"
          buttonText="Tenho direito ao benefício?"
          url={illBenefit}
        />
        <ServicesData
          image={scalesOfJustice}
          heading="Revisão de Benefícios"
          text="Análise do seu processo administrativo (INSS) ou judicial para identificar a possibilidade de revisão do benefício para aumentar a renda mensal."
          btnClass="show"
          buttonText="Realizar revisão"
          url={benefitsReview}
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
          buttonText="Tenho direito ao benefício?"
          url={assistanceBenefitsReview}
        />
        <ServicesData
          image={publicserver}
          heading="Planejamento Previdenciário do Servidor Público"
          text="Estudo detalhado do tempo de serviço do servidor para analisar as hipóteses de aposentadoria, aproveitando ou não o tempo de contribuição do Regime Geral caso possua e qual estratégia seguir para receber a aposentadoria de maior valor. "
          btnClass="show"
          buttonText="Realizar planejamento"
          url={foresightPublicPlanning}
        />
        <ServicesData
          image={processauction}
          heading="Processo Judicial"
          text="Ação para buscar o direito que foi indeferido na via administrativa."
          secondText="Acompanhamento individualizado do processo do início ao fim da ação."
          btnClass="show"
          buttonText="Iniciar uma ação judicial"
          url={processMessage}
        />
         <ServicesData
          image={loan}
          heading="Revisão de Empréstimo Consignado"
          text="Ação que busca reaver valores de empréstimos consignados contratados indevidamente."
          btnClass="show"
          buttonText="Realizar revisão"
          url={loanReview}
        />
        <ServicesData
          image={lion}
          heading="Isenção de Imposto de Renda"
          text="Em alguns casos específicos é possível solicitar a isenção do imposto de renda no benefício ou aposentadoria."
          secondText=" Em caso de negativa, é possível ingressar com ação para buscar a isenção com o ressarcimento desses pagamentos desde o início da doença."
          btnClass="show"
          buttonText="Tenho direito a isenção?"
          url={IRMessage}
        />
      </div>
        <hr class="rounded" />
      <div className="office">
        <h1 style={{ marginBottom: "10px" }}>Como trabalhamos</h1>
        <p>Nosso time é composto por pessoas excelentes e dedicadas.</p>
        <div className="officecard">
        <LazyLoadImage src={currentImage} alt="Image Alt" effect="blur" />
        </div>
      </div>
    </div>
  );
}

export default Services;
