import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Formspree endpoint - works without account
        const formEndpoint = "https://formspree.io/f/mldnknjd"; // This is a test endpoint

        fetch(formEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    setSubmitStatus('success');
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    setSubmitStatus('error');
                }
            })
            .catch((error) => {
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
                setTimeout(() => setSubmitStatus(null), 5000);
            });
    };

    return (
        <section id="contact" className="section">
            <h2>Get in Touch</h2>

            {submitStatus === 'success' && (
                <div className="alert success">
                    Message sent successfully! I'll get back to you soon.
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="alert error">
                    Failed to send message. Please try again or email me directly.
                </div>
            )}

            <form action="https://formspree.io/f/mldnknjd"
                method="POST" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                ></textarea>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit-btn"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            <div className="direct-contact">
                <p>Or contact me directly:</p>
                <a href="mailto:youdsoncleast2702@gmail.com">youdsoncleast2702@gmail.com</a>
            </div>
        </section>
    );
};

export default Contact;