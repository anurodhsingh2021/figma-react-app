import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import Drawer from './Drawer';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
];

const renderDrawer = (open = true, onClose = vi.fn()) =>
  render(
    <MemoryRouter>
      <Drawer open={open} onClose={onClose} navLinks={navLinks} />
    </MemoryRouter>
  );

describe('Drawer component', () => {
  test('renders drawer when open', () => {
    renderDrawer(true);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('is hidden when closed', () => {
    renderDrawer(false);

    const dialog = screen.getByRole('dialog', { hidden: true });
    expect(dialog).toHaveAttribute('aria-hidden', 'true');
  });

  test('renders navigation links', () => {
    renderDrawer(true);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    renderDrawer(true, onClose);

    fireEvent.click(screen.getByLabelText('Close menu'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('calls onClose when a nav link is clicked', () => {
    const onClose = vi.fn();
    renderDrawer(true, onClose);

    fireEvent.click(screen.getByText('Home'));
    expect(onClose).toHaveBeenCalled();
  });

  test('closes drawer on Escape key press', () => {
    const onClose = vi.fn();
    renderDrawer(true, onClose);

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });
});
