import React from "react";
import larissa_1 from "../assets/larissa_1.jpg";
import larissa_2 from "../assets/larissa_2.jpg";
import gabriella_1 from "../assets/gabriella_1.jpg";
import gabriella_2 from "../assets/gabriella_2.jpg";
import gabriela_1 from "../assets/gabriela_1.jpg";
import gabriela_2 from "../assets/gabriela_2.jpg";
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
          img1={gabriella_1}
          img2={gabriella_2}
          linkedinUrl="https://www.linkedin.com/in/gabriella-dias-6a2940181"
          emailUrl="gabriella.dias@email.com"
          whatsappNumber="+5515996166186"
        />
        <DestinationData
          className="first-des-reverse"
          heading="Larissa Sola"
          text="Larissa Sola é advogada e sócia-proprietária do escritório Dias & Sola Advogadas Associadas."
          secondText="Graduada pela Faculdade de Direito de Sorocaba (FADI), especialista em direito processual civil e pós-graduada em Direito Previdenciário."
          thirdText="No primeiro ano de formada, recebeu o contato de um cliente desejando se aposentar. Para isso, se aprofundou nos estudos e conseguiu a tão sonhada aposentadoria. A felicidade no olhar do cliente que, após anos de esforço e muito trabalho, conseguiu a sua aposentadoria, foi o que levou Larissa a se apaixonar pela área e decidir se especializar."
          fourthText="O Direito Previdenciário é uma área que necessita constante estudo e muita responsabilidade, e a Dra. Larissa se compromete com muito amor com todos os clientes do escritório!"
          img1={larissa_1}
          img2={larissa_2}
          linkedinUrl="https://www.linkedin.com/in/larissa-sola-97581b176/"
          emailUrl="gabriella.dias@email.com"
          whatsappNumber="+5515998122314"
        />
        <DestinationData
          className="first-des"
          heading="Gabriela Cassillo"
          text="Gabriela Cassillo é assistente jurídica do escritório Dias & Sola Advogadas Associadas."
          secondText="Graduanda do 5° ano do curso de Direito na Faculdade de Direito de Sorocaba (FADI)."
          thirdText="Possui experiências em escritórios de advocacia com foco em Direito do Trabalho, Direito de Família e Direito Previdenciário, bem como em órgãos públicos como Tribunal de Justiça e Defensoria Pública da União."
          img1={gabriela_1}
          img2={gabriela_2}
          linkedinUrl="https://www.linkedin.com/in/gabriella-dias"
          emailUrl="gabriella.dias@email.com"
          whatsappNumber="5511999999999"
        />
      </div>
    </>
  );
};

export default Destination;
