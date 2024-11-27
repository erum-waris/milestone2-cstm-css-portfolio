'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    email: '',
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    // Show the popup message
    setShowPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="contactContainer">
      {showPopup && (
        <div className="contactPopup">
          Congrates Your message has been sent!
        </div>
      )}

      <div className="contactFormContainer">
        <form onSubmit={handleSubmit} className="contactForm">
          <h2 className="contactTitle">Contact Us</h2>

          <div className="contactInputGroup">
            <label htmlFor="name" className="contactLabel">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contactInput"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="contactInputGroup">
            <label htmlFor="fatherName" className="contactLabel">
              Father Name
            </label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="contactInput"
              placeholder="Enter father's name"
              required
            />
          </div>

          <div className="contactInputGroup">
            <label htmlFor="email" className="contactLabel">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="contactInput"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className="contactSubmitButton"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
