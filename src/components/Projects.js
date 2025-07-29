import React, { Component } from 'react';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: null
    };
  }

  openProjectModal = (project) => {
    this.setState({ selectedProject: project });
  }

  closeProjectModal = () => {
    this.setState({ selectedProject: null });
  }

  render() {
    const { portfolioData } = this.props;
    const { selectedProject } = this.state;

    // Check if portfolioData and projects exist
    if (!portfolioData || !portfolioData.projects) {
      return (
        <section id="projects" className="projects">
          <div className="container">
            <p>No projects data available</p>
          </div>
        </section>
      );
    }

    const { projects } = portfolioData;
    const allProjects = [
      ...(projects.web2 || []), 
      ...(projects.web3 || [])
    ];

    return (
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header fade-up">
            <h2 className="section-title">Projects & Case Studies</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">
              Real products I've shipped across Web2 and Web3
            </p>
          </div>

          <div className="projects-grid">
            {allProjects.length === 0 ? (
              <p style={{color: 'white', textAlign: 'center'}}>No projects found</p>
            ) : (
              allProjects.map((project, index) => (
                <div key={project.id} className="project-card scale-in">
                <div className="project-image">
                  <img 
                    src={`images/portfolio/${project.image || 'console.jpg'}`} 
                    alt={project.name}
                    onError={(e) => {e.target.src = 'images/portfolio/console.jpg'}}
                  />
                  <div className="project-overlay">
                    <button 
                      className="view-project-btn"
                      onClick={() => this.openProjectModal(project)}
                    >
                      View Case Study
                    </button>
                  </div>
                </div>
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.stack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
            )}
          </div>
        </div>

        {selectedProject && (
          <div className="project-modal" onClick={this.closeProjectModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={this.closeProjectModal}>
                <i className="fa fa-times"></i>
              </button>
              
              <div className="modal-header">
                <h2 className="modal-title">{selectedProject.name}</h2>
                <div className="modal-meta">
                  <span className="modal-year">{selectedProject.year}</span>
                  <span className="modal-role">{selectedProject.role}</span>
                </div>
              </div>

              <div className="modal-body">
                <div className="case-study-section">
                  <h3>Context</h3>
                  <p>{selectedProject.context}</p>
                </div>

                <div className="case-study-section">
                  <h3>My Role</h3>
                  <ul className="role-list">
                    {selectedProject.myRole.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="case-study-section">
                  <h3>Outcome</h3>
                  <ul className="outcome-list">
                    {selectedProject.outcome.map((item, i) => (
                      <li key={i} className="outcome-item">
                        <span className="outcome-icon">✅</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="case-study-section">
                  <h3>Tech Stack</h3>
                  <div className="tech-stack">
                    {selectedProject.stack.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View Live Project
                    </a>
                  )}
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}