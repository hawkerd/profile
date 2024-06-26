import React from 'react';
import './App.css';

/* Import components */
import Projects from './components/Projects/Projects';
import ContactBox from './components/ContactBox/ContactBox';

/* Import data */
import projects from './data/projects';
import contacts from './data/contacts';

function App() {
    return (
        <div className="App">
            <ContactBox contacts={contacts} />
            <Projects projects={projects} />
        </div>
    );
}

export default App;