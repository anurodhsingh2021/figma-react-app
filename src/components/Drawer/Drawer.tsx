import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Drawer.scss';

interface Props {
  open: boolean;
  onClose: () => void;
  navLinks: { label: string; path: string }[];
}

const Drawer = ({ open, onClose, navLinks }: Props) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  return (
    <div
      className={`drawer ${open ? 'open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <button
        className="drawer_close"
        onClick={onClose}
        aria-label="Close menu"
      >
        ✕
      </button>

      <nav className="drawer_nav" aria-label="Drawer navigation">
        {navLinks.map(({ label, path }) => (
          <NavLink
            key={label}
            to={path}
            onClick={onClose}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Drawer;
