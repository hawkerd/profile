/* src/data/resume.js */
import technologies from './technologies';

const resume = {
    techStack: {
        backend: [
            technologies.C,
            technologies.CPlusPlus,
            technologies.Python,
            technologies.Java,
            technologies.OCaml,
            technologies.StructuredText,
            technologies.Assembly
        ],
        frontend: [
            technologies.JavaScript,
            technologies.HTML,
            technologies.CSS,
            technologies.TypeScript
        ],
        technologies: [
            technologies.OpenGL,
            technologies.SQLite,
            technologies.NodeJs,
            technologies.React
        ],
        tools: [
            technologies.Git,
            technologies.Docker,
            technologies.GDB,
            technologies.R,
            technologies.Valgrind,
            technologies.UML
        ],
        software: [
            technologies.Atlassian,
            technologies.Office,
            technologies.CoDeSys,
            technologies.VsCode,
            technologies.IntelliJ,
            technologies.MatLab,
            technologies.Mathematica,
            technologies.GitHub,
            technologies.DockerHub
        ],
        systems: [
            technologies.Linux,
            technologies.Windows,
            technologies.MacOS
        ],

    },
    workPositions: [
        {
            logoUrl: 'icons/graco.png',
            name: 'Graco',
            position: 'Software Engineering Intern',
            dateRange: { start: 'May 2024', end: 'Present' },
            location: { city: 'Minneapolis', state: 'Minnesota', country: 'USA' },
            details: [
                'Worked on the software development team of ProMix V, Graco’s flagship industrial proportioning system.',
                'Took on a leadership role by reviewing code and providing feedback to the offshore team, and by helping to manage the release cycle.',
                'Enhanced understanding of software engineering principles and practices, especially those related to embedded systems and automation.',
                'Developed strong communication and collaboration skills through interaction with teams across different locations and time zones.',
                'Practiced agile and scrum methodologies, using tools like Jira, Git, and BitBucket to ensure timely and successful releases.',
            ]
        },
        {
            logoUrl: 'icons/coolsys.png',
            name: 'CoolSys',
            position: 'Refrigeration Technician 1',
            dateRange: { start: 'June 2022', end: 'August 2023' },
            location: { city: 'Madison', state: 'Wisconsin', country: 'USA' },
            details: [
                'Cleaned and maintained commercial refrigeration systems across Wisconsin, Illinois, and Michigan for companies like Woodman\'s, Target, Costco, and Aldi.',
                'Collaborated in teams of two to six, and also worked alone when required.',
                'Trained new employees, traveled, and had lots of (expensive) responsibilities.'
            ]
        },
        {
            logoUrl: 'icons/bait.png',
            name: 'Monona Bait and Ice Cream',
            position: 'Cashier/Cook',
            dateRange: { start: 'June 2018', end: 'October 2021' },
            location: { city: 'Monona', state: 'Wisconsin', country: 'USA' },
            details: [
                'Worked seasonally for four years at a small bait and ice cream shop.',
                'Cooked food, scooped ice cream, cleaned, and provided great customer service.',
            ]
        }
    ],
    educationPositions: [
        {
            logoUrl: 'icons/umn.png',
            name: 'University of Minnesota (College of Science and Engineering)',
            position: 'B.S. Computer Science, Mathematics Minor',
            dateRange: { start: 'September 2022', end: 'Present (May 2025)' },
            location: { city: 'Minneapolis', state: 'Minnesota', country: 'USA'},
            details: [
                'At the U, I truly found my stride and passion. I decided to study computer science because I love programming and problem solving, and it lines up closely with how I think; I have always been an engineer at heart. I am also studying mathematics, because I believe it teaches me to think critically, and is a foundation to any engineering discipline. I am hoping to use this education to propel me into a career in software engineering, where I can continue to learn and grow.',
                'Academics: 3.941 GPA, CSE Dean\'s List',
                'Relevant Coursework: Data Structures, Algorithms, Computer Architecture, Operating Systems, Discrete Mathematics, Linear Algebra, Calculus, Statistics, Physics'
            ]
        },
        {
            logoUrl: 'icons/mg.png',
            name: 'Monona Grove High School',
            position: 'Student',
            dateRange: { start: 'September 2018', end: 'June 2022' },
            location: { city: 'Monona', state: 'Wisconsin', country: 'USA' },
            details: [
                'My time at MGHS was spent figuring out what I wanted to do with my life. I took a variety of technical classes, played on the hockey team, and worked part time. I left with a strong foundation in engineering and mathematics, and a desire to learn much more at the University of Minnesota.',
                'Academics: 3.99 GPA, 35 ACT, 1550 SAT, 8 APs',
                'Honors and Awards: National Merit Scholar, National Honor Society, Hockey Team Academic Captain'
            ]
        }
    ]
}

export default resume;
