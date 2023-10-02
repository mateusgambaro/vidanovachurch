import React, { useState, useEffect, useRef } from "react";
import "./ServiceStyles.css";
import contract from "../assets/contract.svg";
import caipiralogo from "../assets/caipiralogo.jpg";
import vidanova from "../assets/vidanova.jpg";
import elizabeteLogo from "../assets/elizabete.jpeg"
import memocashlogo from "../assets/memocashlogo.gif"
import donacututaLogo from "../assets/donacututa.png"
import vidanova_1 from "../assets/vidanova_1.jpeg";
import vidanova_2 from "../assets/vidanova_2.jpeg";
import vidanova_3 from "../assets/vidanova_3.jpeg";
import ServicesData from "./ServicesData";
import { serviceMessages } from "src/messages/services";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import OfficeData from "./OfficeData";
import { Modal } from "antd";
import emailjs from "emailjs-com";
import { Button, CircularProgress, TextField } from "@mui/material";
import { useSnackbar } from "notistack";

function Services() {
  const retirement = `https://api.whatsapp.com/send?phone=+5513997912709&text=Olá!`;
  const elizabete = `https://api.whatsapp.com/send?phone=+5513974034958&text=Olá!`;
  const donacututa = `https://api.whatsapp.com/send?phone=+551333945134&text=Olá!`;
  const memocash = `https://api.whatsapp.com/send?phone=+5512996016111&text=Olá!`;
  const images = [vidanova, vidanova_1, vidanova_2, vidanova_3];

  const { enqueueSnackbar } = useSnackbar();
  const [modal2Open, setModal2Open] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const formRef = useRef(null);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_cqnd86b",
        "template_osv942b",
        e.target,
        "jxuTfVKU-ESevX362"
      )
      .then(
        (result) => {
          setLoading(false);
          enqueueSnackbar("Solicitação enviada com sucesso!", {
            variant: "success"
          });

          if (formRef.current) {
            formRef.current.reset();
          }
        },
        (error) => {
          setLoading(false);
          enqueueSnackbar("Erro ao enviar o email. Tente novamente.", {
            variant: "error"
          });
        }
      );
  }

  const handlePhoneChange = (e) => {
    let value = e.target.value;

    value = value.replace(/\D/g, "");

    if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }

    if (value.length > 10) {
      value = `${value.slice(0, 10)}-${value.slice(10, 14)}`;
    }

    setPhone(value);
  };

  return (
    <div className="service">
      <div className={`vidanova-box`}>
        <div className="des-text">
          <h2>Vida Nova Business</h2>
          <p className="first-text">
            Nosso objetivo é reunir empresários, profissionais liberais e
            autônomos que compartilham a determinação de vencer e prosperar. Em
            um ambiente colaborativo, buscamos criar uma rede de negócios
            vibrante e conectada dentro do Ministério Vida Nova, que conta com
            uma impressionante presença de 83 igrejas e mais de 8 mil membros.
          </p>
          <p className="first-text">
            O que oferecemos? Uma oportunidade única para essas empresas se
            conectarem com nossa vasta comunidade de membros, tornando-os
            clientes em potencial. Em troca, os empresários comprometem-se a
            oferecer descontos e facilidades exclusivas, construindo uma relação
            de fidelidade duradoura com os membros do Vida Nova.
          </p>
          <p className="first-text">
            Nossos canais de negócios são diversos e incluem um grupo WhatsApp
            ativo, um site de fácil acesso, uma rádio online envolvente e até
            mesmo um programa de TV na Band. Juntos, criamos um ambiente
            propício para o crescimento dos negócios, a colaboração e o sucesso
            mútuo. Junte-se a nós e faça parte desta emocionante jornada rumo à
            prosperidade.
          </p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/vidanovabusiness/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
        <div className="officecard">
          {images.map((img, index) => (
            <OfficeData image={img} key={index} />
          ))}
        </div>
      </div>
      <button className="vnb-button" onClick={() => setModal2Open(true)}>
        Quero participar!
      </button>
      <p style={{ marginTop: "30px", marginBottom: "80px" }}>
        Preencha o formulário com seus dados clicando no botão acima e nossa
        equipe entrará em contato com você.
      </p>
      <Modal
        title="Faça parte do Vida Nova Business"
        centered
        style={{ top: 50 }}
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
      >
        <div className="form-vnb">
          <form
            ref={formRef}
            noValidate
            autoComplete="off"
            onSubmit={sendEmail}
          >
            <TextField
              fullWidth
              margin="normal"
              label="Nome"
              variant="outlined"
              name="name"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              name="reply_to"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Telefone"
              variant="outlined"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="CEP"
              variant="outlined"
              name="cep"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Endereço (Rua, Número, Bairro, Cidade e Estado)"
              variant="outlined"
              name="address"
              multiline
              rows={2}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Ramo de atividade"
              variant="outlined"
              name="activity"
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginTop: "16px" }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Enviar"
              )}
            </Button>
          </form>
        </div>
      </Modal>
      <div className="servicecard">
        <ServicesData
          image={caipiralogo}
          heading="Caipira Voador World"
          text="A Família Caipira Voador world , vem atuando no ramo de hobby, diversões, confraternizações e eventos, desde 2006."
          secondText="O Caipira Voador World nasceu da vontade de proporcionar as famílias bem estar e lazer, e para que isso seja possível estamos sempre inovando e nos adequando melhor as tendências do mercado."
          address="Av. Ana Costa, nº 410 - Praia Palace Market Place - Bairro: Gonzaga - Santos/SP"
          btnClass="show"
          buttonText="Entrar em contato"
          instagram="https://www.instagram.com/caipira_voador"
          facebook="https://www.facebook.com/AutoramaCaipiraVoador"
          website="https://www.caipiravoador.com.br/"
          url={retirement}
        />

        <ServicesData
          image={memocashlogo}
          heading="MemoCash Soluções"
          text="Os sistemas MemoCash de Vendas e Gestão descomplicam seu negócio."
          secondText="Nossos sistemas são ideais para que você faça o controle do seu estoque, emita notas fiscais,  venda mais e otimize a gestão financeira do seu negócio. Venda mesmo sem internet e tenha acesso das informações de sua empresa de qualquer lugar."
          btnClass="show"
          buttonText="Entrar em contato"
          website="https://memocashsolucoes.com.br"
          url={memocash}
        />
        <ServicesData
          image={elizabeteLogo}
          heading="Elizabete Lima - Consultora de beleza MK"
          text="Consultora de beleza. Elevar sua autoestima.  E ajudar você  a ter uma renda extra.  "
          address="Rua Prudente de Moraes 75 sala 55 Vila Mathias - Santos/SP"
          btnClass="show"
          buttonText="Entrar em contato"
          instagram="https://www.instagram.com/elizabetemk"
          url={elizabete}
        />
        <ServicesData
          image={donacututaLogo}
          heading="DonaCututa Gastronomia"
          text="Comida mineira, cafeteria, doces e artesanatos."
          address="Santos/SP"
          btnClass="show"
          buttonText="Entrar em contato"
          instagram="https://www.instagram.com/donacututa"
          url={donacututa}
        />
      </div>
    </div>
  );
}

export default Services;
