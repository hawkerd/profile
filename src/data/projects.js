// src/data/projectsData.js

import technologies from './technologies';

const projects = [
    {
        title: "Drone Simulation",
        url: "https://hub.docker.com/repository/docker/hawkerd/drone_simulation_final/general",
        summary: "Advanced model that simulates a drone package delivery system surrounding the University of Minnesota",
        details: [
            "Integrated backend C++ logic with frontend HTML, CSS, and TypeScript using JSON.",
            "Used design patterns like Builder, Decorator, and Abstract Factory to improve and add functionality.",
            "Worked on a team with three other students, using Jira for project management and Git for version control."
        ],
        technologies: [technologies.CPlusPlus, technologies.TypeScript, technologies.HTML, technologies.CSS, technologies.Git, technologies.Docker],
        media: "project media/drone simulation.png"
    },
    {
        title: "Algorithm Visualizer",
        url: "https://github.com/hawkerd/visualizer",
        summary: "Application that visualizes common sorting algorithms and pathfinding algorithms",
        details: [
            "Written in C++ and uses OpenGL for rendering through libraries including GLFW and GLEW.",
            "Maintains a client-side database system using SQLite to store user preferences.",
            "Required a deep understanding of the algorithms used, which was a great learning experience."
        ],
        technologies: [technologies.CPlusPlus, technologies.OpenGL, technologies.SQLite, technologies.Git],
        media: "project media/visualizer.png"
    }
];

export default projects;
