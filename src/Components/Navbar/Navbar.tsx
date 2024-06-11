import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';
import { BiMenu, BiX } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const location = useLocation(); // This hook returns the location object that represents the current URL

  useEffect(() => {
    setMenuOpen(false); // Automatically close the menu whenever the route changes
  }, [location]);

  return (
    <>
      <header>
        <div className="logo">
          <img src="../../../public/eagle.png" alt="Logo" />
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
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
