/* src/components/Elements/HeaderBar/HeaderBar.js */
import React from 'react';
import './HeaderBar.css';

const HeaderBar = ({ title, section, setSection }) => {
    return (
        <div className="headerBar">
            <h3 className="headerBar-title">{title}</h3>
            <div className="headerBar-buttons">
                <button 
                    className={section === 'about' ? 'active' : 'inactive'} 
                    onClick={() => setSection('about')}
                >
                    About
                </button>
                <button 
                    className={section === 'resume' ? 'active' : 'inactive'} 
                    onClick={() => setSection('resume')}
                >
                    Resume
                </button>
                <button 
                    className={section === 'projects' ? 'active' : 'inactive'} 
                    onClick={() => setSection('projects')}
                >
                    Projects
                </button>
            </div>
        </div>
    );
};

export default HeaderBar;