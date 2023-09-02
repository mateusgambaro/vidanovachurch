import "./FooterStyles.css";
import icone_white from "../assets/icone_logo_white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div className="logo">
            <img src={icone_white} alt="icone_logo" className="logo-image" />
            <div>
              <h1>Vida Nova</h1>
              <p>CHURCH</p>
            </div>
          </div>
          <div>
            <a href="https://www.facebook.com/vidanovasantos/?locale=pt_BR" target="_noblank">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/vidanovasede/" target="_noblank">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h4>Endereço</h4>
            <p style={{ marginBottom: "10px" }}>
              <strong>Unidade Santos</strong> - R. Doutor Manoel Tourinho, 171 - Macuco, Santos/SP
            </p>
            <br />
            <p>(13) 99791-2709</p>
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
