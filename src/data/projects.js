// src/data/projectsData.js

import technologies from './technologies';

const projects = [
    {
        title: "ProMix V",
        url: "https://www.graco.com/content/dam/graco/ipd/literature/flyers/345229/345229EN-A.pdf",
        summary: "Graco's next generation ProMix, their industrial plural component proportioner",
        details: [
            "Developed and debugged complex state machine logic in C and Structured Text to handle I/O, GUI, and system control.",
            "Refactored large sections of the codebase into reusable libraries to improve code quality and readability by using an object oriented design.",
            "Took on a leadership role on the Minneapolis development team, and helped manage the offshore team in India.",
            "Used Git and BitBucket for version control and Jira for project management.",
            "Practiced Agile development, including daily standups and regular sprints, retrospectives, and release cycles."
        ],
        technologies: [technologies.C, technologies.StructuredText, technologies.Git, technologies.BitBucket, technologies.Jira, technologies.Atlassian],
        media: "project media/promix.png"
    },
    {
        title: "Portfolio Website",
        url: "",
        summary: "This website, showcasing my projects and experience",
        details: [
            "Served as an introduction to front end development, using React and Node.js with HTML, CSS, and JavaScript.",
            "Used Git for version control and deployed the site using GitHub Pages.",
            "Focused on creating a clean, easy to read, responsive design that showcased my projects and experience."
        ],
        technologies: [technologies.React, technologies.NodeJs, technologies.HTML, technologies.CSS, technologies.JavaScript, technologies.Git],
        media: "project media/visualizer.png"

    },
    {
        title: "Drone Simulation",
        url: "https://hub.docker.com/repository/docker/hawkerd/drone_simulation_final/general",
        summary: "Advanced model that simulates a drone package delivery system surrounding the University of Minnesota",
        details: [
            "This was a semester-long project done at the University of Minnesota. I worked with three other students to develop the full stack simulation.",
            'Used Git for version control, Jira for project management, and Docker for deployment.',
            "Integrated backend C++ logic with a frontend UI built with HTML, CSS, and TypeScript.",
            "Used design patterns like Builder, Decorator, and Abstract Factory to improve upon and add functionality to the system."
        ],
        technologies: [technologies.CPlusPlus, technologies.TypeScript, technologies.HTML, technologies.CSS, technologies.Git, technologies.Docker, technologies.Jira],
        media: "project media/drone simulation.png"
    },
    {
        title: "Algorithm Visualizer",
        url: "https://github.com/hawkerd/visualizer",
        summary: "Application that visualizes common sorting and pathfinding algorithms",
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
