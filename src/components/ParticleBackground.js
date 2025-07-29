import React, { Component } from 'react';

export default class ParticleBackground extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.particles = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.animationId = null;
  }

  componentDidMount() {
    this.initCanvas();
    this.createParticles();
    this.animate();
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('mousemove', this.handleMouseMove);
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  handleResize = () => {
    this.initCanvas();
  }

  handleMouseMove = (e) => {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  initCanvas = () => {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    this.ctx = ctx;
  }

  createParticles = () => {
    const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        hue: Math.random() * 60 + 280, // Purple to cyan range
        pulsePhase: Math.random() * Math.PI * 2,
        connectionDistance: 150
      });
    }
  }

  animate = () => {
    const { ctx } = this;
    const canvas = this.canvasRef.current;
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    this.particles.forEach((particle, i) => {
      // Mouse interaction
      const dx = this.mouseX - particle.x;
      const dy = this.mouseY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100;
        particle.vx -= (dx / distance) * force * 0.2;
        particle.vy -= (dy / distance) * force * 0.2;
      }
      
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.vx *= -0.9;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.vy *= -0.9;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }
      
      // Apply friction
      particle.vx *= 0.99;
      particle.vy *= 0.99;
      
      // Pulse effect
      particle.pulsePhase += 0.02;
      const pulseFactor = 1 + Math.sin(particle.pulsePhase) * 0.3;
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * pulseFactor, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`;
      ctx.fill();
      
      // Draw glow
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * pulseFactor * 4
      );
      gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, ${particle.opacity * 0.3})`);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(
        particle.x - particle.size * 4,
        particle.y - particle.size * 4,
        particle.size * 8,
        particle.size * 8
      );
      
      // Connect nearby particles
      for (let j = i + 1; j < this.particles.length; j++) {
        const other = this.particles[j];
        const dx = other.x - particle.x;
        const dy = other.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < particle.connectionDistance) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = `hsla(${(particle.hue + other.hue) / 2}, 70%, 60%, ${
            (1 - distance / particle.connectionDistance) * 0.2
          })`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    });
    
    this.animationId = requestAnimationFrame(this.animate);
  }

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        className="particle-background"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
    );
  }
}