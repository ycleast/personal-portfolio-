import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! I'll contact you at ${email}`);
  };

  return (
    <section id="contact" className="section">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <button type="submit">Contact Me</button>
      </form>
    </section>
  );
};

export default Contact;