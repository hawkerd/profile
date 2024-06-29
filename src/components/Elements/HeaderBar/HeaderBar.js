/* src/components/Elements/HeaderBar/HeaderBar.js */
import React from 'react';
import './HeaderBar.css';

const HeaderBar = ({ setCurrentSection, currentSection }) => {
    return (
        <div className="headerBar">
            <h3 className="headerBar-title">Header Bar</h3>
            <div className="headerBar-buttons">
                <button 
                    className={currentSection === 'aboutMe' ? 'active' : 'inactive'} 
                    onClick={() => setCurrentSection('aboutMe')}
                >
                    About Me
                </button>
                <button 
                    className={currentSection === 'resume' ? 'active' : 'inactive'} 
                    onClick={() => setCurrentSection('resume')}
                >
                    Resume
                </button>
                <button 
                    className={currentSection === 'projects' ? 'active' : 'inactive'} 
                    onClick={() => setCurrentSection('projects')}
                >
                    Projects
                </button>
            </div>
        </div>
    );
};

export default HeaderBar;