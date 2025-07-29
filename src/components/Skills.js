import React, { Component } from 'react';

export default class Skills extends Component {
  render() {
    const { portfolioData } = this.props;
    const { skills } = portfolioData;

    return (
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header fade-up">
            <h2 className="section-title">Product Process & Skills</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">
              My approach to building successful products
            </p>
          </div>

          <div className="skills-container">
            {Object.values(skills).map((category, index) => (
              <div key={index} className="skill-category">
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-title">{category.title}</h3>
                </div>

                <div className="skills-grid">
                  {category.items.map((skill, i) => (
                    <div key={i} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ width: `0%` }}
                          data-width={`${skill.level}%`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="tools-section">
                  <h4 className="tools-title">Tools & Technologies</h4>
                  <div className="tools-list">
                    {category.tools.map((tool, i) => (
                      <span key={i} className="tool-badge">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="process-section">
            <h3 className="process-title">My Product Development Process</h3>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">01</div>
                <h4 className="step-title">Discovery</h4>
                <p className="step-description">
                  User research, market analysis, and problem validation
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">02</div>
                <h4 className="step-title">Definition</h4>
                <p className="step-description">
                  Requirements gathering, user stories, and success metrics
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">03</div>
                <h4 className="step-title">Design</h4>
                <p className="step-description">
                  User flows, wireframes, and interactive prototypes
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">04</div>
                <h4 className="step-title">Development</h4>
                <p className="step-description">
                  Sprint planning, engineering collaboration, and QA
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">05</div>
                <h4 className="step-title">Launch</h4>
                <p className="step-description">
                  Go-to-market strategy, user onboarding, and analytics
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">06</div>
                <h4 className="step-title">Iterate</h4>
                <p className="step-description">
                  Data analysis, user feedback, and continuous improvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}