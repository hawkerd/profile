//src/App.js
import React, { useState } from 'react';
import './App.css';

/* Import components and data */
import ProfileBox from './components/Elements/ProfileBox/ProfileBox';
import profileBox from './data/profileBox';
import HeaderBar from './components/Elements/HeaderBar/HeaderBar';

function App() {
    const [currentSection, setCurrentSection] = useState('aboutMe');

    return (
        <div className="App">
            <ProfileBox
                profilePhotoUrl={profileBox.profilePhotoUrl}
                name={profileBox.name}
                title={profileBox.title}
                contacts={profileBox.contacts}
                socials={profileBox.socials}
            />
            <HeaderBar
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
            />
        </div>
    );
};

export default App;