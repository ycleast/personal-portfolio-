import React from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;