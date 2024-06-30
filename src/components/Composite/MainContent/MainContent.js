/* src/components/Composite/MainContent/MainContent.js */
import React, { useState } from 'react';
import './MainContent.css';

/* Import Components */
import HeaderBar from '../HeaderBar/HeaderBar';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';

const MainContent = () => {
    const [content, setContent] = useState('about');

    const renderContent = () => {
        switch (content) {
            case 'about':
                return <About/>;
            case 'resume':
                return <Resume/>;
            case 'projects':
                return <Projects/>;
            default:
                return <About/>;
        }
    };

    return (
        <div className="mainContent">
            <HeaderBar setContent={setContent} content={content}/>
            {renderContent()}
        </div>
    );
};

export default MainContent;