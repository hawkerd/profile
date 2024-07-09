//src/App.js
import React from 'react';
import './App.css';

/* Import components */
import ProfileBox from './components/Composite/ProfileBox/ProfileBox';
import MainContent from './components/Composite/MainContent/MainContent';

function App() {
    return (
        <div className="App">
            <ProfileBox className="profile-box"/>
            <MainContent className="main-content"/>
        </div>
    );
};

export default App;