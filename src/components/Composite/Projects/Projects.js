/* src/components/composite/Projects/Projects.js */
import React from 'react';
import './Projects.css';

/* Import Components */
import Project from './Project';

/* Import Data */
import projects from '../../../data/projects';

const Projects = () => {
    return (
        <div className="projects">
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
    );
};

export default Projects;
