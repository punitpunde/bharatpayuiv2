import React from 'react';
import './Contact.css';  // Import the updated CSS

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Contact Info Section */}
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>We would love to hear from you! Reach out to us using the form or the information below.</p>
          <ul>
            <li>
              <img src="/images/phone-call.png" alt="Phone Icon" /> 
              +1 234 567 890
            </li>
            <li>
              <img src="/images/gmail.png" alt="Email Icon" /> 
              info@example.com
            </li>
            <li>
              <img src="/images/placeholder.png" alt="Location Icon" /> 
              1234 Street Name, City, Country
            </li>
          </ul>

          {/* Social Links */}
          <div className="social-links">
            <h3>Follow us:</h3>
            <a href="https://www.instagram.com/punitpunde" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/punit-punde-840643274/" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
