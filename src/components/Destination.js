import React from "react";
import gabriella from "../assets/gabriella.jpg";
import gabriella_est from "../assets/gabriella_est.jpg";
import larissa from "../assets/larissa.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Nossa Equipe</h1>
        <p>
          Somos especialistas em Direito Previdenciário, pioneiros no
          atendimento à distância e obcecados por fazer justiça
        </p>
        <DestinationData
          className="first-des"
          heading="Gabriella Dias"
          text="Gabriella Dias é advogada e sócia-proprietária do escritório Dias & Sola Advogadas Associadas."
          secondText="Graduada e pós graduada em Direito Processual Civil pela Faculdade de Direito de Sorocaba (FADI) em 2018 e 2020, respectivamente."
          thirdText="Após a graduação, em 2019, ingressou no mercado de trabalho como advogada previdenciarista e se apaixonou pela área, a qual desejou continuar."
          fourthText="Atualmente, Dra. Gabriella atua na especialidade de Direito Previdenciário e Direito de Família no escritório Dias & Sola."
          img1={gabriella}
          img2={larissa}
          linkedinUrl="https://www.linkedin.com/in/gabriella-dias"
          emailUrl="gabriella.dias@email.com"
          whatsappNumber="5511999999999"
        />
        <DestinationData
          className="first-des-reverse"
          heading="Larissa Sola"
          text="Larissa Sola é advogada e sócia-proprietária do escritório Dias & Sola Advogadas Associadas."
          secondText="Graduada pela Faculdade de Direito de Sorocaba (FADI), especialista em direito processual civil e pós-graduada em Direito Previdenciário."
          thirdText="No primeiro ano de formada, recebeu o contato de um cliente desejando se aposentar. Para isso, se aprofundou nos estudos e conseguiu a tão sonhada aposentadoria. A felicidade no olhar do cliente que, após anos de esforço e muito trabalho, conseguiu a sua aposentadoria, foi o que levou Larissa a se apaixonar pela área e decidir se especializar."
          fourthText="O Direito Previdenciário é uma área que necessita constante estudo e muita responsabilidade, e a Dra. Larissa se compromete com muito amor com todos os clientes do escritório!"
          img1={gabriella}
          img2={larissa}
        />
        <DestinationData
          className="first-des"
          heading="Gabriela"
          text="Info meninas"
          img1={gabriella_est}
          img2={gabriella_est}
        />
      </div>
    </>
  );
};

export default Destination;
