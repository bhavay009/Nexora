import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import SmoothScroll from './components/SmoothScroll';

// Page Transition Component
const PageTransition = () => {
  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[60] origin-top"
      style={{
        backgroundColor: '#2C2A29', // Blackish brownish color (Dark Coffee/Charcoal)
      }}
    />
  );
};

function AppContent() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <Layout>
        {/* Transition Overlay triggers on route change */}
        <AnimatePresence mode='wait'>
          <motion.div key={location.pathname}>
            <PageTransition />
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </Layout>
    </SmoothScroll>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
