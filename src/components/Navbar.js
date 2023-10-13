import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div onClick={() => handleNavigation('/')} className="navbar-left">
        <h2>GFN Capital</h2>
      </div>
      <div 
        className="menu-icon" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        role="button"
        aria-hidden="true"
      >
        ☰
      </div>
      <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
        <button onClick={() => handleNavigation('/')} className="nav-item">
          Home
        </button>
        <button onClick={() => handleNavigation('/Business_Credit')} className="nav-item">
          LOC
        </button>
        <button onClick={() => handleNavigation('/program')} className="nav-item">
          Programs
        </button>
        <button onClick={() => handleNavigation('/about')} className="nav-item">
          Company
        </button>
        <button onClick={() => handleNavigation('/signup')} className="nav-item">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
