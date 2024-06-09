import React from 'react';

// import { FaInstagram } from 'react-icons/fa';
// import { FaTiktok } from 'react-icons/fa';
// import { FaFacebookF } from 'react-icons/fa';

import './Footer.css';

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="footer__container">
          {/* <div className="footer__widget-socials">
            <a
              className="social-icon"
              href="https://twitter.com/conflicttextil1"
            >
              <FaFacebookF style={{ color: 'white' }} />
            </a>
            <a
              className="social-icon"
              href="https://www.youtube.com/@CAINWebService"
            >
              <FaInstagram style={{ color: 'white' }} />
            </a>

            <a className="social-icon" href="https://youtube.com/">
              <FaTiktok style={{ color: 'white' }} />
            </a>
          </div> */}
        </div>
        <div className="footer__copy">
          <p className="copy">&copy; Eagle Landscaping 2024</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
