import React from 'react';

const Projects = () => {
  // Sample project data (replace with your real projects)
  const projects = [
    { id: 1, title: "Project 1", description: "A responsive website built with React" },
    { id: 2, title: "Project 2", description: "A REST API using Node.js" }
  ];

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;