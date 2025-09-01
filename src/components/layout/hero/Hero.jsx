import React from 'react';
import './Hero.css';
import heroBackground from '../../../assets/react.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={heroBackground} alt="Hero background" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Discover Amazing
          <div className="gradient-text">React Applications </div>
        </h1>

        <p className="hero-subtitle">Explore a curated collection of modern, responsive, and performant React applications. 
            From simple utilities to complex dashboards, find inspiration for your next project.</p>
        <button className="hero-button">Explore Applications</button>


        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Applications</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Open Source</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Available</span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero