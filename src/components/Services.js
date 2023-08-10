import "./ServiceStyles.css";
import handShake from "../assets/hand-shake.png";
import contract from "../assets/contract.png";
import auction from "../assets/auction.png";
import scalesOfJustice from "../assets/scales-of-justice.png";
import ServicesData from "./ServicesData";

function Services() {
  return (
    <div className="service">
      <div className="servicecard">
        <ServicesData
          image={contract}
          heading="Aposentadoria"
          text="Organizamos e preparamos sua pré-aposentadoria, com objetivo de auxiliar na sua busca por uma aposentadoria rápida e com o melhor benefício possível"
          btnClass="show"
          buttonText="Quero me aposentar"
          url="/"
        />
        <ServicesData
          image={handShake}
          heading="Consulta Previdenciária"
          text="Serviço voltado para você que precisa conhecer o seu caso ou descobrir uma solução especializada para seu problema. Realizamos esse atendimento em todo Brasil e exterior."
          btnClass="show"
          buttonText="Consultar previdência"
          url="/"
        />
        <ServicesData
          image={auction}
          heading="Processo Judicial          "
          text="Realizamos todo seu processo, desde cálculos, processo administrativo, judicial, até o imposto de renda. Este é um serviço para você que não quer se incomodar com nada."
          btnClass="show"
          buttonText="Processar alguém"
          url="/"
        />
        <ServicesData
          image={scalesOfJustice}
          heading="Processo Judicial          "
          text="Realizamos todo seu processo, desde cálculos, processo administrativo, judicial, até o imposto de renda. Este é um serviço para você que não quer se incomodar com nada."
          btnClass="show"
          buttonText="Processar alguém"
          url="/"
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