// src/components/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h3>HomeLoan</h3>
          <p>Empowering your dreams with easy and flexible home loan solutions.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li><Link to="/offers">Offers</Link></li>
            <li><Link to="/apply">Apply</Link></li>
          </ul>
        </div>

        {/* Legal / Privacy Links */}
        <div className="footer-links">
          <h4>Privacy & Contact</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">Disclosures</a></li>
            <li><a href="#">Phone No.: 9990965903</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 HomeLoan. All rights reserved.</p>
        <div className="social-links">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
