import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/headerStyles.css';


export default function Header() {
  return (
    <header>
        <h1>AngelDev</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
      </nav>
      <Link to="/contact" className="button" >Contact</Link>
    </header>
  );
}


