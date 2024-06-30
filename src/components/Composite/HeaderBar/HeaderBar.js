/* src/components/Composite/HeaderBar/HeaderBar.js */
import React from 'react';
import './HeaderBar.css';

const HeaderBar = ({ content, setContent }) => {
    const headerTitle = () => {
        switch (content) {
            case 'about':
                return 'About';
            case 'resume':
                return 'Resume';
            case 'projects':
                return 'Projects';
            default:
                return 'About';
        }
    };

    return (
        <div className="header-bar">
            <h3 className="header-bar__title">{headerTitle()}</h3>
            <div className="header-bar__buttons">
                <button 
                    className={content === 'about' ? 'header-bar__buttons--active' : 'header-bar__buttons--inactive'} 
                    onClick={() => setContent('about')}
                >
                    About
                </button>
                <button 
                    className={content === 'resume' ? 'header-bar__buttons--active' : 'header-bar__buttons--inactive'} 
                    onClick={() => setContent('resume')}
                >
                    Resume
                </button>
                <button 
                    className={content === 'projects' ? 'header-bar__buttons--active' : 'header-bar__buttons--inactive'} 
                    onClick={() => setContent('projects')}
                >
                    Projects
                </button>
            </div>
        </div>
    );
};

export default HeaderBar;