import { Button, TextField } from "@mui/material";
import "../components/ContactFormStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function ContactForm() {
  const whatsAppAPI = `https://api.whatsapp.com/send?phone=+55${process.env.REACT_APP_PHONE_NUMBER}`

  return (
    <>
      <h1 className="title">
        Como podemos te ajudar?
      </h1>
      <div className="contact-section">
        <div className="form-container">
          <form noValidate autoComplete="off">
            <TextField
              fullWidth
              margin="normal"
              label="Nome"
              variant="outlined"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Assunto"
              variant="outlined"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Mensagem"
              variant="outlined"
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginTop: "16px" }}
            >
              Enviar
            </Button>
          </form>
        </div>
        <div className="map-container">
          <iframe
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0374136228966!2d-47.43262182376192!3d-23.495161859165158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf6040811d745d%3A0x66921dbb598ee480!2sR.%20Belmira%20Loureiro%20de%20Almeida%2C%20526%20-%2032%20-%20Jardim%20Piratininga%2C%20Sorocaba%20-%20SP%2C%2018016-321!5e0!3m2!1sen!2sbr!4v1691544216213!5m2!1sen!2sbr"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="address-details">
            <p>
              R. Belmira Loureiro de Almeida, 526 - 32, Jardim Piratininga,
              Sorocaba - SP
            </p>
            <div className="contact-buttons">
              <button className="whatsapp-btn">
                <FontAwesomeIcon icon={faWhatsapp} />
                &nbsp; (15) 99812-2314
              </button>
              <a href="tel:+5515998122314" className="call-btn">
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
