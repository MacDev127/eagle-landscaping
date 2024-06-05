import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-left-side">
          <div className="contact-details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="contact-topic">Address:</div>
            <div className="contact-text">
              198 West 21th Street, Suite 721 New York NY 10016
            </div>
          </div>
          <div className="contact-details">
            <i className="fas fa-phone-alt"></i>
            <div className="contact-topic">Phone:</div>
            <div className="contact-text">+1235 2355 98</div>
          </div>
          <div className="contact-details">
            <i className="fas fa-envelope"></i>
            <div className="contact-topic">Email:</div>
            <div className="contact-text">info@yoursite.com</div>
          </div>
          <div className="contact-details">
            <i className="fas fa-globe"></i>
            <div className="contact-topic">Website:</div>
            <div className="contact-text">yoursite.com</div>
          </div>
        </div>
        <div className="contact-right-side">
          <form action="#">
            <div className="contact-input-box">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="contact-input-box">
              <input type="text" placeholder="Email" required />
            </div>
            <div className="contact-input-box">
              <textarea placeholder="Message" required></textarea>
            </div>
            <div className="contact-button">
              <input type="submit" value="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
