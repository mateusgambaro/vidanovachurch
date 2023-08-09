import React, { Component } from "react";
import "./DestinationStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class DestinationData extends Component {
  render() {
    return (
      <div className={`${this.props.className} highlighted-box`}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p className="first-text">{this.props.text}</p>
          <p className="first-text">{this.props.secondText}</p>
          <p className="first-text">{this.props.thirdText}</p>
          <p className="first-text">{this.props.fourthText}</p>
          <p className="first-text">{this.props.fifthText}</p>
          <div className="social-icons">
            <a href={this.props.linkedinUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href={`mailto:${this.props.emailUrl}`}>
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a
              href={`https://wa.me/${this.props.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </div>
        </div>

        <div className="image">
          <img src={this.props.img1} alt="img" />
          <img src={this.props.img2} alt="img" />
        </div>
      </div>
    );
  }
}
export default DestinationData;
