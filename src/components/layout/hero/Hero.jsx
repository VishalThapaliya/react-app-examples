import React from 'react';
import './Hero.css';
// import heroBackground from '../../../assets/react.svg';
// import heroBackground from '../../../assets/heroBackground.png';
import heroBackground from '../../../assets/heroImage.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={heroBackground} alt="Hero background" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-title-line">Discover Amazing</span>
            <span className="hero-title-gradient">React Applications </span>
          </h1>
        </div>

        <p className="hero-description">
          Explore a curated collection of modern, responsive, and performant React applications. 
          From simple utilities to complex dashboards, find inspiration for your next project.
        </p>

        <div className="hero-actions">
          <Link to="/applications" className="btn-hero-primary">Explore Applications</Link>
        </div>

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
            <span className="stat-number">24 / 7</span>
            <span className="stat-label">Available</span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero