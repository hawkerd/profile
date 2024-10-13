/* src/data/resume.js */
import technologies from './technologies';

const resume = {
    techStack: {
        backend: [
            technologies.Go,
            technologies.Java,
            technologies.CPlusPlus,
            technologies.Python,
            technologies.C,
            technologies.OCaml,
            technologies.StructuredText,
            technologies.Assembly
        ],
        frontend: [
            technologies.JavaScript,
            technologies.TypeScript,
            technologies.HTML,
            technologies.CSS,
            technologies.React,
            technologies.NextJs,
            technologies.TailwindCSS,
            technologies.OpenGL
        ],
        tools: [
            technologies.Git,
            technologies.Docker,
            technologies.GDB,
            technologies.Valgrind,
            technologies.UML
        ],
        software: [
            technologies.GitHub,
            technologies.DockerHub,
            technologies.VsCode,
            technologies.IntelliJ,
            technologies.Atlassian,
            technologies.Jira,
            technologies.BitBucket,
            technologies.Office,
            technologies.MatLab,
            technologies.Mathematica,
            technologies.R
        ],
        database: [
            technologies.PostgreSQL,
            technologies.SQLite,
            technologies.AWS,
            technologies.NodeJs
        ],
        systems: [
            technologies.Linux,
            technologies.Windows,
            technologies.MacOS
        ]

    },
    workPositions: [
        {
            logoUrl: 'icons/graco.png',
            name: 'Graco',
            position: 'Software Engineering Intern',
            dateRange: { start: 'May 2024', end: 'Present' },
            location: { city: 'Minneapolis', state: 'Minnesota', country: 'USA' },
            details: [
                'Led a cross-functional team across Minneapolis and Delhi, managing pull requests, conducting thorough code reviews, and driving decisions on the project roadmap and release cycle.',
                'Developed and optimized embedded Linux software for Graco’s ProMix V, using C and Structured Text (CoDeSys), significantly enhancing machine control processes and user interface responsiveness.',
                'Added features to save customer time, reduce material costs, and minimize environmental impact, directly contributing to Graco’s sustainability and cost-efficiency goals.',
                'Performed extensive regression testing, improving software reliability for important launches and field tests.',
                'Practiced Agile methodologies through daily standups and sprints, using tools like Jira, Git, and BitBucket.'
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
                'Academics: 3.941 GPA, CSE Dean\'s List',
                'Relevant coursework: Artificial Intelligence, Machine Architecture, Operating Systems, Networking, Functional Programming, Discrete Mathematics, Linear Algebra, Algorithms & Data Structures'
            ]
        },
        {
            logoUrl: 'icons/mg.png',
            name: 'Monona Grove High School',
            position: 'Student',
            dateRange: { start: 'September 2018', end: 'June 2022' },
            location: { city: 'Monona', state: 'Wisconsin', country: 'USA' },
            details: [
                'Academics: 3.99 GPA, 35 ACT, 1550 SAT, 8 APs',
                'Honors and Awards: National Merit Scholar, National Honor Society, Hockey Team Academic Captain'
            ]
        }
    ]
}

export default resume;
