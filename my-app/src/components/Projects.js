import React from 'react';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      title: "E-Commerce Dashboard", 
      description: "React dashboard with real-time analytics",
      technologies: ["React", "Chart.js", "Firebase"],
      github: "https://github.com/your/project",
      liveDemo: "https://your-project-demo.com"
    },
    // Add 2-3 more projects
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;