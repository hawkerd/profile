//src/App.js
import React from 'react';
import './App.css';

/* Import components */
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';

/* Import data */
import projects from './data/projects';
import aboutme from './data/aboutme';

function App() {
    return (
        <div className="App">
            <h1 className="name">Daniel Hawker</h1>
            <AboutMe title={aboutme.title} paragraph={aboutme.paragraph} profilephoto={aboutme.profilephoto} contacts={aboutme.contacts} technologies={aboutme.technologies}/>
            <Projects projects={projects} />
        </div>
    );
}

export default App;