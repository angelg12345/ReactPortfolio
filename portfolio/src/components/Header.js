import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/headerStyles.css';


export default function Header() {
  return (
    <header>
        <h1>AngelDev</h1>
      <nav>
      <a href="#about">About Me</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#resume">Resume</a>
      </nav>
      <Link to="/contact" className="button" >Contact</Link>
    </header>
  );
}


