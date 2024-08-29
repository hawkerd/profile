// src/data/projectsData.js

import technologies from './technologies';

const projects = [
    {
        title: "ProMix V",
        url: "https://www.graco.com/content/dam/graco/ipd/literature/flyers/345229/345229EN-A.pdf",
        summary: "Industry-leading plural component proportioner (Graco)",
        details: [
            "Developed robust embedded software in C and Structured Text, enhancing machine control processes and user interfaces.",
            "Refactored highly coupled sections of the codebase into modular libraries, improving scalability and reusability.",
            "Designed and implemented algorithms to handle proportioning, color changes, and purging sequences, reducing material waste and cost.",
            "Led a cross-functional development team across Minneapolis and Delhi, managing pull requests and conducting thorough code reviews to ensure good quality and maintainability.",
            "Utilized Git and BitBucket for version control and Jira for agile project management, ensuring continuous integration and smooth release cycles.",
            "Applied Scrum methodology with bi-weekly sprints, daily standups, and retrospectives.",
            "Performed extensive testing in collaboration with the hardware team, ensuring correct functionality."
        ],
        technologies: [technologies.C, technologies.StructuredText, technologies.CoDeSys, technologies.Linux, technologies.Git, technologies.BitBucket, technologies.Jira],
        media: "project media/promix.png"
    },
    {
        title: "STL Clone",
        url: "https://github.com/hawkerd/stl",
        summary: "Custom implementation of key components of the C++ Standard Library (STL).",
        details: [
            "Implemented core STL data structures and algorithms from scratch, including vector, list, map, and set, mimicking the behavior and performance of their standard counterparts.",
            "Gained a deep understanding of data structures and algorithms, including their design and performance, through hands-on implementation.",
            "Conducted extensive testing and benchmarking to ensure compatibility and performance comparable to the standard STL."
        ],
        technologies: [technologies.CPlusPlus, technologies.Git],
        media: "project media/stl.png"
    },
    {
        title: "Portfolio Website",
        url: "",
        summary: "A personal portfolio website to showcase my projects and experience in software development.",
        details: [
            "Developed a responsive website using HTML, CSS, and JavaScript, utilizing technologies including React and Node.js, for a dynamic front-end experience.",
            "Created modular React components to dynamically showcase projects and experience.",
            "Integrated Git for version control to manage the development process.",
            "Deployed the website using GitHub Pages, optimizing the build process and ensuring a smooth deployment pipeline.",
        ],
        technologies: [technologies.React, technologies.NodeJs, technologies.HTML, technologies.CSS, technologies.JavaScript, technologies.Git],
        media: "project media/profile.png"

    },
    {
        title: "Drone Simulation",
        url: "https://hub.docker.com/repository/docker/hawkerd/drone_simulation_final/general",
        summary: "An advanced simulation model for a drone package delivery system around the University of Minnesota.",
        details: [
            "Collaborated with a team of three University of Minnesota students to develop a comprehensive full-stack drone simulation.",
            "Developed the backend logic in C++ and integrated it with a frontend UI built with HTML, CSS, and TypeScript.",
            "Utilized Git for version control, Jira for agile project management, and Docker for containerized deployment.",
            "Implemented advanced design patterns such as Builder, Decorator, and Abstract Factory to enhance system scalability and maintainability.",
            "Conducted extensive testing and debugging to ensure accurate functionality."
        ],
        technologies: [technologies.CPlusPlus, technologies.TypeScript, technologies.HTML, technologies.CSS, technologies.Git, technologies.Docker, technologies.Jira],
        media: "project media/drone simulation.png"
    },
    {
        title: "Algorithm Visualizer",
        url: "https://github.com/hawkerd/visualizer",
        summary: "Application that visualizes common sorting and pathfinding algorithms",
        details: [
            "Developed using C++ with OpenGL for rendering, utilizing libraries such as GLFW and GLEW to create interactive visualizations of algorithms.",
            "Implemented a client-side database system with SQLite to efficiently store and retrieve user preferences.",
            "Gained an in-depth knowledge of sorting and pathfinding algorithms."
        ],
        technologies: [technologies.CPlusPlus, technologies.OpenGL, technologies.SQLite, technologies.Git],
        media: "project media/visualizer.png"
    },

];

export default projects;
