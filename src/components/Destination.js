import React from "react";
import larissa_1 from "../assets/larissa_1.webp";
import larissa_2 from "../assets/larissa_2.webp";
import gabriella_1 from "../assets/gabriella_1.webp";
import gabriella_2 from "../assets/gabriella_2.webp";
import gabriela_1 from "../assets/gabriela_1.webp";
import gabriela_2 from "../assets/gabriela_2.webp";
import DestinationData from "./DestinationData";

const Destination = () => {
  const wppNumber = `+55${process.env.REACT_APP_PHONE_NUMBER}`;
  const email = "dias.sola.adv@gmail.com";
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
          secondText="Graduada e pós graduada em Direito Processual Civil pela Faculdade de Direito de Sorocaba (FADI) e Especialista em Processo Administrativo Previdenciário."
          thirdText="Possui amplo conhecimento e prática em peças previdenciárias, benefícios por incapacidade e assistenciais e aposentadorias rurais."
          img1={gabriella_1}
          img2={gabriella_2}
          linkedinUrl="https://www.linkedin.com/in/gabriella-dias-6a2940181"
          emailUrl={email}
          whatsappNumber={wppNumber}
        />
        <DestinationData
          className="first-des-reverse"
          heading="Larissa Sola"
          text="Larissa Sola é advogada e sócia-proprietária do escritório Dias & Sola Advogadas Associadas."
          secondText="Graduada pela Faculdade de Direito de Sorocaba (FADI) e pós-graduada em Direito Processual Civil. Especialista em Advocacia Previdenciária, Cálculos e Planejamento Previdenciário."
          thirdText="Possui vasto conhecimento em Aposentadorias no Regime Geral da Previdência Social (setor privado) e Regime Próprio da Previdência Social (servidores públicos estatutários)."
          img1={larissa_1}
          img2={larissa_2}
          linkedinUrl="https://www.linkedin.com/in/larissa-sola-97581b176/"
          emailUrl={email}
          whatsappNumber={wppNumber}
        />
        <DestinationData
          className="first-des"
          heading="Gabriela Cassillo"
          text="Gabriela Cassillo é assistente jurídica do escritório Dias & Sola Advogadas Associadas."
          secondText="Graduanda do 5° ano do curso de Direito na Faculdade de Direito de Sorocaba (FADI)."
          thirdText="Possui experiências em escritórios de advocacia com foco em Direito do Trabalho, Direito de Família e Direito Previdenciário, bem como em órgãos públicos como Tribunal de Justiça e Defensoria Pública da União."
          img1={gabriela_1}
          img2={gabriela_2}
          linkedinUrl="https://www.linkedin.com/in/gabriela-cassillo-690655186"
          emailUrl={email}
          whatsappNumber={wppNumber}
        />
      </div>
    </>
  );
};

export default Destination;
