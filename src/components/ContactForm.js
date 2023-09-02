import { Button, TextField } from "@mui/material";
import "../components/ContactFormStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useSnackbar } from "notistack";
import LazyIframe from "./LazyFrame";

function ContactForm() {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const formRef = useRef(null);
  const isMounted = useRef(true);

  const whatsAppAPI = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}`;

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
        "service_k170obf",
        "template_g57nnkn",
        e.target,
        "uy6ZsklODDwt31mBq"
      )
      .then(
        (result) => {
          setLoading(false);
          enqueueSnackbar("Email enviado com sucesso!", { variant: "success" });

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
    <>
      <h1 className="title">Conheça nosso espaço</h1>
      <div className="contact-section">
        {/* <div className="form-container">
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
              label="Assunto"
              variant="outlined"
              name="subject"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Mensagem"
              variant="outlined"
              name="message"
              multiline
              rows={4}
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
        </div> */}
        <div className="map-container">
          ,
          <LazyIframe
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1823.129882982301!2d-46.31922758788184!3d-23.951252779186014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce03a27453d28f%3A0xbd3912b6c01f0196!2sR.%20Dr.%20Manuel%20Tourinho%2C%20171%20-%20Macuco%2C%20Santos%20-%20SP%2C%2011015-030!5e0!3m2!1sen!2sbr!4v1693136845426!5m2!1sen!2sbr"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
          {/* <iframe
            style={{ border: 0 }}
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <div className="address-details">
            <strong>Unidade Santos</strong>
            <p style={{ marginBottom: "10px" }}>
            R. Doutor Manoel Tourinho, 171 - Macuco, Santos/SP
            </p>
            <div className="contact-buttons">
              <a
                href={whatsAppAPI}
                className="whatsapp-btn"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                &nbsp; (13) 99791-2709
              </a>
              <a href="tel:+5513997912709" className="call-btn">
                <FontAwesomeIcon icon={faPhone} size="1x" />
                &nbsp; Ligar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
