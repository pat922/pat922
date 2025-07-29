import React, { Component } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ScrollAnimations from './components/ScrollAnimations';
import portfolioData from './portfolioData';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false
    };
  }

  toggleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
    document.body.classList.toggle('dark-mode');
  }

  render() {
    return (
      <div className={`App ${this.state.darkMode ? 'dark-mode' : ''}`}>
        <ParticleBackground />
        <ScrollAnimations />
        <Navigation 
          portfolioData={portfolioData} 
          darkMode={this.state.darkMode}
          toggleDarkMode={this.toggleDarkMode}
        />
        <Hero portfolioData={portfolioData} />
        <About portfolioData={portfolioData} />
        <Projects portfolioData={portfolioData} />
        <Skills portfolioData={portfolioData} />
        <Contact portfolioData={portfolioData} />
        <Footer portfolioData={portfolioData} />
      </div>
    );
  }
}

export default App;