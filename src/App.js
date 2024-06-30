//src/App.js
import React, { useState } from 'react';
import './App.css';

/* Import components */
import ProfileBox from './components/Elements/ProfileBox/ProfileBox';
import HeaderBar from './components/Elements/HeaderBar/HeaderBar';
import About from './components/Elements/About/About';

/* Import data */
import profileBox from './data/profileBox';
import about from './data/about';

function App() {
    const [section, setSection] = useState('about');
    const renderSection = () => {
        switch (section) {
            case 'about':
                return <About paragraph={about.paragraph} cards={about.cards}/>;
            case 'resume':
                //return <Experience />;
            case 'projects':
                //return <Projects />;
            default:
                //return <About />;
        }
    };
    const headerTitle = () => {
        switch (section) {
            case 'about':
                return 'About';
            case 'resume':
                return 'Resume';
            case 'projects':
                return 'Projects';
            default:
                return 'About';
        }
    }
    return (
        <div className="App">
            <ProfileBox
                profilePhotoUrl={profileBox.profilePhotoUrl}
                name={profileBox.name}
                title={profileBox.title}
                contacts={profileBox.contacts}
                socials={profileBox.socials}
            />
            <div className="main">
                <HeaderBar
                    title={headerTitle()}
                    section={section}
                    setSection={setSection}
                />
                {renderSection()}
            </div>
        </div>
    );
};

export default App;