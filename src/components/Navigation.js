import React, { Component } from 'react';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      mobileMenuOpen: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }

  toggleMobileMenu = () => {
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
  }

  render() {
    const { portfolioData, darkMode, toggleDarkMode } = this.props;
    const { scrolled, mobileMenuOpen } = this.state;

    return (
      <nav className={`navigation ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <a href="#home" className="brand-link">
              <span className="brand-icon">🚀</span>
              <span className="brand-text">Welcome to PatSpace</span>
            </a>
          </div>

          <div className="nav-menu">
            <ul className="nav-links">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#projects" className="nav-link">Projects</a></li>
              <li><a href="#skills" className="nav-link">Skills</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </div>

          <button 
            className="mobile-menu-toggle"
            onClick={this.toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>
        </div>

        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a href="#home" onClick={this.toggleMobileMenu}>Home</a></li>
            <li><a href="#about" onClick={this.toggleMobileMenu}>About</a></li>
            <li><a href="#projects" onClick={this.toggleMobileMenu}>Projects</a></li>
            <li><a href="#skills" onClick={this.toggleMobileMenu}>Skills</a></li>
            <li><a href="#contact" onClick={this.toggleMobileMenu}>Contact</a></li>
          </ul>
          <div className="mobile-nav-actions">
            <a 
              href={portfolioData.resumeDownload} 
              className="resume-btn"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>
    );
  }
}