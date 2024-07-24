import React, { useState } from 'react';
import { getCSRFToken } from '../utils/csrf'; // Assuming you have this utility function

const Contact = () => {
  const [formData, setFormData] = useState({
    customer_email: '',
    subject: '',
    phone: '',
    first_name: '',
    last_name: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://your-django-api.com/contact-submission/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCSRFToken(),
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // Reset form or show success message
      } else {
        console.error('Form submission failed');
        // Show error message
      }
    } catch (error) {
      console.error('Error:', error);
      // Show error message
    }
  };

  return (
    <section className="contact-section contact-page pt-70 pt-lg-120 pt-xxl-150">
      <div className="container">
        {/* ... (keeping the existing title and description) ... */}
        <div className="contact-us-form">
          <form onSubmit={handleSubmit}>
            <div className="row gx-5 gy-4 gy-lg-5">
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="First Name *"
                  required
                />
              </div>

              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  required
                />
              </div>

              <div className="col-lg-6">
                <input
                  type="email"
                  className="form-control"
                  id="customer_email"
                  value={formData.customer_email}
                  onChange={handleChange}
                  placeholder="Email *"
                  required
                />
              </div>

              <div className="col-lg-6">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                />
              </div>

              <div className="col-12">
                <textarea
                  className="form-control"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  style={{height: "100px"}}
                  required
                ></textarea>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-gradient d-inline-flex" aria-label="submit">Submit</button>
              </div>
            </div>
            {/* -- row -- */}
          </form>
        </div>
        {/* -- contact-us-form --*/}
      </div>
      {/* -- container -- */}
    </section>
  )
}

export default Contact;