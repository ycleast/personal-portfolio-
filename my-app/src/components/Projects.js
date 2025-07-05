import React from 'react';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
};

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
        <motion.section
            id="projects"
            className="section"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
        >
            <h2>My Projects</h2>
            <motion.div className="projects-container" variants={container}>        {projects.map(project => (
                <motion.div
                    key={project.id}
                    className="project-card"
                    variants={item}
                    whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                >
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
                </motion.div>
            ))}
            </motion.div>
        </motion.section>
    );
};

export default Projects;