import React, { useState, useEffect } from "react";
import "./ServiceStyles.css";
import contract from "../assets/contract.svg";
import vidanova from "../assets/vidanova.jpg";
import vidanova_1 from "../assets/vidanova_1.jpeg";
import vidanova_2 from "../assets/vidanova_2.jpeg";
import vidanova_3 from "../assets/vidanova_3.jpeg";
import ServicesData from "./ServicesData";
import { serviceMessages } from "src/messages/services";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import OfficeData from "./OfficeData";

function Services() {
  const retirement = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}&text=Olá!`;
  const images=[vidanova, vidanova_1, vidanova_2, vidanova_3]

  return (
    <div className="service">
       <div className={`vidanova-box`}>
        <div className="des-text">
          <h2>Vida Nova Business</h2>
          <p className="first-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend mauris non placerat ullamcorper. Praesent mollis vehicula lectus vehicula ornare.</p>
          <p className="first-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend mauris non placerat ullamcorper. Praesent mollis vehicula lectus vehicula ornare.</p>
          <p className="first-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend mauris non placerat ullamcorper. Praesent mollis vehicula lectus vehicula ornare.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend mauris non placerat ullamcorper. Praesent mollis vehicula lectus vehicula ornare.</p>
        <div className="social-icons">
            <a href='https://www.instagram.com/vidanovabusiness/' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href='' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
        </div>
        <div className="officecard">
        {images.map((img, index) => (
          <OfficeData image={img} key={index} />
        ))}
      </div>
      </div>
      <div className="servicecard">
        <ServicesData
          image={contract}
          heading="Nome da empresa"
          text="Descrição breve"
          btnClass="show"
          buttonText="Entrar em contato"
          url={retirement}
        />
       <ServicesData
          image={contract}
          heading="Nome da empresa"
          text="Descrição breve"
          btnClass="show"
          buttonText="Entrar em contato"
          url={retirement}
        />
        <ServicesData
          image={contract}
          heading="Nome da empresa"
          text="Descrição breve"
          btnClass="show"
          buttonText="Entrar em contato"
          url={retirement}
        />
        <ServicesData
          image={contract}
          heading="Nome da empresa"
          text="Descrição breve"
          btnClass="show"
          buttonText="Entrar em contato"
          url={retirement}
        />
        <ServicesData
          image={contract}
          heading="Nome da empresa"
          text="Descrição breve"
          btnClass="show"
          buttonText="Entrar em contato"
          url={retirement}
        />
        <ServicesData
          image={contract}
          heading="Nome da empresa"
          text="Descrição breve"
          btnClass="show"
          buttonText="Entrar em contato"
          url={retirement}
        />
        <ServicesData
          image={contract}
          heading="Nome da empresa"
          text="Descrição breve"
          btnClass="show"
          buttonText="Entrar em contato"
          url={retirement}
        />
      </div>
    </div>
  );
}

export default Services;
