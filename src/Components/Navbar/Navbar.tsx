import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import { BiMenu, BiX } from 'react-icons/bi';
import { FaEnvelope } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <>
      <header>
        <div className="logo">
          <img src="../../../public/eagle.png" alt="" />
        </div>

        <nav id="navbar" className={menuOpen ? 'open active' : ''}>
          <button
            aria-label="Toggle Menu"
            className="nav-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <BiX className="close-icon" />
            ) : (
              <BiMenu className="menu-icon" />
            )}
          </button>
          <ul>
            <li>
              <Link className="nav_link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/gardening">
                Gardening
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/paving">
                Paving
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="contact">
            <p className="nav_icon">
              <FaEnvelope /> eaglels@gmail.com
            </p>
            <p className="nav_icon">
              <FaMobileAlt /> 07564 823319
            </p>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
