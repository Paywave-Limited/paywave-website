import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="logo">
          <img src={logo} alt="Paywave Logo" />
          Paywave
        </a>

        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          <div className="mobile-actions">
            <a href="#" className="btn-login-mobile">Log In</a>
            <a href="#" className="btn-signup-mobile">Get Started</a>
          </div>
        </div>
        
        <div className="nav-actions">
          <a href="#" className="btn-login">Log In</a>
          <a href="#" className="btn-signup">Get Started</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
