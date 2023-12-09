// Footer.jsx

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./footer.css"; // Import the CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} NcllexGPT. All rights reserved.</p>
      <div className="social-media">
        <a href="https://facebook.com" className="icon">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" className="icon">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" className="icon">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/" className="icon">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
