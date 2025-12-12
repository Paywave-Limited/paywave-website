import React from 'react';
import './Footer.scss';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo">
              <img src={logo} alt="Paywave Logo" />
              Paywave
            </span>
            <p>
              Take control of your finances today. Simple, secure, and smart expense tracking for everyone.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Product</h4>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Mobile App</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">API Documentation</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Paywave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
