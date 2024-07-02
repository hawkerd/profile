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
                'Worked on the software development team of ProMix V, Graco’s upcoming flagship proportioning system.',
                'Developed, tested, refactored, and bug fixed code written in C and Structured Text to help Graco meet their product deadlines and release dates.',
                'Practiced agile development with a Minneapolis team and an offshore team in India through Jira. Regular standups, sprints, retrospectives, and releases.',
                'Reviewed and refined code and pull requests from offshore teams using Git and BitBucket.',
                'Learned how to develop software and work professionally under management with high expectations.'
            ]
        },
        {
            logoUrl: 'icons/coolsys.png',
            name: 'CoolSys',
            position: 'Refrigeration Technician',
            dateRange: { start: 'June 2022', end: 'August 2023' },
            location: { city: 'Madison', state: 'Wisconsin', country: 'USA' },
            details: [
                'Cleaned commercial refrigeration systems across Wisconsin, Illinois, and Michigan.',
                'Customers included chains like Woodman\'s, Target, Walgreens, HyVee, Costco, Aldi, and more',
                'Collaborated with advanced technicians to perform repairs and maintenance.',
                'Worked in teams of two to six, and alone when required.',
                'Trained new employees, traveled for long periods of time, and had lots of responsibility'
            ]
        },
        {
            logoUrl: 'icons/bait.png',
            name: 'Monona Bait and Ice Cream',
            position: 'Cashier/Cook',
            dateRange: { start: 'June 2018', end: 'October 2021' },
            location: { city: 'Monona', state: 'Wisconsin', country: 'USA' },
            details: [
                'Worked part-time seasonally for a local beloved ice cream shop. Situated on Lake Monona, it is a very popular destination in Madison!',
                'Cooked food, scooped ice cream, cleaned, and provided great customer service',
                'Worked with a small crew or alone, depending on the store needs.'
            ]
        }
    ],
    educationPositions: [
        {
            logoUrl: 'icons/umn.png',
            name: 'University of Minnesota (College of Science and Engineering)',
            position: 'B.S. Computer Science, Mathematics Minor',
            dateRange: { start: 'September 2022', end: 'May 2025' },
            location: { city: 'Minneapolis', state: 'Minnesota', country: 'USA'},
            details: [
                'Academic performance: 3.941 GPA, CSE Dean\'s List'
            ]
        },
        {
            logoUrl: 'icons/mg.png',
            name: 'Monona Grove High School',
            position: 'Student',
            dateRange: { start: 'September 2018', end: 'June 2022' },
            location: { city: 'Monona', state: 'Wisconsin', country: 'USA' },
            details: [
                'Academic performance: 3.99 GPA, 8 APs, 35 ACT, 1550 SAT',
                'Honors and Awards: National Merit Scholar, National Honor Society, Hockey Team Academic Captain',
                'Involvement: Varsity Ice Hockey'
            ]
        }
    ]
}

export default resume;
