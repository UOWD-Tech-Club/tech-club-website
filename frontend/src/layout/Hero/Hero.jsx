import React from 'react';
import "./Hero.css";
import Navbar from "../Navbar/Navbar.jsx";

const Hero = () => {
  return (
    <header>
      
    <div className="container">
    <Navbar/>
      <div className="cta">
        <h2 className="top-title">UOWD</h2>
        <h1 className="main-title">TECH CLUB</h1>
        <h2 className="bottom-title">LETS BUILD THE MATRIX</h2>
      </div>
      <div id='cta'>
        <a href="#" className="explore-btn">Explore</a>
      </div>
      <div className="triangle-up"></div>
      
    </div>
  </header>
  
  );
};

export default Hero