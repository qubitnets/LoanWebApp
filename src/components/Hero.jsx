// src/components/Hero.jsx

import React from "react";
import { Link } from "react-router-dom";

import './hero.css';
import heroImage from "../image/hero.jpg";  // apne folder me image ka path set rakhna

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Your <span>Dream Home</span> Starts Here
        </h1>
        <p>Find the best home loan options at lowest rates with HomeCredit Pro.</p>
        <div className="hero-buttons">
           <a href="#apply" className="btn-primary">Apply Now</a>
          <a href="#about" className="btn-secondary">Learn More</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Home" />
      </div>
    </section>
  );
};

export default Hero;
