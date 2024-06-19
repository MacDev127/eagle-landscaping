import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';
import { BiMenu, BiX } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import { TiMessages } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false); // Automatically close the menu whenever the route changes
  }, [location]);

  return (
    <>
      <header>
        <div className="logo">
          <img src="/gallery/logo3.png" alt="Logo" className="logo" />
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'nav_link active-link' : 'nav_link'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gardening"
                className={({ isActive }) =>
                  isActive ? 'nav_link active-link' : 'nav_link'
                }
              >
                Gardening
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/paving"
                className={({ isActive }) =>
                  isActive ? 'nav_link active-link' : 'nav_link'
                }
              >
                Paving
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'nav_link active-link' : 'nav_link'
                }
              >
                Contact
              </NavLink>
            </li>
            <Link to="/contact">
              <button className="nav__btn  ">
                Get quote
                <TiMessages style={{ marginLeft: '10px' }} />
              </button>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
