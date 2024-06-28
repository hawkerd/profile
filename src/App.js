//src/App.js
import React from 'react';
import './App.css';

/* Import components and data */
import ProfileBox from './components/Elements/ProfileBox/ProfileBox';
import profileBox from './data/profileBox';

function App() {
    return (
        <div className="App">
            <ProfileBox
                profilePhotoUrl={profileBox.profilePhotoUrl}
                name={profileBox.name}
                title={profileBox.title}
                contacts={profileBox.contacts}
                socials={profileBox.socials}
            />
        </div>
    );
};

export default App;