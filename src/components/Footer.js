import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const { portfolioData } = this.props;
    const currentYear = new Date().getFullYear();

    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section footer-links-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links footer-links-horizontal">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href={portfolioData.resumeDownload} download>Resume</a></li>
              </ul>
            </div>

            <div className="footer-section footer-connect-section">
              <h3 className="footer-title">Connect</h3>
              <div className="footer-social">
                {portfolioData.linkedin && (
                  <a 
                    href={portfolioData.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-social-link"
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
                    className="footer-social-link"
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
                    className="footer-social-link"
                    aria-label="Twitter"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                )}
                {portfolioData.email && (
                  <a 
                    href={`mailto:${portfolioData.email}`}
                    className="footer-social-link"
                    aria-label="Email"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © {currentYear} {portfolioData.name}. All rights reserved.
            </p>
            <p className="footer-tagline">
              Built with React & ❤️ for great products
            </p>
          </div>
        </div>

        <a href="#home" className="back-to-top" aria-label="Back to top">
          <i className="fa fa-chevron-up"></i>
        </a>
      </footer>
    );
  }
}