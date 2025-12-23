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
        <h2>
          WE ARE HERE TO HELP!
        </h2>
      </div>

      <form className="contact_form" onSubmit={handleSubmit} noValidate>
        <div className="contact_input_row">
          <div className="contact_row">
            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <small>{errors.name}</small>}
          </div>

          <div className="contact_row">
            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <small>{errors.email}</small>}
          </div>
        </div>
        <div className="contact_row">
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <small>{errors.message}</small>}
        </div>

        <button type="submit">SEND</button>
      </form>
    </section>
  );
};

export default ContactForm;
