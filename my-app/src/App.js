import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext'; import Navbar from './components/Navbar';
import Analytics from './components/Analytics';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SEO from './components/SEO';
import './App.css';

import React, { lazy, Suspense } from 'react';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
const Blog = lazy(() => import('./components/Blog'));

function App() {
  return (
    <ThemeProvider>
      <SEO />
      <Analytics />
      <div className="App">
        <Navbar />
        <Suspense fallback={<div className="loading">Loading...</div>}>

          <AnimatePresence>
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <About />
              <Projects />
              <Skills />
              <Blog />
              <Contact />
            </motion.main>
          </AnimatePresence>
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;