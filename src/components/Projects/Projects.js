import React from 'react';
import Project from './Project';
import './Projects.css';

const Projects = ({ projects }) => {
    return (
        <div className="projects">
            <h2 className="projects-title">Project Experience</h2>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        url={project.url}
                        summary={project.summary}
                        details={project.details}
                        technologies={project.technologies}
                        media={project.media}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
