import React, { Component } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      isSubmitting: false,
      submitMessage: '',
      errors: {}
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ 
      [name]: value,
      errors: { ...this.state.errors, [name]: '' }
    });
  }

  validateForm = () => {
    const { name, email, subject, message } = this.state;
    const errors = {};

    if (!name.trim()) errors.name = 'Name is required';
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!subject.trim()) errors.subject = 'Subject is required';
    if (!message.trim()) {
      errors.message = 'Message is required';
    } else if (message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    return errors;
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = this.validateForm();
    
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }
    
    this.setState({ isSubmitting: true, errors: {} });
    
    // Simulate form submission
    setTimeout(() => {
      this.setState({
        isSubmitting: false,
        submitMessage: 'Thank you for your message! I\'ll get back to you soon.',
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        this.setState({ submitMessage: '' });
      }, 5000);
    }, 1000);
  }

  render() {
    const { portfolioData } = this.props;
    const { name, email, subject, message, isSubmitting, submitMessage, errors } = this.state;

    return (
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header fade-up">
            <h2 className="section-title">Let's Work Together</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">
              Have a product idea? Let's discuss how we can bring it to life.
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info fade-up">
              <h3 className="info-title">Get in Touch</h3>
              <p className="info-description">
                I'm always excited to work on new products and help teams build amazing user experiences. 
                Whether you need a Product Manager for your Web3 project or want to discuss product strategy, 
                feel free to reach out.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <i className="fa fa-envelope"></i>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="fa fa-phone"></i>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <a href={`tel:${portfolioData.phone}`}>{portfolioData.phone}</a>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="fa fa-linkedin"></i>
                  <div className="contact-text">
                    <h4>LinkedIn</h4>
                    <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>Find me on</h4>
                <div className="social-icons">
                  {portfolioData.linkedin && (
                    <a 
                      href={portfolioData.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  )}
                  {portfolioData.github && (
                    <a 
                      href={portfolioData.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <i className="fa fa-github"></i>
                    </a>
                  )}
                  {portfolioData.twitter && (
                    <a 
                      href={portfolioData.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="contact-form fade-up">
              <form onSubmit={this.handleSubmit} className="enhanced-form">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                      placeholder="Your Name"
                      className={`form-input ${errors.name ? 'error' : ''}`}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      placeholder="Your Email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>


                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={this.handleChange}
                    placeholder="Subject"
                    className={`form-input ${errors.subject ? 'error' : ''}`}
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={message}
                    onChange={this.handleChange}
                    placeholder="Your Message"
                    rows="4"
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary btn-submit ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fa fa-paper-plane"></i>
                      Send Message
                    </>
                  )}
                </button>

                {submitMessage && (
                  <div className="submit-message success">
                    <i className="fa fa-check-circle"></i>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}