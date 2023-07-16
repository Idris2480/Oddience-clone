import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
export default function SocialFollow() {
  return (
    <div class="social-container">
      <a className="midd" href="twitter.com">
      <FontAwesomeIcon icon={faTwitter}/>
      </a>
      <a className="midd" href="Linkedin.com">
      <FontAwesomeIcon icon={faLinkedin}/> 
      </a>
      <a className="midd" href="instagram.com">
      <FontAwesomeIcon icon={faInstagram}/> 
      </a>
    </div>
  );
}