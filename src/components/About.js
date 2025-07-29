import React, { Component } from 'react';

export default class About extends Component {
  componentDidMount() {
    this.initializeAnimations();
  }

  initializeAnimations() {
    // Initialize intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-up, .scale-in, .timeline-item').forEach(el => {
      observer.observe(el);
    });

    // Add stagger effect to value cards
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Add stagger effect to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.2}s`;
    });
  }

  render() {
    const { portfolioData } = this.props;
    const { about } = portfolioData;

    const valueIcons = [
      { icon: '👥', bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
      { icon: '⚡', bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
      { icon: '🔧', bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
      { icon: '📊', bg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
      { icon: '💡', bg: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
      { icon: '🏗️', bg: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' }
    ];

    const journeyIcons = ['💻', '🎯', '🚀'];

    return (
      <section id="about" className="about">
        <div className="container">
          <div className="section-header fade-up">
            <h2 className="section-title glitch" data-text={about.title}>{about.title}</h2>
            <div className="section-underline"></div>
          </div>

          <div className="about-content">
            <div className="about-intro fade-up">
              <p className="lead-text">{about.description}</p>
            </div>

            <div className="journey-timeline fade-up">
              <h3 className="timeline-title">My Journey</h3>
              <div className="timeline-container">
                {about.journey.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker" data-index={index}>
                      <span className="timeline-icon">{journeyIcons[index]}</span>
                    </div>
                    <div className="timeline-content">
                      <span className="timeline-period">{item.period}</span>
                      <h4 className="timeline-title">{item.title}</h4>
                      <p className="timeline-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="values-section fade-up">
              <h3 className="values-title">My Values</h3>
              <div className="values-grid">
                {about.values.map((value, index) => (
                  <div key={index} className="value-card scale-in" style={{'--card-index': index}}>
                    <div className="value-icon-wrapper">
                      <div className="value-icon" style={{background: valueIcons[index].bg}}>
                        <span className="icon-emoji">{valueIcons[index].icon}</span>
                      </div>
                    </div>
                    <p className="value-text">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="process-section fade-up">
              <h3 className="process-title">My Product Development Process</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">01</div>
                  <h4 className="step-title">Discovery</h4>
                  <p className="step-description">User research, market analysis, and problem validation</p>
                </div>
                <div className="process-step">
                  <div className="step-number">02</div>
                  <h4 className="step-title">Definition</h4>
                  <p className="step-description">Requirements gathering, user stories, and success metrics</p>
                </div>
                <div className="process-step">
                  <div className="step-number">03</div>
                  <h4 className="step-title">Design</h4>
                  <p className="step-description">User flows, wireframes, and interactive prototypes</p>
                </div>
                <div className="process-step">
                  <div className="step-number">04</div>
                  <h4 className="step-title">Development</h4>
                  <p className="step-description">Sprint planning, engineering collaboration, and QA</p>
                </div>
                <div className="process-step">
                  <div className="step-number">05</div>
                  <h4 className="step-title">Launch</h4>
                  <p className="step-description">Go-to-market strategy, user onboarding, and analytics</p>
                </div>
                <div className="process-step">
                  <div className="step-number">06</div>
                  <h4 className="step-title">Iterate</h4>
                  <p className="step-description">Data analysis, user feedback, and continuous improvement</p>
                </div>
              </div>
            </div>

            <div className="about-cta fade-up">
              <p className="cta-text">
                Ready to work together on your next product?
              </p>
              <a href="#contact" className="btn btn-primary">
                <span>Let's Connect</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}