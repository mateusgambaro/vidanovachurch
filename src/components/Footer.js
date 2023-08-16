import "./FooterStyles.css";
import icone_white from "../assets/icone_white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div className="logo">
            <img
              src={icone_white}
              alt="icone_logo"
              className="logo-image"
            />
            <div>
              <h1>Dias & Sola</h1>
              <p>ADVOGADAS ASSOCIADAS</p>
            </div>
          </div>
          <div>
            <a href="https://www.facebook.com/diasesolaadv" target="_noblank">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/diasesola.adv" target="_noblank">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h4>Endereço</h4>
            <p>
              R. Belmira Loureiro de Almeida, 526 - 32, Jardim Piratininga,
              Sorocaba - SP
            </p>
            <br />
            <p>(15) 99775-5599 - (15) 3326-8128</p>
            {/* <a href="https://fontawesome.com/">Changelog</a>
            <a href="https://fontawesome.com/">Status</a>
            <a href="https://fontawesome.com/">License</a>
            <a href="https://fontawesome.com/">All Versions</a> */}
          </div>
          {/* <div>
            <h4>Community</h4>
            <a href="https://fontawesome.com/">GitHub</a>
            <a href="https://fontawesome.com/">Issues</a>
            <a href="https://fontawesome.com/">Project</a>
            <a href="https://fontawesome.com/"> Twitter</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="https://fontawesome.com/">Support</a>
            <a href="https://fontawesome.com/">Troubleshooting</a>
            <a href="https://fontawesome.com/">Contact Us</a>
          </div> */}
          {/* <div>
            <h4>Links</h4>
            <a href="https://fontawesome.com/">Terms of Service</a>
            <a href="https://fontawesome.com/">Privacy Policy</a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
