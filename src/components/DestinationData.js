import React, { Component } from "react";
import "./DestinationStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import OfficeData from "./OfficeData";

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
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href={this.props.linkedinUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
        </div>
        <div className="officecard">
        {this.props.images.map((img, index) => (
          <OfficeData image={img} key={index} />
        ))}
      </div>
      </div>
    );
  }
}
export default DestinationData;
