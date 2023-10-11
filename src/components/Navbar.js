import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  function handleTeamClick() {
    navigate('/about');
    setIsMenuOpen(false);
  }

  function handleHomeClick() {
    navigate('/');
    setIsMenuOpen(false);
  }

  function handleProgramClick() {
    navigate('/program');
    setIsMenuOpen(false);
  }

  function handleLocClick() {
    navigate('/Business_Credit');
    setIsMenuOpen(false);
  }

  function signInClick() {
    navigate('/signup');
    setIsMenuOpen(false);
  }

  // Add a state to track whether the user has scrolled down
  const [scrolled, setScrolled] = useState(false);

  // Listen to scroll events to determine whether to add a "scrolled" class
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div onClick={handleHomeClick} className="navbar-left">
        <h2>GFN Capital</h2>
      </div>
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div>
      <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
        <p onClick={handleHomeClick} className="nav-item clickable" href="/">
          Home
        </p>
        <p onClick={handleLocClick} className="nav-item clickable" href="/">
          LOC
        </p>
        <p
          onClick={handleProgramClick}
          className="nav-item clickable"
          href="/programs"
        >
          Programs
        </p>
        <p className="nav-item clickable" onClick={handleTeamClick}>
          Company
        </p>
        <p className="nav-item clickable" style={{ whiteSpace: 'nowrap' }} onClick={signInClick}>
          Log In
        </p>
      </div>
    </div>
  );
};

export default Navbar;
