// src/data/projectsData.js

import technologies from './technologies';

const projects = [
    {
        title: "ProMix V",
        url: "https://www.graco.com/content/dam/graco/ipd/literature/flyers/345229/345229EN-A.pdf",
        summary: "Industrial plural component proportioner (Graco)",
        details: [
            'Led a cross-functional team across Minneapolis and Delhi, managing pull requests, conducting thorough code reviews, and driving decisions on the project roadmap and release cycle.',
            'Developed and optimized embedded Linux software using C and Structured Text (CoDeSys), significantly enhancing machine control processes and user interface responsiveness.',
            'Added features to save customer time, reduce material costs, and minimize environmental impact, directly contributing to Graco’s sustainability and cost-efficiency goals.',
            'Performed extensive regression testing, improving software reliability for important launches and field tests.',
            'Practiced Agile methodologies through daily standups and sprints, using tools like Jira, Git, and BitBucket.'
        ],
        technologies: [technologies.C, technologies.StructuredText, technologies.CoDeSys, technologies.Linux, technologies.Git, technologies.BitBucket, technologies.Jira],
        media: "project media/promix.png"
    },
    {
        title: "Jira Clone",
        url: "https://hub.docker.com/repository/docker/hawkerd/drone_simulation_final",
        summary: "A full-stack Jira clone designed to emulate Jira’s interface and functionality.",
        details: [
            "Built the backend using Go to support CRUD operations and manage HTTP requests for project and task data.",
            "Developed the frontend with React, Next.js, and Tailwind CSS to replicate the Jira interface and enhance user experience.",
            "Containerized the frontend and backend using Docker, facilitating seamless deployment and scalability.",
            "Integrated Amazon AWS RDS with PostgreSQL for a robust, cloud-based database solution."
        ],
        technologies: [technologies.Go, technologies.React, technologies.NextJs, technologies.TailwindCSS, technologies.Docker, technologies.PostgreSQL, technologies.AWS],
        media: "project media/jira_clone.png"
    },
    {
        title: "STL Clone",
        url: "https://github.com/hawkerd/stl",
        summary: "Custom implementation of key components of the C++ Standard Library (STL).",
        details: [
            'Implemented core C++ standard library data structures and algorithms from scratch, including vector, list, map, and set, mimicking the behavior and performance of their standard counterparts.',
            'Performed unit testing using the Google Test library to ensure functionality compared to the STL.',
            'Gained a deep understanding of commonly used data structures/ algorithms and their implementations.'
        ],
        technologies: [technologies.CPlusPlus, technologies.Git],
        media: "project media/stl.png"
    },
    {
        title: "Stock Market Discord Bot",
        url: "https://github.com/BenPankratz/CryptoDiscordBot",
        summary: "Discord bot that tracks information on cryptocurrencies.",
        details: [
            "Collaborated with two University of Minnesota students to create a bot that provides up-to-date market data and insights for users.",
            "Integrated Python libraries with Discord API and multiple cryptocurrency APIs to track and display relevant data.",
            "Configured a SQLite database to store user preferences, including update frequency and favorite tickers."
        ],
        technologies: [technologies.Python, technologies.SQLite],
        media: "project media/disc.png"

    },
    {
        title: "Portfolio Website",
        url: "",
        summary: "A personal portfolio website to showcase my projects and experience in software development.",
        details: [
            "Developed a responsive website using HTML, CSS, and JavaScript, leveraging React and Node.js for a dynamic front-end experience.",
            "Designed modular React components for project displays and portfolio sections.",
            "Integrated Git for version control and deployed the website using GitHub Pages, optimizing the build process for seamless updates."
        ],
        technologies: [technologies.React, technologies.NodeJs, technologies.HTML, technologies.CSS, technologies.JavaScript, technologies.Git],
        media: "project media/profile.png"

    },
    {
        title: "Drone Simulation",
        url: "https://hub.docker.com/repository/docker/hawkerd/drone_simulation_final/general",
        summary: "An advanced simulation model for a drone package delivery system around the University of Minnesota.",
        details: [
            "Collaborated with a team of three students to build a full-stack interactive drone simulation system.",
            "Developed backend logic in C++ and integrated it with a frontend UI utilizing HTML, CSS, and TypeScript.",
            "Managed project workflows with Git and Jira, using Docker for containerized deployment and cross-platform compatibility.",
            "Implemented software design patterns like Builder, Decorator, and Abstract Factory to ensure scalability and maintainability."
        ],
        technologies: [technologies.CPlusPlus, technologies.TypeScript, technologies.HTML, technologies.CSS, technologies.Git, technologies.Docker, technologies.Jira],
        media: "project media/drone simulation.png"
    },
    {
        title: "Algorithm Visualizer",
        url: "https://github.com/hawkerd/visualizer",
        summary: "Application that visualizes common sorting and pathfinding algorithms",
        details: [
            "Built with C++ and OpenGL, using libraries such as GLFW and GLEW to render interactive algorithm visualizations.",
            "Developed a client-side SQLite database for persistent user preferences.",
            "Enhanced algorithmic understanding by implementing and visualizing sorting and pathfinding algorithms in a user-friendly interface."
        ],
        technologies: [technologies.CPlusPlus, technologies.OpenGL, technologies.SQLite, technologies.Git],
        media: "project media/visualizer.png"
    },

];

export default projects;
