import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import { BiMenu, BiX } from 'react-icons/bi';

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
        </nav>
      </header>
    </>
  );
};

export default Navbar;
