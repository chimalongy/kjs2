import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Divisions from './components/Divisions';
import About from './components/About';
import Markets from './components/Markets';
import TradingCapabilities from './components/TradingCapabilities';
import Infrastructure from './components/Infrastructure';
import Industries from './components/Industries';
import Projects from './components/Projects';
import Compliance from './components/Compliance';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';

function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <TopBar />
      <Navbar />
      <Hero />
      <Stats />
      <Divisions />
      <About />
      <Markets />
      <TradingCapabilities />
      <Infrastructure />
      <Industries />
      <Projects />
      <Compliance />
      <Partners />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
