import React from "react";
import projects from "../assets/projects.jpeg";
import rtweens_1 from "../assets/rtweens_1.jpg"
import rtweens_2 from "../assets/rtweens_2.jpg"
import rtweens_3 from "../assets/rtweens_3.jpg"
import rtweens_4 from "../assets/rtweens_4.jpg"
import missao_1 from "../assets/missao_1.jpg"
import missao_2 from "../assets/missao_2.jpg"
import missao_3 from "../assets/missao_3.jpg"
import missao_4 from "../assets/missao_4.jpg"
import jovem_1 from "../assets/jovem_1.jpg"
import jovem_2 from "../assets/jovem_2.jpg"
import jovem_3 from "../assets/jovem_3.jpg"
import jovem_4 from "../assets/jovem_4.jpg"
import convert_1 from "../assets/convert_1.jpg"
import convert_2 from "../assets/convert_2.jpg"
import convert_3 from "../assets/convert_3.jpg"
import convert_4 from "../assets/convert_4.jpg"
import DestinationData from "./DestinationData";

const Destination = () => {
  const wppNumber = `+55${process.env.REACT_APP_PHONE_NUMBER}`;
  const email = "dias.sola.adv@gmail.com";
  return (
    <>
      <div className="destination">
        <h1>Departamentos</h1>
        <p>
          Conheça os projetos e ações da nossa igreja
        </p>
        <DestinationData
          className="first-des"
          heading="Radical Tweens"
          text="Bem-vindo ao Radical Tweens: um grupo cativante e transformador voltado para pré-adolescentes, com idades entre 11 e 14 anos. Nosso compromisso é ser um guia fundamental durante essa fase inicial da jornada cristã, proporcionando ministrações enriquecedoras, aconselhamento compassivo e atividades especialmente elaboradas para atender às necessidades e interesses dessa faixa etária."
          secondText="Acreditamos que esses anos cruciais são uma oportunidade de plantar sementes profundas de fé. Nossa equipe dedicada está empenhada em nutrir cada pré-adolescente, oferecendo orientação espiritual e apoio emocional à medida que eles exploram sua fé e descobrem seu papel no mundo."
          thirdText="Nossa missão transcende os encontros e as atividades. Buscamos moldar uma geração de jovens apaixonados por Jesus, capacitando-os a crescer em seu relacionamento com Ele e a refletir Seu amor em tudo o que fazem. Através de um ambiente acolhedor e amigável, inspiramos o compromisso pessoal e um entendimento profundo dos valores cristãos."
          images={[rtweens_1, rtweens_2, rtweens_3, rtweens_4 ]}
        />
        <DestinationData
          className="first-des-reverse"
          heading="Vida Nova Kids"
          text="O Ministério Kids é um espaço repleto de amor e dedicação, especialmente designado para o cuidado e orientação das crianças. Nosso principal objetivo é estabelecer um elo genuíno com cada criança, guiando-as para se tornarem discípulas de Jesus de forma significativa e impactante."
          secondText="Neste ambiente acolhedor, priorizamos a segurança e o enriquecimento do aprendizado das crianças. Contamos com uma equipe de voluntários apaixonados, unidos pelo propósito de transmitir os ensinamentos de Jesus de maneira cativante e envolvente, utilizando abordagens lúdicas que tornam a experiência de aprendizado ainda mais empolgante."
          thirdText="No Ministério Kids, cada criança é convidada a embarcar em jornadas de aprendizado memoráveis, onde a adoração e a educação andam de mãos dadas. Proporcionamos a elas oportunidades incríveis para crescer espiritualmente, oferecendo não apenas conhecimento, mas também experiências marcantes de conexão com a fé e com a comunidade. "
          images={[projects, projects, projects, projects ]}
        />
        <DestinationData
          className="first-des"
          heading="Conexão Jovem"
          text="O Conexão Jovem representa o vibrante grupo de jovens da Vida Nova Church, unidos por uma missão comum. Como a geração que abraça a chamada de obediência, nosso foco é claro: guiar aqueles a partir dos 18 anos em uma jornada de comunhão profunda e santidade genuína."
          secondText="Nossa busca incessante pela proximidade com o Pai reflete-se em cada aspecto do nosso trabalho. Realizamos cultos cuidadosamente elaborados para os jovens, infundidos com uma atmosfera direcionada à adoração, e promovemos encontros que testemunham a presença do Senhor de maneira palpável."
          thirdText="Ao embarcar nessa trajetória conosco, os jovens experimentam uma conexão significativa com Deus e entre si, fortalecendo assim sua fé e compromisso com o chamado que recebemos."
          images={[jovem_1, jovem_2, jovem_3, jovem_4 ]}
        />
        <DestinationData
          className="first-des-reverse"
          heading="Mãos com uma missão"
          text="Explore a essência do amor em ação por meio do inspirador Projeto Mãos Com Uma Missão, conduzido pelo dedicado departamento de missões da Secretaria. Nossa missão abraça diversas facetas, capacitando indivíduos em habilidades valiosas, como costura e culinária, através do envolvente Projeto DORCAS. Além disso, comprometemo-nos a promover a alfabetização via Projeto Sementinha, atendendo a todas as idades, desde crianças a adultos."
          secondText="No âmago de nossa jornada, encontramos conexão e transformação ao compartilhar histórias envolventes em vilarejos, bem como ao criar laços através de oficinas lúdicas, incluindo a construção de pipas e bonecas. Essa dedicação transcende fronteiras, alcançando terras distantes como Bolívia, Paraguai, Cuba, Haiti, África e Oriente Médio. Por meio de nossa ajuda humanitária, estamos não apenas suprindo necessidades básicas, mas também restaurando a dignidade e inspirando alegria nas vidas que tocamos."
          images={[missao_1, missao_2, missao_3, missao_4 ]}
        />
         <DestinationData
          className="first-des"
          heading="Novos Convertidos"
          text="Neste ambiente de profunda comunhão, aqueles que se convertem à fé cristã com conhecimento básico encontram um lugar para enraizar sua jornada espiritual. Aqui, eles são guiados a compreender a mordomia cristã e a descobrir seu papel no corpo da igreja, onde podem desenvolver os dons concedidos por Deus. "
          secondText="O Discipulado Dominical oferece uma base sólida, enquanto visitas semanais fortalecem os laços. Almoços e ceias com a liderança proporcionam orientação, e eventos de evangelismo mensais alcançam a comunidade."
          thirdText="Retiros espirituais anuais aprofundam a fé, e iniciativas de apoio financeiro fortalecem os trabalhos. Este é um espaço onde a fé se fortalece, os relacionamentos florescem e a jornada espiritual se desenvolve autenticamente."
          images={[convert_1, convert_2, convert_3, convert_4 ]}
        />
      </div>
    </>
  );
};

export default Destination;
