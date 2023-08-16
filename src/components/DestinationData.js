import React, { Component } from "react";
import "./DestinationStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
          <LazyLoadImage className="picture-1" src={this.props.img1} alt="Image Alt" effect="blur" />
          <LazyLoadImage className="picture-2" src={this.props.img2} alt="Image Alt" effect="blur" />
        </div>
      </div>
    );
  }
}
export default DestinationData;
