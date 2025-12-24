import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import Navbar from './Navbar';

/**
 * Mock Drawer to isolate Navbar behavior
 */
vi.mock('../Drawer/Drawer', () => ({
  default: ({ open, onClose }: { open: boolean; onClose: () => void }) =>
    open ? (
      <div role="dialog">
        <button onClick={onClose}>Close Drawer</button>
      </div>
    ) : null,
}));

const renderNavbar = (initialRoute = '/') =>
  render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Navbar />
    </MemoryRouter>
  );

describe('Navbar component', () => {
  test('renders logo', () => {
    renderNavbar();
    expect(screen.getByText('DEPT®')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderNavbar();

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Culture')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
  });

  test('menu button is accessible', () => {
    renderNavbar();

    expect(
      screen.getByRole('button', { name: /open menu/i })
    ).toBeInTheDocument();
  });

  test('opens drawer when menu button is clicked', () => {
    renderNavbar();

    fireEvent.click(
      screen.getByRole('button', { name: /open menu/i })
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('closes drawer when close action is triggered', () => {
    renderNavbar();

    fireEvent.click(
      screen.getByRole('button', { name: /open menu/i })
    );

    fireEvent.click(screen.getByText('Close Drawer'));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('applies active class to active route', () => {
    renderNavbar('/work');

    const activeLink = screen.getByText('Work');
    expect(activeLink.className).toContain('active');
  });
});
