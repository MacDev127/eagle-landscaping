import React from 'react';
import './Contact.css';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-left-side">
          <div className="contact_heading">Get in Touch</div>
          <div className="contact-details">
            <div className="contact-topic">Phone</div>
            <div className="contact-details_container">
              <FaPhone />

              <div className="contact-text">+44 7564 823319</div>
            </div>
          </div>
          <div className="contact-details">
            <div className="contact-topic">Email</div>

            <div className="contact-details_container">
              <FaEnvelope />

              <div className="contact-text">eaglelandscaping@gmail.com</div>
            </div>
          </div>
          <div className="contact-details">
            <div className="contact-topic">Find us On</div>
            <div className="socials_container">
              <div className="socials">
                <a href="">
                  <span>
                    <FaFacebookF />
                  </span>
                </a>
                <a href="">
                  <span>
                    <FaInstagram />
                  </span>
                </a>
                <a href="">
                  <span>
                    <FaTiktok />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right-side">
          <form action="#">
            <div className="contact-input-box">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Name" id="name" required />
            </div>
            <div className="contact-input-box">
              <label htmlFor="email">Email</label>

              <input type="text" placeholder="Email" id="email" required />
            </div>
            <div className="contact-input-box">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Message"
                cols="30"
                rows="5"
                required
              ></textarea>
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
