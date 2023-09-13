import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
      </div>
    </Router>
  );
}

export default App;
