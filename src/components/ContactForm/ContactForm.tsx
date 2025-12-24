import { useState } from 'react';
import './ContactForm.scss';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const newErrors: Partial<FormState> = {};

    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    console.log('Form submitted', form);
    setForm(initialState);
  };

  return (
    <section className="contact">
      <div className="contact_text">
        <h2>QUESTION?</h2>
        <h2>WE ARE HERE TO HELP!</h2>
      </div>

      <form
        className="contact_form"
        onSubmit={handleSubmit}
        noValidate
        aria-live="polite"
      >
        <div className="contact_input_row">
          <div className="contact_row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <small id="name-error" role="alert">
                {errors.name}
              </small>
            )}
          </div>

          <div className="contact_row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <small id="email-error" role="alert">
                {errors.email}
              </small>
            )}
          </div>
        </div>

        <div className="contact_row">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <small id="message-error" role="alert">
              {errors.message}
            </small>
          )}
        </div>

        <button type="submit">SEND</button>
      </form>
    </section>
  );
};

export default ContactForm;
