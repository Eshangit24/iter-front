import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ minHeight: '80vh' }}
    >
      <div style={{ maxWidth: '900px', width: '100%' }}>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ 
            fontSize: '4.5rem', 
            fontWeight: 950, 
            lineHeight: 1, 
            marginBottom: '40px',
            letterSpacing: '-2px'
          }}
        >
          ABOUT ITERDX
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ 
            fontSize: '1.4rem', 
            lineHeight: 1.6, 
            color: '#475569',
            fontWeight: 500
          }}
        >
          We bridge the gap between technical complexity and premium brand standards. 
          Our mission is to deliver industrial-grade web architecture with high-level design 
          precision for global startups.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;