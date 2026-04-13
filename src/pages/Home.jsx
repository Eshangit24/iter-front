import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <motion.p
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2 }}
        style={{ letterSpacing: '4px', fontSize: '14px', marginBottom: '20px', fontWeight: '600' }}
      >
        DIGITAL EXCELLENCE. REDEFINED.
      </motion.p>
      
      <motion.h1 
        className="hero-title"
        initial={{ opacity: 0, y: 30, filter: 'blur(15px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        Senior React Architect & <br /> Web Implementation Partner
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        style={{ marginTop: '20px', color: '#475569', maxWidth: '600px' }}
      >
        Bridging the gap between generic templates and proprietary brand standards.
      </motion.p>
    </section>
  );
};

// THIS IS THE LINE THAT WAS MISSING OR BROKEN:
export default Home;