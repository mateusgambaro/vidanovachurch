import "./TripStyles.css";
import TripData from "./TripData";
import handShake from "../assets/vidanovakids.png";
import contract from "../assets/tweens.jpeg";
import portfolio from "../assets/business.jpeg";
import xj from "../assets/xj.jpeg";
import maos from "../assets/maoscomumamissao.jpeg";
import salvavidas from "../assets/salvavidas.jpeg";
import vidanovaworship from '../assets/VidaNovaWorship.jpg'

function Trip() {
  return (
    <div className="trip">
      <h1 style={{ marginBottom: "10px" }}>Departamentos</h1>
      <p>Conheça os projetos da nossa equipe</p>
      <div className="tripcard" style={{ marginBottom: "40px" }}>
        <TripData
          image={contract}
          heading="Radical Tweens"
          text="O Radical Tweens é um grupo destinado aos Pré Adolescentes, de 11 aos 14 anos."
          secondText=" O propósito do departamento é auxilia-los no desenvolvimento deste início da caminhada Cristã. Com ministrações, aconselhamentos e atividades voltada para faixa etária deles. 
          Nossa missão é formar uma geração de Pré Adolescentes apaixonados por Jesus!"
        />
        <TripData
          image={handShake}
          heading="Vida Nova Kids"
          text="O Ministério Kids é um lugar de amor e pastoreio das crianças."
          secondText="Tem como objetivo alcança-las  e torna-las discípulos de Jesus.
          Elas encontram um ambiente seguro e de muito aprendizado. Com voluntários dedicados no propósito de ensinar sobre Jesus de  maneira lúdica e cativante.
           Nesse lugar elas tem experiencias incríveis de aprendizado e adoração."
        />
        <TripData
          image={portfolio}
          heading="Vida Nova Business"
          text="Nossa missão é unir empresários, profissionais e autônomos determinados a vencer e prosperar. Dentro do Ministério Vida Nova, com 83 igrejas e 8 mil membros, criamos uma rede de negócios. Empresas parceiras têm acesso a nossa vasta comunidade, oferecendo descontos em troca, promovidos através de canais como WhatsApp, site, rádio online e TV na Band. Junte-se a nós nesta jornada rumo ao sucesso empresarial."
        />
        <TripData
          image={xj}
          heading="Conexão Jovem"
          text="O Conexão Jovem é o grupo de jovens da Vida Nova Church."
          secondText="Somos a geração que assume a responsabilidade de obedecer Aquele que nos chamou. Trabalhamos com jovens a partir dos 18 anos, em uma caminha de comunhão e santidade, procurando sempre estar mais próximos do Pai, com cultos direcionados e encontros onde o Senhor se faz presente"
        />
        <TripData
          image={maos}
          heading="Mãos com uma missão"
          text="Descubra o amor em ação através do Projeto Mãos Com Uma Missão da Secretaria de Missões. Capacitamos indivíduos em ações significativas, como costura e culinária pelo Projeto DORCAS, alfabetização através do Projeto Sementinha, e conexão com comunidades através de contação de histórias, oficinas de pipas e bonecas. De vilarejos a nações como Bolívia, Paraguai, Cuba, Haiti, África e Oriente Médio, estendemos ajuda humanitária, promovendo dignidade e alegria."
          secondText=""
        />
        <TripData
          image={salvavidas}
          heading="Novos Convertidos"
          text="Lugar de comunhão e  de alicerçar pessoas que se convertem  com conhecimento básico da fé crista, dando ao novo convertido sentido de mordomia onde ele encontrara lugar no corpo para desenvolver os dons que receber da parte de Deus."
        />
        <TripData
          image={vidanovaworship}
          heading="Vida Nova Worship"
          text="Vida Nova Worship é o ministério de louvor da Vida Nova Sede, e tem como objetivo e função levar a palavra de Deus através dos louvores e das canções vindas direto do trono de Deus, um grupo direcionado em um só propósito, em uma só direção e em um só desejo, que é de adorar em Espirito e em verdade de forma excelente, pois é assim que o Pai merece ser adorado."
        />
      </div>
      <a href="/about" className="looking-link">
        Quero saber mais
      </a>
    </div>
  );
}

export default Trip;
