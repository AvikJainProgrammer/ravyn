import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ backgroundImage, heading, subheading, buttons }) => {
  return (
    <section
      className="hero-section"
      style={{ background: `url(${backgroundImage}) no-repeat center center/cover` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-heading">{heading}</h1>
        <p className="hero-subheading">{subheading}</p>
        <div className="hero-buttons">
          {buttons.map((btn, index) => (
            <Link 
              key={index} 
              to={btn.to} 
              className={`btn ${btn.className || 'btn-danger'}`}
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
