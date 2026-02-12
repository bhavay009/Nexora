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
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import SmoothScroll, { useLenis } from './components/SmoothScroll';

// Scroll to top on route change - uses Lenis for smooth scroll compatibility
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis();

  React.useLayoutEffect(() => {
    // Use Lenis scrollTo if available, otherwise fallback to native
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Fallback timeout to ensure scroll sticks
    const timeoutId = setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname, lenis]);

  return null;
};

// Page Transition Component
const PageTransition = () => {
  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
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
      <ScrollToTop />
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
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
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

