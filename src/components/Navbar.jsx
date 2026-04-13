import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const tabs = ['Home', 'About', 'Services', 'Projects'];

  const handleInquiry = () => {
    const phoneNumber = "94700000000"; // Replace with your actual number
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <nav className="navbar-wrapper">
      {/* Brand Section - Made Larger */}
      <div className="logo-container" style={{ flex: 1 }}>
        <img src={logo} alt="IDX" className="logo-img" style={{ height: '50px' }} />
        <span className="brand-text">ITERDX GLOBAL</span>
      </div>

      {/* Center Navigation Pill - Animated */}
      <div className="nav-pill-wrapper" style={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
        <div className="nav-pill">
          {tabs.map((tab) => (
            <a 
              key={tab}
              href={`#${tab.toLowerCase()}`}
              className={`nav-item ${activeTab === tab ? 'active-text' : ''}`}
              onClick={() => setActiveTab(tab)}
              style={{ position: 'relative', zIndex: 1 }}
            >
              {tab}
              {activeTab === tab && (
                <motion.div 
                  layoutId="active-pill"
                  className="active-bg"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Inquiry Button - Fixed Logic */}
      <div className="inquiry-container" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inquiry-button"
          onClick={handleInquiry}
        >
          Inquiry
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;