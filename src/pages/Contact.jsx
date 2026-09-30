import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Wire this up to your backend, form service, or email API.
    console.log('Contact form submitted:', form);

    setSubmitted(true);
  };

  return (
    <section className="contact-page">
      <div className="contact-overlay">
        <div className="contact-content">

          <h1>Contact Us</h1>

          <p className="contact-intro">
            For more information on how Spades Atlas can support your
            global workforce needs, contact us today!
          </p>

          {submitted ? (
            <div className="contact-success">
              <p>
                Thanks — your message has been noted.
                We'll be in touch shortly.
              </p>
            </div>
          ) : (
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">
                  Name:*
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email:
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone:*
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="comments">
                  Comments:
                </label>

                <textarea
                  id="comments"
                  name="comments"
                  rows="3"
                  value={form.comments}
                  onChange={handleChange}
                />
              </div>

              <div className="newsletter-option">
                <label>
                  <input
                    type="checkbox"
                    name="newsletter"
                  />

                  <span>
                    Subscribe to our newsletter
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                Submit
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}