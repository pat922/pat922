import React, { Component } from 'react';

export default class Hero extends Component {
  render() {
    const { portfolioData } = this.props;

    return (
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="geometric-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-container">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">{portfolioData.name}</span>
              </h1>
              <h2 className="hero-subtitle">{portfolioData.title}</h2>
              <p className="hero-tagline">{portfolioData.tagline}</p>
              <p className="hero-description">{portfolioData.description}</p>
              
              <div className="hero-cta">
                <a href="#projects" className="btn btn-primary">
                  View Projects
                </a>
                <a 
                  href={portfolioData.resumeDownload} 
                  className="btn btn-secondary"
                  download
                >
                  Download Resume
                </a>
                <a href="#contact" className="btn btn-outline">
                  Contact Me
                </a>
              </div>

              <div className="hero-social">
                {portfolioData.linkedin && (
                  <a 
                    href={portfolioData.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                )}
                {portfolioData.github && (
                  <a 
                    href={portfolioData.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="GitHub"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                )}
                {portfolioData.twitter && (
                  <a 
                    href={portfolioData.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Twitter"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                )}
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-container">
                <div className="hero-image-wrapper">
                  <div className="image-decoration"></div>
                  <img 
                    src={`images/${portfolioData.image}`} 
                    alt={portfolioData.name}
                    className="hero-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#about" className="scroll-indicator">
          <span className="scroll-text">Scroll</span>
          <span className="scroll-icon">
            <i className="fa fa-chevron-down"></i>
          </span>
        </a>
      </section>
    );
  }
}