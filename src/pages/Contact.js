import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <section className="section">
      <h2>Contact</h2>
      <ul className="contact-list">
        <li><strong>Email:</strong> andreiarillero24@gmail.com</li>
        <li><strong>GitHub:</strong> <a href="https://github.com/andrei4-rgb" target="_blank" rel="noreferrer">andrei4-rgb</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/andrei4-rgb" target="_blank" rel="noreferrer">andrei4-rgb</a></li>
      </ul>
      <Link className="btn" to="/">← Back to Home</Link>
    </section>
  );
}

export default Contact;
