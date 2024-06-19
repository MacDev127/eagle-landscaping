import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6omsir9', 'template_fp9mouf', form.current!, {
        publicKey: 'MV1gJwNCShqdgiqeH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current!.reset();
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrorMessage('Failed to send message: ' + error.text); // Set error message
          setTimeout(() => setErrorMessage(''), 5000);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-left-side">
          <div className="contact-logo">
            <img src="/gallery/white-logo.png" alt="" />
          </div>
          <div className="contact_heading">Get in Touch</div>
          <div className="contact-details">
            <div className="contact-details_container">
              <FaPhone style={{ fontSize: '20px' }} />

              <div className="contact-text">+44 7564 823319</div>
            </div>
          </div>
          <div className="contact-details">
            <div className="contact-details_container">
              <FaEnvelope style={{ fontSize: '20px' }} />

              <div className="contact-text">eaglelscape@gmail.com</div>
            </div>
          </div>
          <div className="contact-details">
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
          <form ref={form} onSubmit={sendEmail}>
            <div className="contact-input-box">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Name"
                name="user_name"
                id="name"
                required
              />
            </div>
            <div className="contact-input-box">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                name="user_email"
                placeholder="Email"
                id="email"
                required
              />
            </div>
            <div className="contact-input-box">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                cols={30}
                rows={5}
                required
              ></textarea>
            </div>
            <div className="contact-button">
              <input type="submit" value="Send Message" />
            </div>
          </form>
          {submitted && (
            <div className="success-message">Message sent successfully!</div>
          )}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
