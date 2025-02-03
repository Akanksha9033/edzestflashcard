import React from "react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-5 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"} border-top`}>
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-12 col-md-6 mb-4">
            <h4 className="h5 fw-bold">Edzest Education Services (OPC) Pvt. Ltd.</h4>
            <p className="small mb-0">
              SY no. 42, Near J R Layout Haralur,<br />
              Bengaluru- 560102, Karnataka, India
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-12 col-md-2 mb-4">
            <h4 className="h6 fw-bold">Company</h4>
            <ul className="list-unstyled">
              <li><Link to="/about" className={`text-decoration-none ${darkMode ? "text-light" : "text-dark"}`}>About Us</Link></li>
              <li><Link to="/privacypolicy" className={`text-decoration-none ${darkMode ? "text-light" : "text-dark"}`}>Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className={`text-decoration-none ${darkMode ? "text-light" : "text-dark"}`}>Terms & Conditions</Link></li>
              <li><Link to="/refundpolicy" className={`text-decoration-none ${darkMode ? "text-light" : "text-dark"}`}>Refund Policy</Link></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className="col-12 col-md-2 mb-4">
            <h4 className="h6 fw-bold">Help & Support</h4>
            <ul className="list-unstyled">
              <li><Link to="/contact" className={`text-decoration-none ${darkMode ? "text-light" : "text-dark"}`}>Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 pt-4 border-top">
          <div className={`small ${darkMode ? "text-muted text-light" : "text-muted text-dark"} text-center text-md-start`}>
            &copy; {new Date().getFullYear()} Edzest Education Services. All Rights Reserved.
          </div>

          {/* Social Media Links */}
          <div className="mt-3 mt-md-0">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`me-3 fs-5 ${darkMode ? "text-light" : "text-dark"}`}>
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/edzest" target="_blank" rel="noopener noreferrer" className={`me-3 fs-5 ${darkMode ? "text-light" : "text-dark"}`}>
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com/@edzest" target="_blank" rel="noopener noreferrer" className={`fs-5 ${darkMode ? "text-light" : "text-dark"}`}>
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
