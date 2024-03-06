import React, { useState, useEffect } from 'react';
import '../Navbar/Navbar.css'; 
import Hamburger from 'hamburger-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 768) { // Adjust as needed for your mobile screen breakpoint
          setIsMobile(true);
          setOpen(false); // Close the menu when screen size changes to mobile
        } else {
          setIsMobile(false);
        }
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
    return (
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        {isMobile ? (
          <div className="hamburger-menu">
            <Hamburger toggled={isOpen} toggle={setOpen} />
            {isOpen && (
              <ul className="nav-links-vertical">
                <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
                <li>
                  <a href="#services" onClick={toggleDropdown}>Our Services</a>
                  {showDropdown && (
                    <ul className="dropdown">
                      <li><a href="#service1" onClick={() => setOpen(false)}>Service 1</a></li>
                      <li><a href="#service2" onClick={() => setOpen(false)}>Service 2</a></li>
                      <li><a href="#service3" onClick={() => setOpen(false)}>Service 3</a></li>
                    </ul>
                  )}
                </li>
                <li><a href="#career" onClick={() => setOpen(false)}>Career</a></li>
              </ul>
            )}
          </div>
        ) : (
          <ul className="nav-links-horizontal">
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <a href="#services">Our Services</a>
              {showDropdown && (
                <ul className="dropdown">
                  <li><a href="#service1">Service 1</a></li>
                  <li><a href="#service2">Service 2</a></li>
                  <li><a href="#service3">Service 3</a></li>
                </ul>
              )}
            </li>
            <li className="nav-item"><a href="#career">Career</a></li>
          </ul>
        )}
      </nav>
    );
  };
  
export default Navbar;
