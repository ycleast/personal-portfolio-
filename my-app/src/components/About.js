import React from 'react';

const About = () => {
  return (
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
            // Replace with your bio (1-2 paragraphs)
            Computer Science student at [University] specializing in web development. 
            Passionate about building accessible, performant applications with React.
          </p>
          <p>
            // Add personal interests
            When not coding, I enjoy hiking, photography, and contributing to open-source.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;