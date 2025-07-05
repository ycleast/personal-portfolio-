// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.section
            id="about"
            className="section"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <section id="about" className="section">
                <div className="about-content">
                    <img
                        src="/path/to/your/photo.jpg"
                        alt="Your Name"
                        className="profile-photo"
                    />
                    <div>
                        <h2>About Me</h2>
                        <p>
                            Computer Science student at [University] specializing in web development.
                            Passionate about building accessible, performant applications with React.
                        </p>
                        <p>
                            When not coding, I enjoy hiking, photography, and contributing to open-source.
                        </p>
                    </div>
                </div>
            </section>
        </motion.section >
    );
};

export default About;