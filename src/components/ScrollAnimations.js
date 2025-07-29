import React, { Component } from 'react';

export default class ScrollAnimations extends Component {
  constructor(props) {
    super(props);
    this.observers = [];
  }

  componentDidMount() {
    this.initScrollAnimations();
  }

  componentWillUnmount() {
    this.observers.forEach(observer => observer.disconnect());
  }

  initScrollAnimations = () => {
    // Animate elements that fade in from bottom
    const fadeUpElements = document.querySelectorAll('.fade-up');
    const fadeUpObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    fadeUpElements.forEach(el => fadeUpObserver.observe(el));
    this.observers.push(fadeUpObserver);

    // Animate elements that scale in
    const scaleInElements = document.querySelectorAll('.scale-in');
    const scaleInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2
    });

    scaleInElements.forEach(el => scaleInObserver.observe(el));
    this.observers.push(scaleInObserver);

    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
        }
      });
    }, {
      threshold: 0.3
    });

    timelineItems.forEach(el => timelineObserver.observe(el));
    this.observers.push(timelineObserver);

    // Animate skill cards
    const skillCards = document.querySelectorAll('.skill-category');
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
            // Animate progress bars
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach((bar, i) => {
              setTimeout(() => {
                const width = bar.getAttribute('data-width') || bar.style.width;
                bar.style.width = width;
              }, i * 50);
            });
          }, index * 150);
        }
      });
    }, {
      threshold: 0.2
    });

    skillCards.forEach(el => skillObserver.observe(el));
    this.observers.push(skillObserver);

    // Remove parallax effect that was causing hero section to disappear

    // Glitch effect on scroll for section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('glitch-active');
          setTimeout(() => {
            entry.target.classList.remove('glitch-active');
          }, 500);
        }
      });
    }, {
      threshold: 0.5
    });

    sectionTitles.forEach(el => titleObserver.observe(el));
    this.observers.push(titleObserver);
  }

  render() {
    return null; // This component doesn't render anything
  }
}