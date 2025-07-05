import React from 'react';

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

  return (
    <section id="skills" className="section">
      <h2>Technical Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;