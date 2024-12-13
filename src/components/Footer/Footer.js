import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-icons">
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
          </a>

          <a href="#">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>

          <a href="https://www.instagram.com/ultimatoys?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
        </div>
      </div>
      <div className="copyright">
        © 2024 Copyright:
        <a href="#">Ultima Toys</a>
      </div>
    </footer>
  );
}

export default Footer;