import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '../Drawer/Drawer';
import './Navbar.scss';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/work' },
  { label: 'Culture', path: '/culture' },
  { label: 'Services', path: '/services' },
  { label: 'Partners', path: '/partners' },
  { label: 'Stories', path: '/stories' },
  { label: 'Careers', path: '/careers' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar_logo">DEPT®</div>
        <div  className="navbar_links_contianer">
          <nav className="navbar_links">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? 'active' : undefined
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* 3 DOT MENU */}
          <button
            className="navbar_menu"
            aria-label="Open menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} navLinks={navLinks}/>
    </>
  );
};

export default Navbar;
