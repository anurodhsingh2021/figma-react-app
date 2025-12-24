import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  test('renders all form fields', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  test('shows validation errors on empty submit', async () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByRole('button', { name: /send/i }));

    expect(await screen.findByText('Name is required')).toBeInTheDocument();
    expect(await screen.findByText('Email is required')).toBeInTheDocument();
    expect(await screen.findByText('Message is required')).toBeInTheDocument();
  });

  test('shows error for invalid email', async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'invalid-email' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Hello' },
    });

    fireEvent.click(screen.getByRole('button', { name: /send/i }));

    expect(
      await screen.findByText('Invalid email address'),
    ).toBeInTheDocument();
  });

  test('clears form after successful submit', async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Hello there' },
    });

    fireEvent.click(screen.getByRole('button', { name: /send/i }));

    expect(screen.getByLabelText(/name/i)).toHaveValue('');
    expect(screen.getByLabelText(/email/i)).toHaveValue('');
    expect(screen.getByLabelText(/message/i)).toHaveValue('');
  });
});
