import { NavLink } from 'react-router-dom';
import './Drawer.scss';

interface Props {
  open: boolean;
  onClose: () => void;
  navLinks: { label: string, path: string }[];
}

const Drawer = ({ open, onClose, navLinks }: Props) => {
  return (
    <div className={`drawer ${open ? 'open' : ''}`}>
      <button className="drawer_close" onClick={onClose}>
        ✕
      </button>

      <nav className="drawer_nav">
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
