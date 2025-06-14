import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ContentProvider } from './context/ContentContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import News from './pages/News';
import Team from './pages/Team';
import Impact from './pages/Impact';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <ContentProvider>
      <Router>
        <div className="min-h-screen bg-white font-marcellus">
          <Header />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<News />} />
              <Route path="/team" element={<Team />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </ContentProvider>
  );
}

export default App;